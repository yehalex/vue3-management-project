import axios from "axios";

// fake api calls

// export function login() {
//     return({

//     })
// }



import { getToken } from "../utils/auth"
// axios interceptors, add header token value
export function getNavData() {
    // return axios({
    //     method: 'GET',
    //     url: "",        
    // })
    const token = getToken();
    if (token === 'admin') {  
        return ({
            res: [
                {routeName: 'ProductManagement', routeText: 'Product Management', id: 2},
                {routeName: 'TodoManagement', routeText: 'Tasks', id: 3},
                {routeName: 'UserManagement', routeText: 'User Management', id: 4},
            ]
        })
    } else if (token === 'visitor') {
        return ({
            res: [
                {routeName: 'ProductManagement', routeText: 'Product Management', id: 2},
                {routeName: 'TodoManagement', routeText: 'Tasks', id: 3},
            ]
        })
    } else {
        return {
            res: 'no valid user token'
        }
    }
}


export async function getProducts() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data
    } catch (error) {
        console.log('failed to get products')
    }
}

export async function getTodos() {
    try {
        const response = await axios.get('https://dummyjson.com/todos?limit=5');
        return response.data.todos
    } catch (error) {
        console.log('failed to get todos')
    }
}