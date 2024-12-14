import React from 'react'
import { TicketCard } from "./(components)/TicketCard";


const getTickets = async()=>{
  try {
    const res = await fetch(`/api/Tickets/`, {
      cache : "no-store"
    })
    if(!res.ok){
      throw new Error("Status: " + res.status)
    }
    console.log(res)
    return await res.json()
  } catch (error) {
      console.log("Failed to fetch tickets", error);
  }
  
}

const Dashboard = async() => {
  const data = await getTickets();
  console.log(data)
  if (!data || !Array.isArray(data.tickets)) {
    console.error("Error: Invalid response structure.");
    return (
      <div className="h-screen flex justify-center items-center">
        No tickets available.
      </div>
    );
  }
  // console.log(data);

  const {tickets} = data;

  if (!Array.isArray(tickets)) {
    console.error("Error: tickets is not an array.");
    return (
      <div className="h-screen flex justify-center items-center">
        No tickets available.
      </div>
    );
  }

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category).filter(Boolean)), //remove duplicatess
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
