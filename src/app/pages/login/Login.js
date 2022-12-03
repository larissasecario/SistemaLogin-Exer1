import '../style.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Login = ()=>{
    const navigate = useNavigate();

    const entrar = ()=> {
        const email = document.querySelector('#email').value;
        const senha = document.querySelector('#senha').value;
        const informacao = document.querySelector('#informacao');

        const emailVerificado = localStorage.getItem('email');
        const senhaVerificado = localStorage.getItem('senha');
        
        if(email === emailVerificado && senha === senhaVerificado){
            navigate('/home');
        }else{
            informacao.innerHTML = 'E-mail ou senha errado'

        }
    }

    return(
    <>
    <h1>Login</h1>
    <div className='mainGlobal'>
        <input id='email' type='text' placeholder='Digite seu E-mail:'></input>
        <input id='senha' type='password' placeholder='Digite sua senha:'></input>
        <p id='informacao'></p>
        <input  onClick={entrar}type='submit' id='btnEntrar' value='Entrar' ></input>
        <p id='mensagemCadastro'>Não possui cadastro?<Link id='linkCadastro'to='/cadastro'>Registre-se</Link></p>
       

    </div>    
    </>)
}; 