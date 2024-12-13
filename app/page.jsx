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

const Dashboard = async() => {

  const { tickets } = await getTickets();
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)), //remove duplicatess
  ];

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory , categoryIndex)=>(
          <div className='mb-4' key={categoryIndex}>
              <h2> 
                {uniqueCategory}
              </h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-4">
                {tickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket , ticketIndex) => (
                  <TicketCard key={ticketIndex} ticket={filteredTicket} />
                ))}
              </div>
          </div>
        ))}
      
     
      </div>
      </div>
      
    
  )
}

export default Dashboard
