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
  console.log("PARAMS:", params);

  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.append(key, value);
    }
  });

  console.log("QUERY:", query.toString());

  const url = `${baseUrl}/api/tickets?${query.toString()}`;

  console.log("FETCH URL:", url);

  const res = await fetch(url, {
    cache: "no-store",
  });

  return res.json();
};
