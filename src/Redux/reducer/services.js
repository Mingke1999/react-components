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
    switch(action.type){
        default:
            return state;
    }
}