import React from "react";

import "./spinner.css";

//красивые спинеры можно получить с сайта

const Spinner = () => {
    return (
        <div className="lds-css">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default Spinner;