import React from 'react'
import Startfree from './Startfree'
import './styling/startfree.css'
import { TiTick } from "react-icons/ti";

const PricingBox = () => {
  return (
    <div>
      <div className="box">
        <p className='title'>Workflow</p>
        <div className="price">
            $ 19 /MONTH
        </div>
        <div className="line"></div>
        <ul>
            <li><TiTick /> All Templates</li>
            <li><TiTick /> Unlimited Clients & Projects</li>
            <li><TiTick /> Invoicing & Payments</li>
            <li><TiTick /> Proposals & Contracts</li>
            <li><TiTick /> Tasks & Time Tracking</li>
            <li><TiTick /> Client CRM</li>
            <li><TiTick /> Expense Tracking</li>
            <li><TiTick /> Up to 5 Project Collaborators</li>
        </ul>
        <Startfree paddings={'15px 100px 15px 100px'}  />
      </div>
    </div>
  )
}

export default PricingBox
