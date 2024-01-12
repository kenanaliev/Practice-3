import React from 'react'
import Navbar from '../../Navbar'
import { Helmet } from 'react-helmet-async'
import './index.scss'

function Add() {
  return (
    <section id='#add'>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Navbar />
      <div className="add">
        <h1>Create</h1>
        
      </div>


    </section>
  )
}

export default Add