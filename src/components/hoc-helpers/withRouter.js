import React from "react";

const withRouter = (Wrap) => {
    return (props) => {
        return <Wrap {...props}/>
    }
};

export default withRouter;