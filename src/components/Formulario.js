import NavBar from "./NavBar";
import { useState } from "react";
import { Button } from "react-bootstrap";

const axios = require("axios").default;
const Cryptojs = require("crypto-js");

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
    //Datos en crudo sin encriptar
    let rawParams = {
      correo: user,
      password: pass,
    };

    //Se encriptan los datos con algoritmo AES y se le añade la llave maestra
    let encryptParams = Cryptojs.AES.encrypt(
      JSON.stringify(rawParams),
      "5i5t3m45"
    ).toString();

    //Se hace el post por medio de axios
    axios({
      method: "post",
      url: "http://localhost:4000/login",
      params: encryptParams,
    })
      .then(function (response) {
        //Si la el login es exitoso, se manda al login principal
        if (response.data.access) {
          props.history.push("/home");
        } else {
          let indicadorLogin = (
            <div className="form-control is-invalid">
              {response.data.message}
            </div>
          );
          //Indicador de la respuesta del servidor hacia el usuario
          setIndi(indicadorLogin);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <NavBar tittle="Iniciar sesion" />
      <form onSubmit={(e) => validar(e)}>
        <div className="mb-3">
          {indicador}
          <br />
          <label htmlFor="user" className="form-label">
            Correo
          </label>

          <input
            type="email"
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
          <Button type="submit" variant="outline-dark">
            Dale
          </Button>
        </div>
      </form>
    </div>
  );
}
