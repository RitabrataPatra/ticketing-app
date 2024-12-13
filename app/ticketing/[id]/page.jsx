import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
   

const Ticketpage = async ({params}) => { 
  const {id} = await params
  const editMode = id === "new"? false : true
  let updateTicketData;
  if(editMode){
    updateTicketData = await getTicketById(id)
    // console.log(updateTicketData)
    updateTicketData = updateTicketData.foundTicket
  }
  else{
    updateTicketData = {
      _id : "new"
    }
  }
  return (
    <div>
      <TicketForm ticket = {updateTicketData}/>
    </div>
  )
}

export default Ticketpage   