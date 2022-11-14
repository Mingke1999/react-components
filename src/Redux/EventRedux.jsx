import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as eventActions from './action/event';
import { bindActionCreators } from 'redux';

class EventRedux extends Component {
    newEvent = () =>{
        this.props.eventActions.newEvent({
            id:Math.floor(Math.random()*1000),
            name:'Mam Cook'
        })
    }
    delEvent = (id) =>{
        this.props.eventActions.delEvent(id)
    }
    render() {
        return (
            
            <div>
                <h3>Event</h3>
                <button onClick={this.newEvent}>New Event</button>
                <ul>
                    {
                        this.props.event.map((ele)=>{
                            return <li key={ele.id}>
                                    <span>{ele.name}-{ele.id}</span>
                                    <button onClick={()=>{this.delEvent(ele.id)}}>Delete</button>
                                </li>  
                        
                        })
                    }
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    //console.log(state.event)
    return state
}
const mapDispatchToProps = dispatch =>{
    return {
        eventActions:bindActionCreators(eventActions,dispatch)
    }
}
export default connect( mapStateToProps,mapDispatchToProps)(EventRedux);