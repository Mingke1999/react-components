import React, { Component } from 'react';
import styles from './parent.module.css';
import Child from './Child';
class Parent extends Component {
    getChildValue = (msg) =>{
        console.log("from the parent: ", msg)
    }
    render() {
        return (
            <div className={styles.container}>
                <h3>Parent</h3>
                <Child message="Hello From The parent" onChild={this.getChildValue}/>
            </div>
        );
    }
}

export default Parent;