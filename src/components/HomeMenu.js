import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";

export default class HomeMenu extends Component {
  state = {
    series: [],
    status: false,
  };

  loadSeries = () => {
    var request = "api/Series";
    var url = Global.apiSeries + request;
    axios.get(url).then((response) => {
      this.setState({
        series: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadSeries();
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/Home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/InsertarPersonaje">
                    Insertar personaje
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ModificarPersonaje">
                    Modificar personaje
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Series
                  </a>
                  <ul className="dropdown-menu">
                    {this.state.status == true &&
                      this.state.series.map((serie, index) => {
                        return (
                          <li key={index} className="nav-item">
                            <NavLink
                              className="nav-link"
                              to={"/series/" + serie.idSerie}
                            >
                              {serie.nombre}
                            </NavLink>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
