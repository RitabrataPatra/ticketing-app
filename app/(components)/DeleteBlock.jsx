"use client"
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const DeleteBlock = ({id}) => {
  const router = useRouter();
  const handleDeleteTicket = async() => {
    const res = await fetch(`/api/Tickets/${id}`, {
      method : "DELETE",

    }) 
    if(res.ok){
      router.refresh();

    }
  }

  return (
    <div>
        <X 
            className='text-red-500 hover:text-red-950 cursor-pointer'
            onClick={()=>{
            handleDeleteTicket();
            toast("Ticket deleted successfully" , {
              description : `Deleted at ${new Date().toLocaleTimeString("en-US")}`,
            })
          }}
        />
    </div>
  )
}

export default DeleteBlock