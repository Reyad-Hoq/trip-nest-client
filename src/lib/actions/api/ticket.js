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
export const updateTicketById = async (ticketId, data) => {
  const res = await fetch(`${baseUrl}/api/tickets/${ticketId}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
 
  if (!res.ok) {
    throw new Error('Failed to update ticket');
  }
  const ticket = await res.json();
  
  return ticket;
}

export const getTickets = async (params = {}) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {

    if (value === null || value === undefined || value === "") return;


    if (Array.isArray(value)) {
      value.forEach((v) => query.append(key, v));
    } else {
      query.append(key, value);
    }
  });

  const url = `${baseUrl}/api/tickets?${query.toString()}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch tickets: ${res.status}`);
  }

  return res.json();
};