import React from 'react';
import { Consumer } from './Parent';
class Toolbar extends React.PureComponent {
    constructor(){
        super();
        this.title = React.createRef(); //create a ref to specific element
        this.state = {
            flag : true
        }
    }
    render() {
        return (
            <div>
                <Consumer>
                    {
                        value =>{
                            return <h3 ref={this.title}>Consumer Value From Parent: {value}</h3>
                        }
                    }
                </Consumer>
                {
                    this.state.flag ?
                    <React.Fragment>
                        <p>Some true Content</p>
                        <p>group a list of children without adding extra nodes to the DOM </p>
                    </React.Fragment>
                    :
                    <>
                        <p>Some False Content</p>
                    </>
                }
            </div>
        );
    }
    componentDidMount(){
        //console.log(this.title)
        this.title.current.innerHTML = 'Content Changed by React.createRef()';
        //change element by DOM innerHTML
    }
}

export default Toolbar;