
const initialstate = {
    user: []
}

export const Regitrationreducer = (state = initialstate, action) => {
    console.log("Reducer data  is ", action.payload)
    console.log("id data  is ", action.id)


    switch (action.type) {

        case 'SUBMIT':
            return {
                ...state,
                user: [...state.user, action.payload]

            }

        case 'DELETEID':

            return { ...state, user: state.user.filter((item, index) => index !== action.id) }

        case 'UPDATEDID':
            return {

                user: action.data

            }
        default: return state
    }
}