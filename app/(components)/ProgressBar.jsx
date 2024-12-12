"use client"
import { Progress } from '@/components/ui/progress'
import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const[progress , setProgress] = useState(0)
    useEffect(() => {
        const timer = setTimeout(()=>setProgress(66) , 100)
        return () => clearTimeout(timer)
    },[])
  return (
     <Progress value={progress}/>   
  )
}

export default ProgressBar