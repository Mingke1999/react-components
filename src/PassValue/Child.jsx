import React, { Component } from 'react';
import styles from './child.module.css';

class Child extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h3>Child</h3>
            </div>
        );
    }
}

export default Child;