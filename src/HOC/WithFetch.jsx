import React, { Component } from 'react';
/**
 * High order component
 * 1. must be a fuunction
 * 2. parameters are components
 * 3. return components
 */
const WithFetch = (url) => (Component) =>{
    return class extends React.Component{
        constructor(){
            super();
            this.state = {
                services:[],
                loading:true
            }
        }
        //basic element will be loaded first and then loading status is true
        render(){
           if(this.state.loading){
                return(
                    <div>Loading</div>
                )
           }else{
                return(
                    <Component services={this.state.services}/>
                )
           } 
        }
        //after rendering, start to fetch services
        componentDidMount(){
            //console.log("I AM THE REPEAT ELEMENT BETWEEN COMPONENTS")
            fetch(url).then(res=>res.json())
            .then(data=>{
                //console.log(data.$values)
                this.setState({
                    services:data.$values,
                    //once success loading status false
                    loading:false
                })
            })
        }
    }
}
export default WithFetch;
// // improve component reusable and reduce code redundancy
// class Services extends React.Component{
//     render(){
//         return(
//             <div>
//                 Service Name: {this.props.data}
//             </div>
//         )
//     }
// }
// const FetchServices = withFetch(Services)

// export default class ServicesList extends Component {
//     render() {
//         return (
//             <div>
//                 <FetchServices data="Drama"/>
//             </div>
//         );
//     }

// }

