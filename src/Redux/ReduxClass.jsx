import React, { Component } from 'react';
import { connect } from 'react-redux'; //Provider -> connect

class ReduxClass extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Use Redux with Class</h3>
                <p>{this.props.serviceId}</p>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    //console.log(state);
    return state
}
export default connect(mapStateToProps)(ReduxClass);