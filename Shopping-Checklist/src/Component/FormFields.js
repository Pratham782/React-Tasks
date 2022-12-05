import React from "react";

export default class FormFields extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form
            onSubmit={(event) => event.preventDefault()}
            className="formStyle d-flex align-items-center justify-content-evenly flex-column"
          >
            <input
              type="text"
              onChange={this.props.change}
              id="inputText"
              value={this.props.text}
            />
            <div>
              <input
                type="submit"
                onClick={this.props.click}
                className="btn btn-outline-dark btn-lg me-2"
              />
            </div>
          </form>
        )
    }
}