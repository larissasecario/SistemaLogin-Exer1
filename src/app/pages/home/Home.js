import '../style.css';
import { useNavigate } from "react-router-dom";


export const Home = ()=>{
    const navigate = useNavigate();

    const sair = ()=>{
        navigate('/login');
    }
    
    
    
    return(
    <>
        <h1>Home</h1>
    <div className='sairMain'>
        <input onClick={sair} type='submit' id='btnSair' value='Sair' ></input>
    </div>    
    </>

);}