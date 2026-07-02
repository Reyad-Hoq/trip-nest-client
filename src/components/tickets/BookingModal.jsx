"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import toast from "react-hot-toast";
import { ArrowRight, Envelope, Ticket } from "@gravity-ui/icons";

export default function BookingModal({
  ticket, bookingDisabled
}) {
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {

    if (quantity <= 0) {
      return toast.error("Quantity must be at least 1");
    }

    if (quantity > ticket.availableSeats) {
      return toast.error("Quantity exceeds available seats");
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ticketId: ticket.id,
            quantity,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Booking Successful");

      onOpenChange(false);

    } catch (err) {

      toast.error(err.message);

    } finally {

      setLoading(false);

    }
  };

  return (

    <Modal>
      <Button isDisabled={bookingDisabled} size="lg" className="bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] text-white w-full">Book Now
        <ArrowRight className="ml-1" />
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Ticket className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Book Your Tickets</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Book your tickets now and get in touch with us for any inquiries or assistance. Our team is here to help you with your booking process.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="ticketQuantity" type="number" variant="secondary">
                    <Label>Ticket Quantity</Label>
                    <Input placeholder="Book ticket seats number" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}