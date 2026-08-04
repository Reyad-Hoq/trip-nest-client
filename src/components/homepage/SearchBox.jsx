"use client";

import {
  Card,
  Input,
  Select,
  Button,
  ListBox,
  Form,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  FaMagnifyingGlass,
} from "react-icons/fa6";


export default function SearchBox() {
  const router = useRouter();


  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const form = Object.fromEntries(formData.entries())
    const { from, to, transport, date } = form;
    const params = new URLSearchParams();
    if (from) params.append("from", from);
    if (to) params.append("to", to);
    if (transport) params.append("transport", transport);
    if (date) params.append("date", date);

    router.push(
      `/tickets?${params.toString()}`
    );
  };

  return (
    <Card className="relative rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl p-6 pb-12">
      <Form onSubmit={handleSearch}>
        <div className="grid gap-5 lg:grid-cols-4">
          <TextField aria-label="from" name="from" type="text">
            <Input

              placeholder="Dhaka"
            />
          </TextField>

          <TextField aria-label="to" name="to" type="text">
            <Input

              placeholder="Cox's Bazar"
            />
          </TextField>

          <Select aria-label="transport" name="transport" className="w-full" placeholder="Transport">
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="bus" textValue="Bus">
                  Bus
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="train" textValue="Train">
                  Train
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="flight" textValue="Flight">
                  Flight
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="launch" textValue="Launch">
                  Launch
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <TextField aria-label="date" name="date"
            type="date">
            <Input
            />
          </TextField>

        </div>

        {/* Center Floating Button */}
        <Button
          type="submit"
          size="lg"
          radius="full"
          startContent={<FaMagnifyingGlass />}
          className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-yellow-400 text-blue-900 font-bold px-10 shadow-xl"
        >
          Search
        </Button>
      </Form>
    </Card>
  );
};


