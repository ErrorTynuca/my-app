import preloader from "../../../assets/img/_______.gif";
import React from "react";

let Preloader = (props) => {
     return <div style={ {backgroundColor: 'red'} }>
        <img src={preloader} />
    </div>
}

export default Preloader