import Client from "./api"
export const createTicket = async (data) => {
  try {
    const res = await Client.post('ticket/new', data)
    return res.data
  } catch (error) {
    throw error
  }
}