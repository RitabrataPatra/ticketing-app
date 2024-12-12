import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

export const TicketCard = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentTime = new Date().toLocaleTimeString(
    "en-US",
    { hour: "numeric", minute: "numeric" }
  )
  return (
    <div className="flex flex-col bg-slate-700 hover:bg-slate-600  d-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>

      <h4>TICKET TITLE</h4>
      <hr className="h-px border-0 bg-page mb-2 " />
      <p className="whitspace-pre-wrap">This is the ticket description</p>

      <div className="flex-grow"> </div>
      <div className="flex mt-2 ">
        <div className="flex flex-col">
          <p className="text-xs my-1">{currentDate} at {currentTime}</p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};
