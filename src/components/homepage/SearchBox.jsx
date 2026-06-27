"use client";

import {
  Card,
  Input,
  Select,
  Button,
  Label,
  ListBox,
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
          startcontent={<FaLocationDot />}
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
          <Select className="w-[256px]" placeholder="Select one">
            <Label>Transport</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="florida" textValue="Florida">
                  Florida
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="delaware" textValue="Delaware">
                  Delaware
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="california" textValue="California">
                  California
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="texas" textValue="Texas">
                  Texas
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="new-york" textValue="New York">
                  New York
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="washington" textValue="Washington">
                  Washington
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