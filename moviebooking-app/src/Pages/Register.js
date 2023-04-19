import {useRef, useState, useEffect} from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "./api/axios"
import {Link} from 'react-router-dom';

//import './index.css';

const NAME_REGEX = /^[a-zA-z]{1,20}$/ //name can only have alphabetic values
const EMAIL_REGEX = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/ //email
const ADDRESS_REGEX = /^[a-zA-z0-9. ]{1,30}$/
const PHONE_REGEX = /^^\(\d{3}\)\d{3}-\d{4}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

//set const url
const REGISTER_URL = '/Register';
 const Register = () => {
    const userRef = useRef(); //get users import
    const errRef = useRef(); //error input

    //First Name
    const [fname, setFname] = useState('');
    const [validFname, setValidFname] = useState(false);
    const [fnameFocus, setfNameFocus] = useState(false);

    //Last Name
    const [lname, setLname] = useState('');
    const [validLname, setValidLname] = useState(false);
    const [lnameFocus, setlNameFocus] = useState(false);

    //email
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    //Home address
    const [addr, setAddr] = useState('');
    const [validAddr, setValidAddr]= useState(false);
    const [addrFocus, setAddrFocus] = useState(false);

    //Phone number
    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone]= useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

   
    //Password
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
    
    //Validate  first name 
    useEffect(() => {
        const result = NAME_REGEX.test(fname);
        console.log(result);
        console.log(fname);
        setValidFname(result);
    }, [fname])

    //Validate  last name 
    useEffect(() => {
        const result = NAME_REGEX.test(lname);
        console.log(result);
        console.log(lname);
        setValidLname(result);
    }, [lname])


    //Validate  email 
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    //Validate  home address 
    useEffect(() => {
        const result = ADDRESS_REGEX.test(addr);
        console.log(result);
        console.log(addr);
        setValidAddr(result);
    }, [addr])

    //Validate  phone number 
    useEffect(() => {
        const result = PHONE_REGEX.test(phone);
        console.log(result);
        console.log(phone);
        setValidPhone(result);
    }, [phone])

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
    }, [email, pwd, matchPwd])

    //Function to handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Protects if button enabled with JS hack
        const v1 = EMAIL_REGEX.test(email);
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
                , JSON.stringify({email, pwd}), 
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
                           <Link to = '/Userhome'></Link>
                        </p>
                    </section>
                
                ) : (
                <section>
                    <p ref = {errRef} className ={errMsg ? "errmsg":
                    "offscreen"} aria-live= "assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit = {handleSubmit}>
                        <label htmlFor = "first-name">
                            First Name:
                            <span className= {validFname ? "valid" : "hide" }> 
                                <FontAwesomeIcon icon = {faCheck} />
                            </span>
                            <span className= {validFname || !fname ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </span>
                        </label>
                        <input 
                            type = "text"
                            id = "first-name"
                            ref = {userRef}
                            autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                            onChange = {(e) => setFname(e.target.value)}
                            required
                            aria-invalid = {validFname ? "false" : "true"}
                            aria-describedby = "uidnote" 
                            onFocus = {() => setfNameFocus(true)} 
                            onBlur = {() => setfNameFocus(false)}
                        />
                        <label htmlFor = "last-name">
                            Last Name:
                            <span className= {validLname ? "valid" : "hide" }> 
                                <FontAwesomeIcon icon = {faCheck} />
                            </span>
                            <span className= {validLname || !fname ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </span>
                        </label>
                        <input 
                            type = "text"
                            id = "last-name"
                            ref = {userRef}
                            autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                            onChange = {(e) => setLname(e.target.value)}
                            required
                            aria-invalid = {validLname ? "false" : "true"}
                            aria-describedby = "uidnote" 
                            onFocus = {() => setlNameFocus(true)} 
                            onBlur = {() => setlNameFocus(false)}
                        />
                        <label htmlFor = "email">
                            Email:
                            <span className= {validEmail ? "valid" : "hide" }> 
                                <FontAwesomeIcon icon = {faCheck} />
                            </span>
                            <span className= {validEmail || !email ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </span>
                        </label>
                        <input 
                            type = "text"
                            id = "email"
                            ref = {userRef}
                            autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                            onChange = {(e) => setEmail(e.target.value)}
                            required
                            aria-invalid = {validEmail ? "false" : "true"}
                            aria-describedby = "uidnote" 
                            onFocus = {() => setEmailFocus(true)} 
                            onBlur = {() => setEmailFocus(false)}
                        />
                        <label htmlFor ="home-address">
                            Address:
                            <span className= {validAddr ? "valid" : "hide"}>
                                <FontAwesomeIcon icon = {faCheck} />
                            </span>
                            <span className= {validAddr || !addr ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </span>
                        </label>
                        <input 
                            type = "text"
                            id = "home-address"
                            ref = {userRef}
                            autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                            onChange = {(e) => setAddr(e.target.value)}
                            required
                            aria-invalid = {validAddr ? "false" : "true"}
                            aria-describedby = "uidnote" 
                            onFocus = {() => setAddrFocus(true)} 
                            onBlur = {() => setAddrFocus(false)}
                        />
                        <label htmlFor ="phone">
                            Phone Number:
                            <span className= {validPhone ? "valid" : "hide"}>
                                <FontAwesomeIcon icon = {faCheck} />
                            </span>
                            <span className= {validPhone || !phone ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </span>
                        </label>
                        <input 
                            type = "text"
                            id = "phone"
                            ref = {userRef}
                            autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                            onChange = {(e) => setPhone(e.target.value)}
                            required
                            aria-invalid = {validPhone ? "false" : "true"}
                            aria-describedby = "phonenote" 
                            onFocus = {() => setPhoneFocus(true)} 
                            onBlur = {() => setPhoneFocus(false)}
                        />
                        <p id = "phonenote" className= {phoneFocus && !validPhone ? "instructions": "offscreen"}>
                            <FontAwesomeIcon icon= {faInfoCircle} />
                            No spaces.<br />
                            Must be in following format (###)###-####.<br />
                            
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

                        <button disabled = {!validEmail || !validPwd || !validMatch ? true: false}
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