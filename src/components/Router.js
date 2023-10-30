import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomeMenu from './HomeMenu';
import Home from './Home';
import Series from './Series';
import Personajes from './Personajes'
import IntroducirPersonaje from './IntroducirPersonaje';
import ModificarPersonaje from './ModificarPersonaje';

export default class Router extends Component {
  render() {

    function SeriesElement () {
      var {idserie} = useParams();
      return <Series idserie={idserie}/>
    }

    function PersonajesElement() {
      var {idpersonaje} = useParams();
      return <Personajes idpersonaje={idpersonaje}/>
    }
    return (
      <BrowserRouter>
        <HomeMenu/>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/series/:idserie" element={<SeriesElement/>}/>
            <Route path="/series/Personajes/:idpersonaje" element={<PersonajesElement/>}/>
            <Route path="/IntroducirPersonaje" element={<IntroducirPersonaje/>}/>
            <Route path="/ModificarPersonaje" element={<ModificarPersonaje/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
