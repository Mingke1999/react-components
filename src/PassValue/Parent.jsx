import React, { Component } from 'react';
import styles from './parent.module.css';
import Child from './Child';
class Parent extends Component {
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
                <Child message="Hello From The parent" onChild={this.getChildValue}/>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Parent;