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
[Optimizing](https://reactjs.org/docs/optimizing-performance.html)
> 1. only render component when element changes detected,
- 1.1 use shouldComponentUpdate()
- 1.2 class extends React.PureComponent
> 2. Cancel Timer: when component is destroyed
> 3. Network Request: Cancel network request
> 4. Event Listener: destroy event handle function

[redux](https://react-redux.js.org)
> npm install --save redux
> npm install --save react-redux
> npm install --save redux-devtools-extension
> npm install --save redux-logger
> npm install --save redux-thunk

1. store: storage of states (one project one store), state: current data
2. reducers: define the way how app responses to action(action.type) and sent to the global store
3. action: passing data from view to store
4. mapStateToProps readOnly, mapDispatchToProps write
5. dispatch shortcut: bindActionCreators

[lodash](https://lodash.com/docs/4.17.15#find)
> npm install --save lodash

[Hook](https://reactjs.org/docs/hooks-reference.html)
1. Only Call Hooks at the Top Level
2. naming convention, start with 'Use'

[Redux Toolkit](https://redux.js.org/tutorials/quick-start)
> npm install @reduxjs/toolkit react-redux
