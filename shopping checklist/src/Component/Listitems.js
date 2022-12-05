import React from "react";
import { ref,remove } from "firebase/database";
import { db } from "../Component/Config";

export default class Listitems extends React.Component{
    constructor(props){
        super(props)
        this.state={
          checkValues:[]
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
    }

    handleDelete(id) {
        const refDelete = ref(db, `users/${id}`);
        remove(refDelete).catch((error)=>console.log("Error Founded"+error));
      }
    
    handleCheckbox(id,e){
        (e.target.checked == true)?this.state.checkValues.push(id): this.state.checkValues.pop(id)
      }
    
    handleDeleteAll() {
        this.state.checkValues.map((id)=>{
        let checkRef = ref(db,`users/${id}`)
        remove(checkRef).catch((error)=>{
          console.log("error founded"+error)
        })})
    }

    render(){
        return(
            <div className="list-items">
          <div className="d-flex flex-row justify-content-between align-items-center mx-3">
            <h2>Checklist items</h2>
            <button
              className="btn btn-outline-dark"
              onClick={this.handleDeleteAll}
            >
              Delete Checked
            </button>
          </div>
          <div className="lists">
            <table>
              <thead>
                <tr style={{ margin: "10px" }}>
                  <th>No</th>
                  <th>List Items</th>
                  <th>Check / Uncheck</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(this.props.setText).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th>{index + 1}</th>
                      <td>{this.props.setText[id].username}</td>
                      <td>
                        <input type="checkbox" onClick={this.handleCheckbox.bind(this,id)}/>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-dark"
                          onClick={this.handleDelete.bind(this, id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        )
    }
}