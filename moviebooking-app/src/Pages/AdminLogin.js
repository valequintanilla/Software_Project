import {useRef, useState, useEffect}  from 'react';
import {authourizeAdmin} from '../API_Calls/API.js';
import {Link} from 'react-router-dom';
import AdminHome from './AdminHomepage';

const AdminLogin = () => {
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
    //Handle submit function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        console.log(email, pwd);
        
        //Back end : try and ctach block
        try{
            //CALLING API FUNCTION:
            authourizeAdmin(email);
            setEmail(''); //once submitted it will clear the username and pwd components
            setPwd('');
            setSuccess(true);
            

        }catch(err){
            if(!err?.response){
                setErrMsg('No Server Response');
            }else{
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
        
    }

    return(
        <>
            {success ? (
                        <section>
                            <AdminHome/>
                        </section>
                    ) : (
                <section>
                    <div>
                        <p ref={errRef} className={errMsg ? "errmsg": /*error message display*/
                        "offscreen"}
                        aria-live= "assertive">{errMsg}
                        </p>
                        <h1>Admin Login</h1>
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
                    </div>  
                </section>
            )}
        </>
    )
}
export default AdminLogin
