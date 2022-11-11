import React from "react";

export default class UseClass extends React.Component{
    constructor(props){
    //Mounting 1. intial states and props
        console.log("intial states and props")
        console.log(props)
        super(props)
        this.state = {
            count:123,
            enabled:true
        }
    }
    //Mounting 2: After virtual DOM, before the actual DOM
    static getDerivedStateFromProps(props,state){
        console.log("before the actual DOM")
        console.log(props,state)
        return 10; //this is required and received by componentDidUpdate as snapshot parameter
    }
    /**
     * Updating 2.1
     * comparing this.state === prevProps, this.state === prevState
     * provide parameter to compare difference between the current and prev
     */
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate")
        return this
    }
    
    /**
     * Updating 2.5
     * comparing this.state === nextProps, this.state === nextState
     * return true -> component update otherwise doesn't
     */
    shouldComponentUpdate(nextProps,nextState){
        return this.state.enabled
        // if(nextProps===this.props){
        //     return false
        // }
    }
    //updating 2.9
    componentDidUpdate(prevProps,prevState,snapsot){
        console.log("componentDidUpdate",snapsot)
    }

    /**
     * functions throughout the whole file
     */
    //increate count number by 1
    OneMore=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    //whether should component update
    switchUpdate = () =>{
        this.setState({
            enabled:!this.state.enabled
        })
    }
    //Mounting 3: Create Virtual DOM, execute Diff algorithm, update DOM tree
    render(){
        console.log("Rendering")
        return(
            <div>
                <h3>{'REACT Life Cycles with Class'}</h3>
                <button onClick={this.OneMore}>Increase</button>
                <p>{this.state.count}</p>
                <button onClick={this.switchUpdate}>Switch</button>
                <p>shouldComponentUpdate:{this.state.enabled.toString()}</p>
            </div>
        )
    }
    //Components did mount
    componentDidMount(){
        console.log("Component Mounted")
    }

    //only in routing replaced status
    componentWillUnmount(){
        console.log("component uninstalled")
    }
}