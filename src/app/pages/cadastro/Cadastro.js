import { useNavigate } from "react-router-dom";
import '../style.css';

export const Cadastro = ()=>{
    const navigate = useNavigate();
    const increver = () =>{
        const email = document.querySelector('#email');
        const confirmarEmail = document.querySelector('#confirmarEmail');
        const senha = document.querySelector('#senha');
        const informacao = document.querySelector('#informacao');
        if(email.value === '' || confirmarEmail.value === '' || senha.value === ''){
            informacao.innerHTML = 'Há algum campo faltando';
        }else{
            if(email.value !== confirmarEmail.value){
                        informacao.innerHTML ='E-mail não são iguais, tente novamente';
            }else{
                localStorage.setItem('email',email.value);
                localStorage.setItem('confirmacao',confirmarEmail.value);
                localStorage.setItem('senha',senha.value);
                navigate('/login');
            }
        }
    
    }

    return(
    <>
    <h1>Cadastro</h1>   
    <div className='mainGlobal'>
        
        <input  id='email' type='text' placeholder='Digite seu E-mail:' ></input>
        <input  id='confirmarEmail' type='text' placeholder='Confirme seu E-mail:' ></input>
        <input  id='senha' type='password' placeholder='Digite sua senha:'></input>
        <input  onClick={increver} type='submit' id='btnIncrever' value='inscrever-se' ></input>
        <p id='informacao'></p>

    </div>    
    </>

);}