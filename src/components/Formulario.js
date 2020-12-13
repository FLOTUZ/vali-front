import { useState } from 'react';
export default function Formulario(props) {
    //hook

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            {nav()}
            <form action="http://localhost:4000/login" method="GET">
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="user" aria-describedby="emailHelp" name="user" value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>

                    <div className="mb-3">
                        <label htmlFor="passwordField" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="passwordField" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <button type="submit" className="btn btn-outline-dark btn-lg">Dale</button>
                </div>
            </form>
        </div>
    );
}

function nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Login
                </a>
            </div>
        </nav>
    );
}