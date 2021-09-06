
let userReducer = (state = null ,action)=>{
    switch(action.Type) {
        case "SET_USER":
            return action.payload

        default:
            return state
    }
}


export default userReducer;