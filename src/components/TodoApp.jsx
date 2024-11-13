import React, { useRef, useState } from 'react'
import "./TodoApp.css"

function TodoApp() {
    let [item,setItem]= useState("")
    let [items,setItems]= useState([])
    let inputRef = useRef(null)
    // console.log(items);

    let changeItem = ({target:{value}})=>{
        setItem(value)
        
    }
    // console.log(item);
    let addItems = ()=>{
        setItems([...items,item])
        
    }
    let deleteItem = (id)=>{
        // console.log(id);
        let filteredItem = items.filter((_,index)=>id !== index)
        setItems(filteredItem)
    }
    let editItems = (id)=>{
        inputRef.current.focus()
        inputRef.current.value = items[id
            
        ]
        let filteredItem = items.filter((_,index)=>id !== index)
        setItems(filteredItem)
    }
  return (
    <div className='container'>
        <div className="container1">
            <h1 className='title'>TODO APP</h1>
        <div className="topsec">
            <input type="text" placeholder='Enter your task' onChange={changeItem} ref={inputRef}/>
            <button className='addbtn' onClick={addItems}>Add</button>
        </div>
        <div className="itemslist">
            {
                items.map((itm,index)=>{
                    return(
                        <div className="contents">
                            <ol>
                            <div className="list">
                            <li key={index}>{index+1}. {itm}</li>
                            </div>
                            <div className="listbtn">
                            <button className='delbtn' onClick={()=>{
                                deleteItem(index)}}
                            >Delete</button>
                            <button className='delbtn' rel={inputRef} onClick={()=>{
                                editItems(index)
                            }}>Edit</button>
                            </div>
                            
                        </ol>
                        </div>
                    )
                })
            }
        </div>
        </div>

    </div>
  )
}

export default TodoApp