import React from 'react'
import "./CardProfile.css"
import image from "./remon.jpg"

export default function CardProfile(){
    return(
        <div className="profile-card">
            <img src={image} className="avatar" alt=""></img>
            <h1> Reehan Putra Perdana </h1>
            <h3> Abas - Anax Basket </h3>
        </div>
    )
}