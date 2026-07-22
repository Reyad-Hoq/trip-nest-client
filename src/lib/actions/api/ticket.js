const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getVendorTickets = async (vendorId) => {
  const res = await fetch(`${baseUrl}/api/tickets?vendorId=${vendorId}`);
  const tickets = await res.json();
  return tickets;
}

export const getTicketById = async (ticketId) => {
  const res = await fetch(`${baseUrl}/api/tickets/${ticketId}`);
  const ticket = await res.json();
  return ticket;
}

export const getTickets = async (params = {}) => {

  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.append(key, value);
    }
  });

  const url = `${baseUrl}/api/tickets?${query.toString()}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  return res.json();
};
