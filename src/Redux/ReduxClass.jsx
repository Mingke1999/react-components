import React, { Component } from 'react';
import { connect } from 'react-redux'; //Provider -> connect
//import {nextId,lastId} from './action/service';
import { bindActionCreators } from 'redux';
import * as serviceActions from './action/service'
import EventRedux from './EventRedux';
//rcr
class ReduxClass extends Component {
    constructor(){
        super();
        this.state = {
            num:0
        }
    }
    handleLast = () =>{
        //this.props.lastId()
        this.props.serviceActions.lastId(Number(this.state.num))
    }
    handleNext = () =>{
        //this.props.nextId()
        this.props.serviceActions.nextId(parseInt(this.state.num))
    }
    numHandle = (e) =>{
        this.setState({
            num:e.target.value
        })
    }
    render() {
        //console.log(this.props)
        return (
            <div>
                <h3>Use Redux with Class</h3>
                <input type='text' value={this.state.num} onChange={this.numHandle}/>
                <button onClick={this.handleLast}>Last</button>
                <p>Store ServiceId: {this.props.serviceId}</p>
                <button onClick={this.handleNext}>Next</button>
                <EventRedux/>
            </div>
        );
    }
}
/**
 * read only
 */
const mapStateToProps = state =>{ //convert state to props
    //console.log(state);
    return state.services; 
}
/**
 * write
 */
const mapDispatchToProps = dispatch =>{
    return{
        // lastId:()=>{dispatch(lastId())},
        // nextId:()=>{dispatch(nextId())}
        serviceActions:bindActionCreators(serviceActions,dispatch)
    }
}
/**
 * read before write
 */
export default connect(mapStateToProps,mapDispatchToProps)(ReduxClass);
