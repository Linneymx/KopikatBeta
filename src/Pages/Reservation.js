import ImgLeft from "../Assets/sweet_coffee.png";
import "../Styles/Reservation.css";

import React, { useState } from 'react'
import {
    onSnapshot,
    collection,
    addDoc
} from 'firebase/firestore'
import { db } from '../Databases/firebase.js'

const collectionDb = collection(db, 'reservation')

const Reservation = () => {

  const [ form, setForm ] = useState({})

  const getReservation = () => {
      const reservationsArr = []
      onSnapshot(collectionDb, (snapshot) => {
          snapshot.docs.forEach((doc) => {
            reservationsArr.push(doc.data())
            console.log(doc.data())
              
          })
      })
  }

  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.name]: ev.value,
    })
  }

  const addReservation = async () => {
    await addDoc(collection(db, 'reservation'), form)
    getReservation()
  }

  return (
    <div className="Reservation">

      <div className="leftSide">
        <h1> Reservation</h1>
        <form id="contact-form" action="">
                    <input className='inputText' name="name" onChange={(ev) => handleChange(ev.target)} placeholder="Nombre"  type="text" /><br />
                    <input className='inputText' name="email" onChange={(ev) => handleChange(ev.target)} placeholder="Email" type="text" /><br />
                    <input className='inputText' name="phone" onChange={(ev) => handleChange(ev.target)} placeholder="Telefono" type="text" /><br />
                    <input className='inputDate' name="date" onChange={(ev) => handleChange(ev.target)}  type="date" />
                    <input className='inputTime' name="time" onChange={(ev) => handleChange(ev.target)}  type="time" />
                    
                    <button type="button" onClick={() => addReservation()} >BOOKING</button>
                </form>
                
      </div>
      
      <div className="rightSide"
        style={{ backgroundImage: `url(${ImgLeft})` }}
      > </div>

    </div>
  );
}
export default Reservation