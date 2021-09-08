
let initialState = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    summary:"",
    skill1:"",
    skill2:"",
    skill3:"",
    skill4:"",
}


let personalDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_DETAILS":
            return { ...state, ...action.payload }

        default:
            return state
    }
}

export default personalDetailReducer;