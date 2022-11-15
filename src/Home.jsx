import React,{Component} from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css';
const MyAPI = {
    count:0,
    subScribe(cb){
        this.intervalId = setInterval(()=>{
                this.count += 1;
                cb(this.count)
            },1000
        )
    },
    unSubscribe(){
        clearInterval(this.intervalId);
        this.reset();
    },
    reset(){
        this.count = 0
    }
}
export default class Home extends Component{
    constructor(){
        super();
        this.state ={
            count:0
        }
    }
    render(){
        return(
            
            <div>
               <h3>Optimized Time Counting: {this.state.count}</h3>
               <ul className={styles.menuList}>
                <li>
                    <Link to={`/parent`}>Passing Value Between Components</Link>
                </li>
                <li>
                    <Link to={`/classcycle`}>React Components Lifecycles</Link>
                </li>
                <li>
                    <Link to={`/calculator`}>Lifting State Up</Link>
                </li>
                <li>
                    <Link to={`/hoc`}>High Order Component</Link>
                </li>
                <li>
                    <Link to={`/reduxs`}>Redux Demo</Link>
                </li>
                <li>
                    <Link to={`/hook`}>Hook Knowledges</Link>
                </li>
               </ul>
            </div>
        )
    }
    componentDidMount(){
        MyAPI.subScribe(currentCount=>{
            this.setState({
                count:currentCount
            })
        })
    }
    /**
     * warning: can't resolve a react state update on an unmounted component
     * https://bobbyhadz.com/blog/react-cant-perform-react-state-update-on-unmounted-component
     */
    componentWillUnmount(){
        //clear the timer before unmounted
        MyAPI.unSubscribe();
    }
}