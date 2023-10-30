import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Series extends Component {
  state = {
    serie: [],
    status: false,
  };

  loadSerie = () => {
    var request = "api/Series/" + this.props.idserie;
    var url = Global.apiSeries + request;
    axios.get(url).then((response) => {
      this.setState({
        serie: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadSerie();
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.idserie != this.props.idserie){
        this.loadSerie();
      }
  }

  render() {
    return (
      <div>
        {this.state.status == true && (
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={this.state.serie.imagen}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.serie.nombre}</h5>
              <p className="card-title">{this.state.serie.puntuacion}</p>
              <p className="card-title">{this.state.serie.anyo}</p>
              <NavLink to={'/series/Personajes/' + this.state.serie.idSerie}className="btn btn-primary">Personajes</NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}
