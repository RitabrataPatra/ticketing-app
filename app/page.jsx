import React from 'react'
import { TicketCard } from "./(components)/TicketCard";


const getTickets = async()=>{
  try {
    const res = await fetch("http://localhost:3000/api/Tickets" , {
      cache : "no-store"
    })
    return res.json()
  } catch (error) {
      console.log("Failed to get tickets", error);
  }
  
}

const Dashboard = () => {
  
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-4">
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      </div>
      
    </div>
  )
}

export default Dashboard
