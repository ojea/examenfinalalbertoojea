import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class Personajes extends Component {

    state = {
        personajes: [],
        status: false
    }

    loadPersonajes = () => {
        var request = "api/Series/PersonajesSerie/" + this.props.idpersonaje
        var url  = Global.apiSeries + request
        axios.get(url).then(response => {
            this.setState({
                personajes: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadPersonajes();
      };

  render() {
    return (
      <div className="row gap-3">
        {
            this.state.status == true && (
                this.state.personajes.map((personaje, index) => {
                    return(
                        <div key={index} className="card col-md-4" style={{width: "20rem"}}>
                            <img className="car-img-top" src={personaje.imagen}/>
                            <div className="card-body">
                                <h5 className="card-title">{personaje.nombre}</h5>
                            </div>
                        </div>
                    )
                })
            )
        }
      </div>
    )
  }
}
