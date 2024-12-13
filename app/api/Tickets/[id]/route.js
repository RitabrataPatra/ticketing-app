import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req , {params}){
    try {
        const {id} = params;
        const ticketId = id;
        // console.log(ticketId);
        await Ticket.findByIdAndDelete(ticketId);
        console.log("Ticket deleted successfully");
        return NextResponse.json("Ticket has been deleted", { status: 200 });

    } catch (error) {
      return NextResponse.json(
        "Error while deleting ticket",
        { error },
        { status: 500 }
      );
    }
}


export async function GET(req ,  {params}){
  try {
    const {id} = params
    const foundTicket = await Ticket.findOne({_id : id})
    return NextResponse.json({
      foundTicket
    }, {
      status : 200
    })
  } catch (error) {
    return NextResponse.json({
      message : "Unable to update ticket" , error
    } , { status : 500})
  }
}


//UPDATE
export async function PUT(req , {params}){
  try {
    const {id} = params ;
    const body = await req.json()
    const ticketData = body.formData;
    const updatedTicket = await Ticket.findByIdAndUpdate(id , {...ticketData})
    return NextResponse.json(updatedTicket , {status : 200})
  } catch (error) {
    return NextResponse.json({
      message : "Unable to update ticket" , error
    },
     {
       status : 500
     }
  )
  }
}