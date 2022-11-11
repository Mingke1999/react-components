# React Startup
[router](https://reactrouter.com/en/6.4.3/start/tutorial)
> npm install react-router-dom

[Scoped-CSS](https://www.youtube.com/watch?v=bF5vEmiMzPg&ab_channel=SonnySangha)
- naming css file name.module.css
- import css file as styles and assign it to className
``` Javascript 
    import styles from './path';
    <div className={styles.container}>
        <h3>Child</h3>
    </div> 
```
[Lifting-state-up](https://reactjs.org/docs/lifting-state-up.html)
> 0. definition: several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor
> 1. props: parent to children
> 2. props.functions: child to the parent.
```Javascript
//parent
 getChildValue = (msg) =>{
        console.log("from the parent: ", msg)
    }
<Child message="Hello From The parent" onChild={this.getChildValue}/>
//children
this.props.onChild(this.state.childValue)
```