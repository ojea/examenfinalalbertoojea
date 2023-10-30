import React, { Component } from 'react'

export default class IntroducirPersonaje extends Component {

    state = {
        mensaje: "", 
        status: false
    }
    
  render() {
    return (
      <div>
        <h1>Introducir personaje</h1>
      </div>
    )
  }
}
