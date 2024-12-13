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