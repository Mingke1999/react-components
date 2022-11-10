import React, { Component } from 'react';
import styles from './parent.module.css';

class Parent extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h3>Parent</h3>
            </div>
        );
    }
}

export default Parent;