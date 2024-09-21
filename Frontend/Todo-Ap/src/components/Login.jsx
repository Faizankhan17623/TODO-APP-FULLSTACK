import { useState } from "react";
function Create() {
    const [FormData,setFormData] = useState({
        names:"",
        email:"",
        password:""
    })
    function handlerChange(event){
        const {name,value} = event.target;
        setFormData(prevstatte=>({
            ...prevstatte,
            [name]:value
        }));
    }
    async function Connection (){
        const response = await fetch('http://localhost:4000/v1/Signin',{
            method:"POST",
            body:JSON.stringify({
                name:FormData.names,
                email:FormData.email,
                password:FormData.password
            }),
            headers:{
                "Content-Type": "application/json" 
            }
        });

        console.log(response)
    }
    function ClickHandler(e){
        e.preventDefault();
        Connection()
        console.log(FormData)
    }
    return ( 
        <div>
            <form action="">
                <input type="text" name="names" id="names" placeholder="Enter your name" value={FormData.names} onChange={handlerChange}/>
                <input type="text" name="email" id="email" placeholder="Enter your email " value={FormData.email} onChange={handlerChange}/>
                <input type="text"name="password" id="password" placeholder="Enter the  password" value={FormData.password} onChange={handlerChange}/>
            </form>
            <button onClick={ClickHandler}>Submit</button>
        </div>
    );
}

export default Create;
