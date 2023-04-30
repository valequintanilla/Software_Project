import {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import UserHome from './UserHome';
import {authourizeUser} from '../API_Calls/API.js';

//import './index.css';

const Login = () => {
    const userRef = useRef(); 
    const errRef = useRef();

    //States taht corresponds to input and error 
    const [email,setEmail] = useState('');
    const[pwd, setPwd] = useState('');
    const[errMsg, setErrMsg] = useState('');
    
    //Shows the success state
    const[success, setSuccess] = useState(false);

    useEffect(() =>{
        userRef.current.focus();
    }, [])


    useEffect(() =>{
        setErrMsg('');
    }, [email, pwd])

    
    //Handle submit function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        console.log(email, pwd);

        //CALLING API FUNCTION:
        authourizeUser(email);
        
        setEmail(''); //once submitted it will clear the username and pwd components
        setPwd('');
        setSuccess(true);
        
    }

    return(
        <>
            {success ? (
                        <section>
                            <div>
                                <UserHome/>
                            </div>
                        </section>
                    ) : (
                <section>
                    <div>
                        <p ref={errRef} className={errMsg ? "errmsg": /*error message display*/
                        "offscreen"}
                        aria-live= "assertive">{errMsg}
                        </p>
                        <h1>Sign In</h1>
                        <form onSubmit = {handleSubmit}>
                        <label htmlFor="username">Email:</label>
                            <input 
                            type = "text" 
                            id="email"
                            ref={userRef}
                            autoComplete="off" /*wont suggest previous inputs*/
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            />
                    
                            <label htmlFor="password">Password:</label>
                            <input 
                            type = "password"  /*gives dots insted of text when typing in password*/
                            id="password"
                            ref={userRef}
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            />
                            <button>Sign In</button>

                        </form>
                        <p>
                            Need an Acoount?<br/>
                            <span className="line">
                                <Link to ='/Register'>Create Account</Link>
                            </span>
                        </p>
                    </div>
                    
                </section>
            )}
        </>
    )
}
export default Login