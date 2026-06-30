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

  const [selected, setSelected] = useState(["water"]);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageUploading, setImageUploading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        setImageUrl(data.data.url);
      } else {
        setError("Image upload failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Image upload failed. Please try again.");
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const ticket = Object.fromEntries(formData.entries());

      ticket.image = imageUrl;
      ticket.perks = selected;

      console.log(ticket);

      // Part-2 এ backend request হবে
      setSuccess("Ticket added successfully!");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
        <Form onSubmit={handleSubmit} className="space-y-8">
          {/* Ticket Info */}
          <div className="grid gap-6 md:grid-cols-2">
            <TextField isRequired name="title">
              <Label className="mb-2 flex items-center gap-2">
                <Ticket className="size-4 text-[#1A1D7E]" />
                Ticket Title
              </Label>
              <Input placeholder="Dhaka → Cox's Bazar" />
              <FieldError />
            </TextField>

            <Select name="transport" className="w-full" placeholder="Select one" isRequired>
              <Label>Transport Type</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Bus" textValue="Bus">
                    Bus
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Train" textValue="Train">
                    Train
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Flight" textValue="Flight">
                    Flight
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Launch" textValue="Launch">
                    Launch
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Route */}
          <div className="grid gap-6 md:grid-cols-2">
            <TextField isRequired name="from">
              <Label className="mb-2 flex items-center gap-2">
                <ArrowRightArrowLeft className="size-4 text-[#1A1D7E]" />
                From
              </Label>
              <Input placeholder="Dhaka" />
              <FieldError />
            </TextField>

            <TextField isRequired name="to">
              <Label className="mb-2">Destination</Label>
              <Input placeholder="Cox's Bazar" />
              <FieldError />
            </TextField>
          </div>

          {/* Price */}
          <div className="grid gap-6 md:grid-cols-2">
            <TextField isRequired name="price">
              <Label className="mb-2 flex items-center gap-2">
                <CircleDollar className="size-4 text-[#1A1D7E]" />
                Price (Per Ticket)
              </Label>
              <Input type="number" min="0" placeholder="1200" />
              <FieldError />
            </TextField>

            <TextField isRequired name="availableSeats">
              <Label className="mb-2">Ticket Quantity</Label>
              <Input type="number" min="1" placeholder="50" />
              <FieldError />
            </TextField>
          </div>

          {/* Departure */}
          <TextField isRequired name="departure">
            <Label className="mb-2 flex items-center gap-2">
              <Calendar className="size-4 text-[#1A1D7E]" />
              Departure Date & Time
            </Label>
            <Input type="datetime-local" />
            <FieldError />
          </TextField>

          {/* Perks */}
          <CheckboxGroup
            className="min-w-[320px]"
            name="perks"
            value={selected}
            onChange={setSelected}
          >
            <Label>Perks</Label>

            {[
              ["water", "Water"],
              ["wifi", "Wifi"],
              ["lunch", "Lunch"],
              ["usb-charging", "USB Charging"],
              ["charging-port", "Charging Port"],
              ["dinner", "Dinner"],
              ["sleeper", "Sleeper"],
            ].map(([value, label]) => (
              <Checkbox key={value} value={value}>
                <Checkbox.Content>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  {label}
                </Checkbox.Content>
              </Checkbox>
            ))}

            <Label className="my-4 text-sm text-muted">
              Selected: {selected.join(", ") || "None"}
            </Label>
          </CheckboxGroup>

          {/* Image Upload */}
          <div>
            <Label className="mb-2 flex items-center gap-2">
              <Picture className="size-4 text-[#1A1D7E]" />
              Upload Ticket Image
            </Label>

            <Input type="file" accept="image/*" onChange={handleImageUpload} />

            {imageUploading && (
              <p className="mt-2 text-sm text-slate-500">Uploading image...</p>
            )}

            {imageUrl && (
              <img
                src={imageUrl}
                alt="preview"
                className="mt-4 h-40 w-full rounded-xl object-cover"
              />
            )}

            {/* Keep imageUrl in the submitted form data */}
            <input type="hidden" name="image" value={imageUrl} readOnly />
          </div>

          {/* Vendor */}
          <div className="grid gap-6 md:grid-cols-2">
            <TextField name="vendorName" value={user?.name || ""}>
              <Label className="mb-2 flex items-center gap-2">
                <Person className="size-4 text-[#1A1D7E]" />
                Vendor Name
              </Label>
              <Input readOnly />
            </TextField>

            <TextField name="vendorEmail" value={user?.email || ""}>
              <Label className="mb-2 flex items-center gap-2">
                <Envelope className="size-4 text-[#1A1D7E]" />
                Vendor Email
              </Label>
              <Input readOnly />
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
            isDisabled={loading || imageUploading}
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