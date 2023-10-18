import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Card from './Card'
import FlexDesign from './FlexDesign'
import ItemCardDesign from './ItemCardDesign'
import Address from './Address'

export default class ScreenRoot extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/card' element={<Card/>}/>
        <Route path='/flexdesign' element={<FlexDesign/>}/>
        <Route path='/itemcart' element={<ItemCardDesign/>}/>
        <Route path='/address' element={<Address/>}/>

      </Routes>
      </BrowserRouter>
    )
  }
}
