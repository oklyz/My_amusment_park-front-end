import Client from "./api"
export const createTicket = async (data) => {
  try {
    const res = await Client.post('/ticket/new', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}