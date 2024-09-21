import { useState,useEffect } from "react";
function GetallTodos() {
    const [todos,settodos] = useState([]);

    const Displaying = async () => {
        const response = await fetch("http://localhost:4000/v1/Todos",{
            method:"GET",
            headers:{
                "Content-Type": "application/json" 
            }
        })
        const output  = await response.json();
        settodos(output.data)
        console.log(output.data) 
    }
    useEffect(() => {
        Displaying();
    }, []);

    const DeleteHandler = async (id)=>{
        const confirmed = window.confirm("do you want to delete");
        if(confirmed){
            try {   
                const response = await fetch(`http://localhost:4000/v1/Delete`,{
                    method:"DELETE",
                    body:JSON.stringify({
                        id:id
                    }),
                    headers:{
                        "Content-Type": "application/json" 
                    }
                });
                if(response.ok){
                    console.log("The user is been deleted");
                    Displaying()
                }else{
                    console.log("error")
                }
                console.log(response)
            } catch (error) {
                console.log("there is an error in the code");
                console.log(error)
            }
        }
    }

    async function EditHandler(id){
        const confirmed = window.prompt("Enter what you wnat to change");
            try {   
                const response = await fetch(`http://localhost:4000/v1//find/${id}`,{
                    method:"PUT",
                    body:JSON.stringify({
                        id:id,
                        description:confirmed
                    }),
                    headers:{
                        "Content-Type": "application/json" 
                    }
                });
                if(response.ok){
                    console.log("The user is been deleted");
                    Displaying()
                }else{
                    console.log("error")
                }
                console.log(response)
            } catch (error) {
                console.log("there is an error in the code");
                console.log(error)
            }
    }
    return (  
        <div>
            {
                todos.length === 0 ?(<p>no todo Found</p>):(todos.map((todo)=>
                    (
                    <div key={todo.id}>
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                        <button onClick={() => EditHandler(todo._id)}>Edit</button>
                        <button onClick={() => DeleteHandler(todo._id)}>Delete Todo</button>
                    </div>   
                )))
            }
        </div>
    );
}

export default GetallTodos;