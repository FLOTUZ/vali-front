import NavBar from "./NavBar";
import { useState } from "react";
const axios = require("axios").default;

export default function Formulario(props) {
  //hook

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [indicador, setIndi] = useState("");

  function validar(evento) {
    //Previene el comportamiento por defecto de un submit
    evento.preventDefault();

    /*
            La validación se hace en el backend, 
            si lanza un correo en el then, significa que el usuario existe
            de caso contrario, manda un mensaje de error
    
            El catch solo está por si ocurre un error muy raro
            */
    axios
      .get("http://localhost:4000/login", {
        params: {
          correo: user,
          password: pass,
        },
      })
      .then((response) => {
        if (response.data.access) {
          props.history.push("/home");
        } else {
          let indicadorLogin = (
            <div className="form-control is-invalid">
              {response.data.message}
            </div>
          );
          setIndi(indicadorLogin);
        }
        //Esta wea deberia de redireccionar
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div>
      <NavBar tittle="Login" />
      <form onSubmit={(e) => validar(e)}>
        <div className="mb-3">
          {indicador}
          <br />
          <label htmlFor="user" className="form-label">
            Correo
          </label>

          <input
            type="text"
            className="form-control"
            id="user"
            onClick={() => setIndi("")}
            aria-describedby="emailHelp"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Correo"
          ></input>
          <br />
          <label htmlFor="passwordField" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordField"
            onClick={() => setIndi("")}
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          ></input>
          <br />
          <button type="submit" className="btn btn-outline-dark btn-lg">
            Dale
          </button>
        </div>
      </form>
    </div>
  );
}
