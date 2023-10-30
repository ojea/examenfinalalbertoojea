import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class InsertarPersonaje extends Component {
  state = {
    series: [],
    status: [],
    statusSerie: false,
    mensaje: "",
  };

  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  cajaSerie = React.createRef();

  insertarPersonaje = (e) => {
    e.preventDefault();
    var request = "api/personajes";
    var url = Global.apiSeries;

    var nombre = this.cajaNombre.current.value;
    var imagen = this.cajaImagen.current.value;
    var idSerie = parseInt(this.cajaSerie.current.value);

    var personaje = {
      idPersonaje: 0,
      nombre: nombre,
      imagen: imagen,
      idSerie: idSerie,
    };

    axios.post(url + request, personaje).then((response) => {
      this.setState({
        mensaje: "insertado correctamente",
        status: true,
      });
    });
  };

  loadSeries() {
    var request = "api/series";
    var url = Global.apiSeries;

    axios.get(url + request).then((response) => {
      this.setState({
        series: response.data,
        statusSerie: true,
      });
    });
  }

  componentDidMount = () => {
    this.loadSeries();
  };

  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/Home" />}
        <h1>Insertar Personaje</h1>
        <form onSubmit={this.insertarPersonaje}>
          <div className="row gap-3">
            <div className="col">
              <label>Nombre:</label>
              <input
                type="text"
                ref={this.cajaNombre}
                className="form-control"
                placeholder="Nombre"
              ></input>
            </div>
              <label>Imagen:</label>
              <input
                type="text"
                ref={this.cajaImagen}
                className="form-control"
                placeholder="Imagen"
              ></input>

              <div className="col">
                <label>Serie:</label>
                <select
                  id="series"
                  ref={this.cajaSerie}
                  className="form-control"
                >
                  {this.state.statusSerie == true &&
                    this.state.series.map((item, index) => {
                      return (
                        <option key={index} value={item.idSerie}>
                          {item.nombre}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
          <button className="btn btn-success">Insertar</button>
        </form>
      </div>
    );
  }
}
