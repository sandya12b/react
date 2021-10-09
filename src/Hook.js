import React,{useState} from 'react'


export default function Hook() {
    let [name,setName]=useState("ram")
    return (
        <div>
            <h1 onMouseOver={()=>setName("Sri Ram")}
             onMouseDown={()=>setName("Sri Ram is a good boy")}>{name}</h1>
        </div>
    )
}
