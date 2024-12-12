"use client"
import { Progress } from '@/components/ui/progress'
import React, { useEffect, useState } from 'react'

const ProgressBar = ({progress}) => {
    const[progressState , setProgress] = useState(0)
    useEffect(() => {
        const timer = setTimeout(()=>setProgress(progress) , 100)
        return () => clearTimeout(timer)
    },[])
  return (
     <Progress value={progressState}/>   
  )
}

export default ProgressBar