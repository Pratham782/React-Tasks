import React from "react";
import Header from "./Header";
import Form from "./Form";
import Listitems from "./Listitems";

export default function View(){
    return (
        <React.Fragment>
            <Header/>
            <Form/>
            <Listitems/>
        </React.Fragment>
    )
}