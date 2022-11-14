/**
 * 2.1 init reducer state
 */
const initState = {
    serviceId:0
}
/**
 * 2.2 define reducer: reducer must be a function
 * @params state
 * @params action
 */
export default function services(state=initState,action){
    //state read only in reducer
    switch(action.type){
        case 'last':
            let lastState = Object.assign({},state);
            lastState.serviceId -= action.num;
            return lastState;
        case 'next':
            let nextState = Object.assign({},state);
            nextState.serviceId += action.num;
            return nextState;
        default:
            return state;
    }
}