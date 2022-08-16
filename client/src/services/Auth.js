import axios from 'axios'
import { BASE_URL } from '../globals'
import Client from './api'

export const SignInPlayer = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/players/login`, data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.username
  } catch (error) {
    throw error
  }
}

export const RegisterPlayer = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/players/register`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/players/session')
    return res.data
  } catch (error) {
    throw error
  }
}
