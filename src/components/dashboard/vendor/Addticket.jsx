"use client";

import { useState } from "react";

import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
  Select,
  Checkbox,
  CheckboxGroup,
  ListBox,
} from "@heroui/react";

import {
  Ticket,
  ArrowRightArrowLeft,
  Calendar,
  Image,
  Person,
  Picture,
  Envelope,
  SquarePlus,
  CircleDollar,
} from "@gravity-ui/icons";

import { useSession } from "@/lib/auth-client";

export default function AddTicketPage() {
  const { data: session } = useSession();

  const user = session?.user;

  const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const formData = new FormData(e.currentTarget);

    const ticket = {
      title: formData.get("title"),
      from: formData.get("from"),
      to: formData.get("to"),
      transport: formData.get("transport"),
      price: Number(formData.get("price")),
      availableSeats: Number(formData.get("availableSeats")),
      departure: formData.get("departure"),
      perks: formData.getAll("perks"),
      image: imageUrl,
      vendorName: user?.name,
      vendorEmail: user?.email,
      vendorId: user?.id,
      verificationStatus: "pending",
      createdAt: new Date(),
    };

    console.log(ticket);

    // Part-2 এ backend request হবে
  };

  return (
    <section className="mx-auto max-w-4xl p-6">

      {/* Heading */}

      <div className="mb-8">

        <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
          Vendor Panel
        </span>

        <h1 className="mt-4 text-4xl font-extrabold text-[#1A1D7E]">
          Add New Ticket
        </h1>

        <p className="mt-2 text-slate-500">
          Publish a new transport ticket for customers.
        </p>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

        <Form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Ticket Info */}

          <div className="grid gap-6 md:grid-cols-2">

            <TextField
              isRequired
              name="title"
            >
              <Label className="mb-2 flex items-center gap-2">
                <Ticket className="size-4 text-[#1A1D7E]" />
                Ticket Title
              </Label>

              <Input
                placeholder="Dhaka → Cox's Bazar"
                classNames={{
                  inputWrapper:
                    "rounded-xl border border-slate-200 shadow-none",
                }}
              />

              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="transport"
            >
              <Select className="w-full" placeholder="Select one" selectionMode="multiple">
                <Label>Transport Type</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox selectionMode="multiple">
                    <ListBox.Item id="florida" textValue="Florida">
                      Bus
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="delaware" textValue="Delaware">
                      Train
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="california" textValue="California">
                      Flight
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="texas" textValue="Texas">
                      Launch
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </TextField>

          </div>

          {/* Route */}

          <div className="grid gap-6 md:grid-cols-2">

            <TextField
              isRequired
              name="from"
            >
              <Label className="mb-2 flex items-center gap-2">
                <ArrowRightArrowLeft className="size-4 text-[#1A1D7E]" />
                From
              </Label>

              <Input
                placeholder="Dhaka"
                classNames={{
                  inputWrapper:
                    "rounded-xl border border-slate-200 shadow-none",
                }}
              />

              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="to"
            >
              <Label className="mb-2">
                Destination
              </Label>

              <Input
                placeholder="Cox's Bazar"
                classNames={{
                  inputWrapper:
                    "rounded-xl border border-slate-200 shadow-none",
                }}
              />

              <FieldError />
            </TextField>

          </div>

          {/* Price */}

          <div className="grid gap-6 md:grid-cols-2">

            <TextField
              isRequired
              name="price"
            >
              <Label className="mb-2 flex items-center gap-2">
                <CircleDollar className="size-4 text-[#1A1D7E]" />
                Price (Per Ticket)
              </Label>

              <Input
                type="number"
                placeholder="1200"
                classNames={{
                  inputWrapper:
                    "rounded-xl border border-slate-200 shadow-none",
                }}
              />

              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="availableSeats"
            >
              <Label className="mb-2">
                Ticket Quantity
              </Label>

              <Input
                type="number"
                placeholder="50"
                classNames={{
                  inputWrapper:
                    "rounded-xl border border-slate-200 shadow-none",
                }}
              />

              <FieldError />
            </TextField>

          </div>
          {/* Departure */}

          <TextField
            isRequired
            name="departure"
          >
            <Label className="mb-2 flex items-center gap-2">
              <Calendar className="size-4 text-[#1A1D7E]" />
              Departure Date & Time
            </Label>

            <Input
              type="datetime-local"
              classNames={{
                inputWrapper:
                  "rounded-xl border border-slate-200 shadow-none",
              }}
            />

            <FieldError />
          </TextField>

          {/* Perks */}
          <TextField>
            <Select className="w-full" placeholder="Select countries" selectionMode="multiple">
              <Label>Ticket Perks</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox selectionMode="multiple">
                  <ListBox.Item id="argentina" textValue="Argentina">
                    AC
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="venezuela" textValue="Venezuela">
                    WiFi
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="japan" textValue="Japan">
                    Breakfast
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="france" textValue="France">
                    Lunch
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="italy" textValue="Italy">
                    Dinner
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="spain" textValue="Spain">
                    Charging Port
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="thailand" textValue="Thailand">
                    USB Charging
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="new-zealand" textValue="New Zealand">
                    Blanket
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="iceland" textValue="Iceland">
                    Water
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </TextField>

          {/* Image Upload */}

          <div>
            <Label className="mb-2 flex items-center gap-2">
              <Picture className="size-4 text-[#1A1D7E]" />
              Upload Ticket Image
            </Label>

            <Input
              type="file"
              accept="image/*"
              onChange={async (e) => {

                const file = e.target.files[0];

                if (!file) return;

                const formData = new FormData();

                formData.append("image", file);

                const res = await fetch(
                  `https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY`,
                  {
                    method: "POST",
                    body: formData,
                  }
                );

                const data = await res.json();

                if (data.success) {
                  setImageUrl(data.data.url);
                }
              }}
            />

            {imageUrl && (
              <img
                src={imageUrl}
                alt="preview"
                className="mt-4 h-40 w-full rounded-xl object-cover"
              />
            )}

          </div>

          {/* Vendor */}

          <div className="grid gap-6 md:grid-cols-2">

            <TextField>

              <Label className="mb-2 flex items-center gap-2">
                <Person className="size-4 text-[#1A1D7E]" />
                Vendor Name
              </Label>

              <Input
                value={user?.name || ""}
                isReadOnly

              />

            </TextField>

            <TextField>

              <Label className="mb-2 flex items-center gap-2">
                <Envelope className="size-4 text-[#1A1D7E]" />
                Vendor Email
              </Label>

              <Input
                value={user?.email || ""}
                isReadOnly
                classNames={{
                  inputWrapper:
                    "rounded-xl border border-slate-200 bg-slate-100",
                }}
              />

            </TextField>

          </div>

          {/* Success */}

          {success && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
              {success}
            </div>
          )}

          {/* Error */}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
              {error}
            </div>
          )}

          {/* Button */}

          <Button
            type="submit"
            isLoading={loading}
            className="w-full rounded-xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] py-7 text-base font-semibold text-white"
          >
            <SquarePlus className="mr-2 size-5" />

            {loading ? "Adding Ticket..." : "Add Ticket"}

          </Button>

        </Form>

      </div>

    </section>
  );
}