import {onValue, ref, remove} from 'firebase/database';
import { useEffect, useState } from 'react';
import {db} from '../component/config';

export default function Listitems(){
    let[value,getValue] = useState({});
    let[checkedValue] = useState([]);

    useEffect(()=>{
        let getRef = ref(db,'datauser');
        onValue(getRef,(snapshot)=>{
            if(snapshot.val() !== null){
            getValue(snapshot.val());}
            else{
                getValue({});
            }
        })
    },[])

    function handleDelete(id){
        const delRef = ref(db,`datauser/${id}`)
        remove(delRef).catch((error)=>console.log(error))
    }

    function handleCheckbox(id,e){
        (e.target.checked == true)?checkedValue.push(id):checkedValue.pop(id)
    }

    function handleDeleteChecked(){
        checkedValue.map((id)=>{
            const delRef = ref(db,`datauser/${id}`)
            remove(delRef).catch((error)=>console.log(error))
        })
    }

    function handleDeleteAll(){
      let delAllRef = ref(db,'datauser');
      remove(delAllRef)
    }

    return(
        <div className="list-items">
      <div className="d-flex flex-row justify-content-between align-items-center mx-3">
        <h2>Checklist items</h2>
        <div><button
          className="btn btn-outline-dark me-4" onClick={handleDeleteChecked}>
          Delete Checked
        </button><button
          className="btn btn-outline-dark" onClick={handleDeleteAll}>
          Delete All
        </button></div>
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
            { Object.keys(value).map((id,index)=>{
                    return (
                        <tr key={id}>
                          <td style={{fontWeight:"bold"}}>{index + 1}</td>
                          <td style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>{value[id].username}</td>
                          <td>
                            <input type="checkbox" style={{transform:"scale(1.2)"}} onClick={(e)=>handleCheckbox(id,e)}/>
                          </td>
                          <td>
                            <button className="btn btn-outline-dark" onClick={()=>handleDelete(id)}> Delete </button>
                          </td>
                        </tr>
                      );
                })
            }
          </tbody>
        </table>
      </div>
    </div>
    )
}