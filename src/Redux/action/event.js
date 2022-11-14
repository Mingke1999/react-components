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