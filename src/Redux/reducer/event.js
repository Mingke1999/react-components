import { findIndex } from "lodash";

const initState = [
    {
        id:1001,
        name:'eventeasy'
    }
]

//var arr = [1,2,3]
//[...Array,4] = [1,2,3,4]
export default function event(state=initState,action){
    switch(action.type){
        case 'newEvent':
            return[
                ...state,
                action.event
            ];
        case 'delEvent':
            // let currentId = 0;
            // for(var i=0;i<state.length;i++){
            //     if(state[i].id===action.id){
            //         currentId = i
            //     }
            // }
            let currentId = findIndex(state,ele=>ele.id === action.id)
            return[
                ...state.slice(0,currentId),
                ...state.slice(currentId+1)
            ];
        default:
            return state;
    }

}