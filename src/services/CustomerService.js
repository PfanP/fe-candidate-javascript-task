import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCustomers(perPage, page) {
    return apiClient.get('/customers?_limit=' + perPage + '&_page=' + page)
  },
  getCustomer(id) {
    return apiClient.get('/customers/' + id)
  }
}
