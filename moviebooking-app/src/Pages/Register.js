import {useRef, useState, useEffect} from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "./api/axios"
import {Link} from 'react-router-dom';
//import './index.css';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/; //4 to 20 chars for the username
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

//set const url
const REGISTER_URL = '/register';
 const Register = () => {
    const userRef = useRef(); //get users import
    const errRef = useRef(); //error input

    const [user, setUser] = useState(''); //tied to user import
    const [validName, setValidName] = useState(false); //whether the name validates or not
    const [userFocus, setUserFocus] = useState(false); 

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false); //whether the password validates or not
    const [pwdFocus, setPwdFocus] = useState(false); 
    
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false); //whether if they match
    const [matchFocus, setMatchFocus] = useState(false);

    //Possible error message
    const [errMsg, setErrMsg] = useState('');
    const[success, setSuccess] = useState(false); //boolean if it was successful or not

    useEffect(() => {
        userRef.current.focus();
    }, [])
    //Validate euser name
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    //Validate password
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])
    
    //Error message
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    //Function to handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Protects if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2){
            setErrMsg("Invalid Entry");
            return;
        }
        /*This is where i will need the back end to save data to api
        but for now ill just print the username password and if registration was succesful.
        console.log(user,pwd);
        setSuccess(true);*/
        //Back end : try and ctach block
        try{
            const response = await axios.post(REGISTER_URL
                , JSON.stringify({user, pwd}), 
                {
                headers : {'Content-Type': 'application/json'},
                withcredentials: true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear input fileds
        }catch(err){
            if(!err?.response){
                setErrMsg('No Server Response');
            }else if(err.response?.status === 409){
                setErrMsg('Username Taken');
            }else{
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    }

    return(
        <> 
            {success ?(
                    <section>
                        <h1>Success!</h1>
                        <p>
                            <a href="#">Sign In</a>
                        </p>
                    </section>
                
                ) : (
                <section>
                    <p ref = {errRef} className ={errMsg ? "errmsg":
                    "offscreen"} aria-live= "assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit = {handleSubmit}>
                        <label htmlFor = "username">
                            Username:
                            <span className= {validName ? "valid" : "hide" }> 
                                <FontAwesomeIcon icon = {faCheck} />
                            </span>
                            <span className= {validName || !user ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </span>
                        </label>
                        <input 
                            type = "text"
                            id = "username"
                            ref = {userRef}
                            autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                            onChange = {(e) => setUser(e.target.value)}
                            required
                            aria-invalid = {validName ? "false" : "true"}
                            aria-describedby = "uidnote" 
                            onFocus = {() => setUserFocus(true)} 
                            onBlur = {() => setUserFocus(false)}
                        />
                        <p id ="uidnote" className = {userFocus && user &&
                        !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor ="password">
                            Password:
                            <span className= {validPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon = {faCheck} />
                            </span>
                            <span className= {validPwd || !pwd ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </span>
                        </label>
                        <input 
                            type = "password"
                            id = "password"
                            onChange = {(e) => setPwd(e.target.value)}
                            requiered
                            aria-invalid = {validPwd ? "false" : "true"}
                            aria-describedby = "pwdnote"
                            onFocus = {() => setPwdFocus(true)}
                            onBlur = {() => setPwdFocus(false)}
                        />
                        <p id = "pwdnote" className= {pwdFocus && !validPwd ? "instructions": "offscreen"}>
                            <FontAwesomeIcon icon= {faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a spacial character.<br />
                            Allowed special characters :
                            <span aria-label = 'exclamation mark'>!</span>
                            <span aria-label = 'at symbol'>@</span>
                            <span aria-label = 'hashtag'>#</span>
                            <span aria-label = 'dollar sign'>$</span>
                            <span aria-label = 'percent'>%</span>
                        </p>

                        < label htmlFor = "confirm_pwd">
                            Confirm Password:
                            <span className = {validMatch && matchPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon = {faCheck} />
                            </span>
                            <span className= {validMatch || !matchPwd ? "hide": "invalid"}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </span>
                        </label>
                        <input
                            type = "password"
                            id = "Confirm_pwd"
                            onChange = {(e) => setMatchPwd(e.target.value)}
                            requiered
                            aria-invalid = {validMatch ? "false" : "true"}
                            aria-describedby = "confirmnote"
                            onFocus = {() => setMatchFocus(true)}
                            onBlur = {() => setMatchFocus(false)}
                        />
                        <p id = "confirmnote" className = {matchFocus && !validMatch ? "instructions": "offscreen"}>
                            <FontAwesomeIcon icon = {faInfoCircle}/>
                            Must match the first password input field.
                        </p>

                        <button disabled = {!validName || !validPwd || !validMatch ? true: false}
                        >Sign up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className = "line">
                            <Link to = '/Login'>Sign In</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
 }
export default Register