export function nextId(num){
    return{
        type:'next',
        num
    }
}

export function lastId(num){
    return{
        type:'last',
        num
    }
}