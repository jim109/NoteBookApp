
//STATE = esta VACIO cuando no esta autenticado
//AUTENTICADO = vamos a tener la informacion del uid: jahsdhajsdhj, name: jimmy


/* 
{
    uid: 'kalsjdkjafl'
    name:'Jimmy'
}

 */
import { types } from "../type/types";

/* const initialState = {
    uid: 121212,
    name: 'Jimmy',
} */

export const authReducer = (state = {}, action) =>{

    switch (action.type) {
        case types.login:
            return{
                uid:action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return { }
        default:
            return state;
    }
}