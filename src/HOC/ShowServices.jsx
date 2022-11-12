import React from 'react';
import WithFetch from './WithFetch';
const ShowServices = WithFetch("https://eventeasyau.azurewebsites.net/api/services/getallservices")(    
props =>{
    console.log(props)
        return(
            <div>
                <ul>
                    {
                        props.services.map((ele,index)=>{
                            return(
                                <li key={index}>
                                    {ele.serviceName}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
)
export default ShowServices;