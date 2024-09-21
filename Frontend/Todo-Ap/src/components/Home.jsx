import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return ( 
    <div>
        <p>Todo app</p>
        <div>
            <nav>
                <button onClick={()=>navigate('/Login')}>Login</button>
                <button onClick={()=>navigate('/Create')}>CreateTodo</button>
                <button onClick={()=>navigate('/Update')}>Update</button>
                <button onClick={()=>navigate('/Delete')}>Delete</button>
                <button onClick={()=>navigate('/FindAll')}>showall</button>
                <button onClick={()=>navigate('/Find')}>Find and update</button>
            </nav>
        </div>
    </div> );
}

export default Home;