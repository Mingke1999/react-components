import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css';

export default function Home(){
    return(
        <div>
           <ul className={styles.menuList}>
            <li>
                <Link to={`/parent`}>Passing Value Between Components</Link>
            </li>
            <li>
                <Link to={`/classcycle`}>React Components Lifecycles</Link>
            </li>
           </ul>
        </div>
    )
}