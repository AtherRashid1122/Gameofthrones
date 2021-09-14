



const intialstate = {

    counter: 0
}

export const Loginreducer = (state = intialstate, action) => {

    switch (action.type) {

        case 'INCREAMENT': {

            return { counter: state.counter + 1 }

        }

        case 'DECREAMENT': {

            return { counter: state.counter - 1 }
        }
        default: return state
    }

}