"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const TicketForm = () => {
  const router = useRouter();

  const startingTicketData = {
    title: "",
  description: "",
  category: "",
  priority: 1,
  progress: 0,
  active: false,
  status: "not started",
  };
  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({formData}),
    });
    console.log(res);
    if (!res.ok) {
      throw new Error("Failed to create Ticket");
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1>Create Ticket</h1>

      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col w-1/2 gap-3"
      >
        <div className="">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            variant="outline"
            className="text-black"
            onChange={(e) => {
              handleChange(e);
            }}
            required={true}
            value={formData.title}
          />
        </div>

        <div className="">
          <Label htmlFor="title">Description</Label>
          <Textarea
            type="text"
            name="description"
            id="description"
            placeholder="Enter your message here"
            variant="outline"
            className="text-black"
            onChange={handleChange}
            required={true}
            value={formData.description}
          />
        </div>

        <div className="">
          <label>Category</label>
          <Select
            name="category"
          >
            <SelectTrigger className="w-full text-black my-2">
              <SelectValue
                placeholder="Select a category"
                className="text-slate-800"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Hardware Problem">Hardware Issue</SelectItem>
              <SelectItem value="Software Problem">Software Issue</SelectItem>
              <SelectItem value="Human Issue">Human Issue</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label>Priority</label>
          <div>
            <input
              id="priority-1"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={1}
              checked={formData.priority == 1}
            />
            <label>1</label>
            <input
              id="priority-2"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={2}
              checked={formData.priority == 2}
            />
            <label>2</label>
            <input
              id="priority-3"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={3}
              checked={formData.priority == 3}
            />
            <label>3</label>
            <input
              id="priority-4"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={4}
              checked={formData.priority == 4}
            />
            <label>4</label>
            <input
              id="priority-5"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={5}
              checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
        </div>

        <div>
          <label>Progress</label>
          <Slider
            defaultValue={[formData.progress]}
            name="progress"
            max={100}
            step={1}
            className="mt-2"
          />
        </div>

        <div>
          <label>Status</label>
          <Select
            name="status"
          >
            <SelectTrigger className="w-full text-black my-2">
              <SelectValue
                placeholder="Select status"
                value={formData.status}
                onChange={handleChange}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="not-started">Not Started</SelectItem>
              <SelectItem value="started">Started</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button type="submit" className="w-full">
            Create Ticket
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
