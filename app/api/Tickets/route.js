import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData)
    return NextResponse.json(
      {
        message: "Ticket created successfully",
      },
      {
        status: 200,
      }
    )


  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(){
  try {
    console.log("GETTING ALL TICKETS");
    const tickets = await Ticket.find()
    return NextResponse.json({tickets} , {status : 200}) 
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while getting all tickets from db" ,
        error,
      },
      {
        status: 500,
      }
    )
  }
}


