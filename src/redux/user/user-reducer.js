import {UserActionTypes} from "./user.types"



//we have used the currentUser value from app.js. 
const Initial_State= {
    currentUser: null
}


const userReducer = (state = Initial_State, action) =>{

    switch (action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload
            } 
        default: 
        return state; 
    }
} 

export default userReducer; 
