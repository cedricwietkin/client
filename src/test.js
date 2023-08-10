
import './App.css';

function Test() {
    return (
        <>
            <div>
                <label inputMode={"text"}>username</label>
                <input type="text"/>
            </div>
            <div>
                <label inputMode={"email"}>email</label>
                <input type="email"/>
            </div>
            <div>
                <label inputMode={"text"}>password</label>
                <input type="password"/>
            </div>



        <button onClick={oninvalid}>valider</button>
       </>
    );
}

export default Test;
