import React,{ useContext} from "react";
import { HookContext } from "./UseHook";

export default function HookChild(){
    const value = useContext(HookContext);
    return(
        <div>
            <h3>Hook Child</h3>
            <p>Value: {value}</p>
        </div>
    )
}