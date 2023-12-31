import {useState, useEffect} from "react";
export function Login(props) {
    
    const [isLoggedIn, setLoginStatus] = useState(false);
    
    useEffect(() => {
        console.log("Using effect", isLoggedIn);
        props.updateLoggedinStatus(isLoggedIn);
    })
    
    return (
        <div>
            Test 2<br />
            Logged in: {String(isLoggedIn)}<br />
            <button onClick={() => setLoginStatus(!isLoggedIn) }>Toggle</button>
         </div>
    );
}
