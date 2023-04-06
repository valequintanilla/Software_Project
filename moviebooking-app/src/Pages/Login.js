import {useRef, useState, useEffect} from 'react';
//import './index.css';

const Login = () => {
    const userRef = useRef(); 
    const errRef = useRef();

    //States taht corresponds to input and error 
    const [user, setUser] = useState('');
    const[pwd, setPwd] = useState('');
    const[errMsg, setErrMsg] = useState('');
    
    //Shows the success state
    const[success, setSuccess] = useState(false);

    useEffect(() =>{
        userRef.current.focus();
    }, [])


    useEffect(() =>{
        setErrMsg('');
    }, [user, pwd])
    //Handle submit function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        /*Next four lines are just to make sure code work it is still not linked to the back end*/
        console.log(user, pwd);
        setUser(''); //once submitted it will clear the username and pwd components
        setPwd('');
        setSuccess(true);
        
    }

    return(
        <>
            {success ? (
                        <section>
                            <h1>You are logged in!</h1>
                            <br/>
                            <p>
                                <a href="#">Go to Home</a>
                            </p>
                        </section>
                    ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg": /*error message display*/
                    "offscreen"}
                    aria-live= "assertive">{errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form onSubmit = {handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input 
                        type = "text" 
                        id="username"
                        ref={userRef}
                        autoComplete="off" /*wont suggest previous inputs*/
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
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
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}
export default Login