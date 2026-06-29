const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getVendorTickets = async (vendorId) => {
  const res = await fetch(`${baseUrl}/api/tickets?vendorId=${vendorId}`)
}