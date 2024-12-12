import { Flame } from 'lucide-react'
import React from 'react'

const PriorityDisplay = ({priority}) => {
  return (
    <div className='flex justify-start align-baseline '>
        <Flame className={`${priority > 0 ? "text-red-400" : "text-slate-500"} `} />
        <Flame className={`${priority > 1 ? "text-red-400" : "text-slate-500"} `} />
        <Flame className={`${priority > 2 ? "text-red-400" : "text-slate-500"} `} />
        <Flame className={`${priority > 3 ? "text-red-400" : "text-slate-500"} `} />
        <Flame className={`${priority > 4 ? "text-red-400" : "text-slate-500"} `} />
    </div>
  )
}

export default PriorityDisplay