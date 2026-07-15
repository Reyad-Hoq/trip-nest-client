"use client";

import {
  Card,
  Input,
  Select,
  Button,
  Label,
  ListBox,
  InputGroup,
} from "@heroui/react";

import {
  FaLocationDot,
  FaBus,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const transport = [
  "Bus",
  "Train",
  "Flight",
  "Launch",
];

export default function SearchBox() {
  return (
    <Card className="relative rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl p-6 pb-12">
      <div className="grid gap-5 lg:grid-cols-4">

        <Input
          label="From"
          placeholder="Dhaka"
        />

        <Input
          label="To"
          placeholder="Cox's Bazar"
          startcontent={<FaLocationDot />}
        />


        {/* <Select className="w-full rounded-xl border border-default-300 bg-background px-4 py-3 outline-none focus:border-primary">
            <option>Bus</option>
            <option>Train</option>
            <option>Flight</option>
            <option>Launch</option>
          </Select> */}
        <Select className="w-full" placeholder="Transport">
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

        <Input
          type="date"
          label="Journey Date"
        />
      </div>

      {/* Center Floating Button */}
      <Button
        size="lg"
        radius="full"
        startContent={<FaMagnifyingGlass />}
        className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-yellow-400 text-blue-900 font-bold px-10 shadow-xl"
      >
        Search
      </Button>
    </Card>
  );
}