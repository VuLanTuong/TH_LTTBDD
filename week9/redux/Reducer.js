
let init = {
    number1: 0,
    number2: 0,
    result: 0
};
export default function Reducer(state = init, action) {
    switch (action.type) {
        case 'CONG':
            return {
                ...state, result:
                    +state.number1 + +state.number2
            }

        case 'TRU':
            return {
                ...state, result:
                    +state.number1 - +state.number2
            }

        case 'NHAN':
            return {
                ...state, result:
                    +state.number1 * +state.number2
            }
        case 'CHIA':
            return {
                ...state, result:
                    +state.number1 / +state.number2
            }

        case 'ONE':
            return { ...state, number1: action.payload };

        case 'TWO':
            return { ...state, number2: action.payload };

        default:
            return state;
    }

}