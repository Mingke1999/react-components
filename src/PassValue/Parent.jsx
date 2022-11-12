import React, { Component } from 'react';
import styles from './parent.module.css';
import Child from './Child';
export const {Provider,Consumer} = React.createContext('default message')
//passing value to sub-layers, which would reduce component's reusable
export default class Parent extends Component {
    constructor(){
        super();
        this.state = {
            message :'',
            count:0
        }
    }
    getChildValue = (message) =>{
        //console.log("from the parent: ", msg)
        this.setState({
            message //this.state.message = message
        })
    }
    onIncrease = () =>{
        this.setState({
            count:this.state.count + 1
        })
    }
    render() {
        //console.log("Print from Parent")
        return (
            <div className={styles.container}>
                <h3>Parent</h3>
                <Provider value='dark'>
                    <Child message="Hello From The parent" onChild={this.getChildValue}/>
                </Provider>
                <p>Parnet Count: {this.state.count} <button onClick={this.onIncrease}>Increase</button></p>
               
                <p>{this.state.message}</p>
            </div>
        );
    }
}
