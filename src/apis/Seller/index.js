import { CONSTANTS, REQUEST } from '../../utils'
const { BASE_URL } = CONSTANTS

export const getSellerList = async () => REQUEST(`${BASE_URL}/sellers`)

export const getAppointmentList = async sellerId =>
  REQUEST(`${BASE_URL}/appointment/${sellerId}`)

export const addAppointment = async params =>
  REQUEST(`${BASE_URL}/appointment`, 'POST', params)

export const updateAppointment = async (id, status) =>
  REQUEST(`${BASE_URL}/appointment/${id}`, 'PUT', { status })

export const deleteAppointment = async id =>
  REQUEST(`${BASE_URL}/appointment/${id}`, 'DELETE')
