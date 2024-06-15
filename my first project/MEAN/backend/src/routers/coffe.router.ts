import { Router } from "express";
import { sample_coffe } from "../data";
import asyncHandler from 'express-async-handler'
import { CoffeModel } from '../models/coffe.model';

const router =Router();

router.get("/seed",asyncHandler(
  async (req,res)=>{
    const drinkCount = await CoffeModel.countDocuments();
    if(drinkCount > 0){
      res.send("Seed is already done!");
      return;
    }
    await CoffeModel.create(sample_coffe);
    res.send("Seed Is Done!");
  }
  ))

  router.get("/",asyncHandler(
    async (req, res) => {
      const drink = await CoffeModel.find();
        res.send(drink);
    }
  ))
  router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
      const searchRegex = new RegExp(req.params.searchTerm, 'i');
      const drink = await CoffeModel.find({name: {$regex:searchRegex}})
      res.send(drink);
    }
  ))
  
  router.get("/tags", asyncHandler(
    async (req, res) => {
      const tags = await CoffeModel.aggregate([
        {
          $unwind:'$tags'
        },
        {
          $group:{
            _id: '$tags',
            count: {$sum: 1}
          }
        },
        {
          $project:{
            _id: 0,
            name:'$_id',
            count: '$count'
          }
        }
      ]).sort({count: -1});
  
      const all = {
        name : 'All',
        count: await CoffeModel.countDocuments()
      }
  
      tags.unshift(all);
      res.send(tags);
    }
  ))
  router.get("/tag/:tagName",asyncHandler(
    async (req, res) => {
      const drink = await CoffeModel.find({tags: req.params.tagName})
      res.send(drink);
    }
  ))
  
  router.get("/:coffeId", asyncHandler(
    async (req, res) => {
      const coffe = await CoffeModel.findById(req.params.coffeId);
      res.send(coffe);
    }
  ))

export  default router;

