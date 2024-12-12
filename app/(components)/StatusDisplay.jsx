import { Badge } from '@/components/ui/badge'
import React from 'react'

const StatusDisplay = ({status}) => {
  return (
    <div>
      <Badge className={`${status == "Done" ? "bg-green-500" : "bg-yellow-500"}`}>
        {status}
      </Badge>
    </div>
  )
}

export default StatusDisplay