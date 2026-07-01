"use client";

import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";

import { Ticket, CircleInfo } from "@gravity-ui/icons";

export default function BookingModal({
  isOpen,
  onOpenChange,
  ticket,
}) {
  const [quantity, setQuantity] = useState(1);

  const [error, setError] = useState("");

  const [totalPrice, setTotalPrice] = useState(ticket.price);

  useEffect(() => {
    setTotalPrice(quantity * ticket.price);
  }, [quantity, ticket.price]);

  const handleSubmit = async () => {
    setError("");

    if (quantity <= 0) {
      setError("Quantity must be at least 1.");
      return;
    }

    if (quantity > ticket.availableSeats) {
      setError(
        `Only ${ticket.availableSeats} ticket(s) available.`
      );
      return;
    }

    console.log({
      quantity,
      totalPrice,
    });

    // API Call (Part-4)
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
      backdrop="blur"
    >
      <ModalContent>

        {(onClose) => (

          <>

            <ModalHeader>

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-100 p-3">

                  <Ticket className="text-[#1A1D7E]" />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-[#1A1D7E]">
                    Book Ticket
                  </h2>

                  <p className="text-sm text-slate-500">
                    Confirm your booking details
                  </p>

                </div>

              </div>

            </ModalHeader>

            <ModalBody>

              <div className="space-y-5">

                {/* Ticket */}

                <div className="rounded-2xl bg-slate-50 p-5">

                  <h3 className="text-lg font-bold text-[#1A1D7E]">
                    {ticket.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    {ticket.from} → {ticket.to}
                  </p>

                </div>

                {/* Quantity */}

                <Input
                  type="number"
                  label="Ticket Quantity"
                  value={String(quantity)}
                  min={1}
                  max={ticket.availableSeats}
                  onChange={(e) =>
                    setQuantity(Number(e.target.value))
                  }
                />

                {/* Available */}

                <div className="flex justify-between rounded-xl bg-blue-50 p-4">

                  <span>
                    Available Tickets
                  </span>

                  <span className="font-bold text-blue-700">
                    {ticket.availableSeats}
                  </span>

                </div>

                {/* Price */}

                <div className="flex justify-between rounded-xl bg-yellow-50 p-4">

                  <span>
                    Price Per Ticket
                  </span>

                  <span className="font-bold text-yellow-700">
                    ৳ {ticket.price}
                  </span>

                </div>

                {/* Total */}

                <div className="flex justify-between rounded-xl bg-green-50 p-5">

                  <span className="font-semibold">
                    Total Amount
                  </span>

                  <span className="text-2xl font-extrabold text-green-700">
                    ৳ {totalPrice}
                  </span>

                </div>

                {/* Error */}

                {error && (

                  <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-red-600">

                    <CircleInfo />

                    {error}

                  </div>

                )}

              </div>

            </ModalBody>

            <ModalFooter>

              <Button
                variant="flat"
                onPress={onClose}
              >
                Cancel
              </Button>

              <Button
                className="bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] text-white"
                onPress={handleSubmit}
              >
                Confirm Booking
              </Button>

            </ModalFooter>

          </>

        )}

      </ModalContent>
    </Modal>
  );
}