import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class IntroducirPersonaje extends Component {
  state = {
    series: [],
    mensaje: "",
    status: false,
  };

  loadSerie = () => {
    var request = "api/Series"
    var url = Global.apiSeries + request
    axios.get(url).then(response => {
        this.setState({
            series: response.data,
            status: true
        })
    })
  }

  getSerieSeleccionada = () => {
    var options = this.selectSerie.current.option;
    var aux = [];
    for(var opt of options) {
        if(opt.select == true) {
            aux.push(opt.value)
        }
    }
  }

  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  selectSerie = React.createRef();

  insertarPersonaje = (e) => {
    e.preventDefault();

    var request = "api/Personajes";
    var url = Global.apiSeries + request;

    var id = 0;
    var nombre = this.cajaNombre.current.value;
    var imagen = this.cajaImagen.current.value;
    

    var personaje = {
      idPersonaje: id,
      nombre: nombre,
      imagen: imagen
    };

    axios.post(url, personaje).then((response) => {
      this.setState({
        mensaje: "Personaje" + nombre + "Insertado correctamente",
        status: true,
      });
    });
  };



  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/Home" />}
        <h1>Insertar persoanje</h1>
        <h2 style={{ color: "blue" }}>{this.state.mensaje}</h2>
        <form>
          <label>Nombre</label>
          <input type="text" className="form-control" ref={this.cajaNombre} />

          <label>Imagen</label>
          <input type="text" className="form-control" ref={this.cajaImagen} />

          <select size="8" multiple ref={this.selectSerie}>
            {this.state.status == true &&
              this.state.series.map((serie, index) => {
                return (
                  <option key={index} value={serie.idSerie}>
                    {serie.nombre}
                  </option>
                );
              })}
          </select>
          <button  className='btn btn-success'>Introducir personaje</button>
              
        </form>
      </div>
    );
  }
}
