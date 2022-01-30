import React from 'react'

import { useParams,useLocation} from "react-router-dom";

const Service = (props) => {

    let {fname,lname}=useParams();
    let location=useLocation();
    return (
        <div>
            <h1>this is {fname} {lname}</h1>

            <h1>this is locations{location.pathname}</h1>


            {
                location.pathname===`/service/bibek/chhetri` ? (<button>click me </button>) :"this is null"

            }
            
        </div>
    )
}

export default Service;
