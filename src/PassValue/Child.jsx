import React, { Component } from 'react';
import styles from './child.module.css';
import Toolbar from './Toolbar';
class Child extends Component {

    state = {
        childValue : "I am child value"
    }
    triggerParent = () =>{
        this.props.onChild(this.state.childValue)
    }
    render() {
       
        return (
            <div className={styles.container}>
                <h3>Child</h3>
                <button onClick={this.triggerParent}>Trigger Parent Function</button>
                <p>{this.props.message}</p>
                <Toolbar/>
            </div>
        );
    }
}

export default Child;