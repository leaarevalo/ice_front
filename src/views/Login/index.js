import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"


const Login = ({ socket }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);
        socket.emit('newUser', { username, socketID: socket.id });
        navigate("/chat");
    }

    return (
        <section className="login">
            <form onSubmit={handleLogin}>
                <div className="field">
                    <label className="label">Usuario</label>
                    <div className="control">
                        <input className="input" onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="Text input" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Contraseña</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Text input" />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" type="submit">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Login;