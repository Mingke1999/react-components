import React, { Component } from 'react';
import styles from './parent.module.css';
import Child from './Child';
export const {Provider,Consumer} = React.createContext('default message')
//passing value to sub-layers, which would reduce component's reusable
export default class Parent extends Component {
    constructor(){
        super();
        this.state = {
            message :''
        }
    }
    getChildValue = (message) =>{
        //console.log("from the parent: ", msg)
        this.setState({
            message //this.state.message = message
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <h3>Parent</h3>
                <Provider value='dark'>
                    <Child message="Hello From The parent" onChild={this.getChildValue}/>
                </Provider>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
