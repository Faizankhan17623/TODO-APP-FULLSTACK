import { useState } from "react";

function Creating() {
    const [data,setdata] = useState({
        id:"",
        title:"",
        description :""
    })
    function ChangeHandler(event){
        const {name,value} = event.target;
        setdata(prevstate=>({
            ...prevstate,
            [name]:value
        }))
    }
    const AddingTodo = async () => {
        const response = await fetch('http://localhost:4000/v1/Posting',{
            method:"POST",
            body:JSON.stringify({
                id:data.id,
                title:data.title,
                description:data.description,
            }),

            headers:{
                "Content-Type": "application/json" 
            }
        })
        const output = await response.json();
        console.log(output)
    }
    function CreatingHandler(event){
        event.preventDefault();
        AddingTodo()
    }
    return ( 
        <div>
            <form action="">
                <input type="text" name="id" id="id" placeholder="Enter the id fo whcich you want to enter the todo" value={data.id}  onChange={ChangeHandler}/>
                <input type="text" name="title" id="title" placeholder="Enter your todo title" value={data.title} onChange={ChangeHandler}/>
                <input type="text"  name="description" id="description" placeholder="enter your description" value ={data.description}onChange={ChangeHandler}/>
                <button onClick={CreatingHandler}>Create Todo</button>
            </form>
        </div>
    );
}

export default Creating;
