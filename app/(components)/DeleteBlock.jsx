"use client"
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

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
        <X className='text-red-500 hover:text-red-950 cursor-pointer'
          onClick={handleDeleteTicket}
        />
    </div>
  )
}

export default DeleteBlock