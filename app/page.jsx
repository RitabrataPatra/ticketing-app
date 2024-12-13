import React from 'react'
import { TicketCard } from "./(components)/TicketCard";


const getTickets = async()=>{
  try {
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ticketing-app-fawn.vercel.app/';
    const res = await fetch(`${baseUrl}/api/Tickets`, {
      cache : "no-store"
    })
    return res.json()
  } catch (error) {
      console.log("Failed to get tickets", error);
  }
  
}

const Dashboard = async() => {
  const data = await getTickets();
  if (!data || !data.tickets || !Array.isArray(data.tickets)) {
    console.error("Error: Invalid response structure.");
    return (
      <div className="h-screen flex justify-center items-center">
        No tickets available.
      </div>
    );
  }
  // console.log(data);

  const {tickets} = data;
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
