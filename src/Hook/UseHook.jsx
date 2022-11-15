import React,{ useState, useEffect, useRef} from "react"; //rfc
import HookChild from "./HookChild";
import { useSelector,useDispatch,useStore } from "react-redux";
import * as serviceActions from '../Redux/action/service';
export const HookContext = React.createContext();
const MyAPI = {
    count:0,
    subScribe(cb){
        this.intervalId = setInterval(()=>{
                this.count+=1
                cb(this.count)
            },1000)
    },
    unSubscribe(){
        clearInterval(this.intervalId);
        this.reset();
    },
    reset(){
        this.count = 0
    }
}
export default function UseHook(){
    const [message,setMessage] = useState("Hello Hook")
    const [count,setCount] = useState(0);
    const hello = useRef(null);

    const serviceId = useSelector(state=>state); //mapStateToProps
    const dispatch = useDispatch(); //mapDispatchToProps
    const store = useStore();
    //console.log(serviceId.services.serviceId)
    /**
     * componentDidMount, componentDidUpdate
     * componentWillUnmount
     */
    //listen to message
    useEffect(()=>{
        MyAPI.subScribe(count=>{
            setCount(count)
        })

        //componentWillUnmount
        return function(){
            MyAPI.unSubscribe()
        }
    },[])

    /** [] not listening */
    useEffect(()=>{
        console.log("useEffect B")
        console.log(store.getState());
    },[])

    function newMessage(){
        setMessage("Hook useState");
        hello.current.innerHTML = "Button";
    }
    function serviceHandle(){
        dispatch(serviceActions.nextId(1))
    }
    return(
        <div>
            <h3>Hook<p>{message}</p></h3>
            <button onClick={newMessage} ref={hello}>New Message</button>
            <p>Count:{count}</p>
            <HookContext.Provider value={"Value from Top Hook"}>
                <HookChild/>
            </HookContext.Provider>
            <p>Redux ServiceId: {serviceId.services.serviceId}</p>
            <button onClick={serviceHandle}>Dispatch ServiceId</button>
        </div>
    )
}