import axios from "axios";

export function newEvent(event){
    return{
        type:'newEvent',
        event
    }

}

export function delEvent(id){
    return{
        type:'delEvent',
        id
    }
}

/**
 * async fetching events
 */
export function asyncGetEvent(url){
    return dispatch =>{
        axios.get(url)
        .then(
            data=>{
                console.log(data.data.$values);
                dispatch(newEvent(data.data.$values))
            }
        )
    }
}