'use server'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getTickets = async () => {
  const res = await fetch(`${baseUrl}/api/tickets`);
  const tickets = await res.json();
  return tickets;
}

export const createTicket = async (newTicketData) => {
  const res = await fetch(`${baseUrl}/api/tickets`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newTicketData),
  })

  return res.json();
}