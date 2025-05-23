const BASE_URL = 'http://localhost:5000';

export const DRINK_URL = BASE_URL + '/api/drink';
export const DRINK_TAGS_URL = DRINK_URL + '/tags';
export const DRINK_BY_SEARCH_URL = DRINK_URL + '/search/';
export const DRINK_BY_TAG_URL = DRINK_URL + '/tag/';
export const COFFE_BY_ID_URL = DRINK_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';


