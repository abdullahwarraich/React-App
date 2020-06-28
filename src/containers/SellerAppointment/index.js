import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Table,
  PageHeader,
  SuccessToast,
  ErrorToast,
  Loader
} from '../../components'
import { AppointmentListingHeader } from './AppointmentListingTableHeader'
import {
  getAppointmentList,
  updateAppointment,
  deleteAppointment
} from '../../apis'

const SellerAppointmentListing = ({ ...props }) => {
  const { sellerId } = useParams()
  const sellerName = props?.history?.location?.state?.sellerName
  const [appointmentList, setAppointmentList] = useState([])
  const [loading, setLoading] = useState(false)
  const [requestLoading, setRequestLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAppointmentList(sellerId)
      .then(response => {
        setAppointmentList(response)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        ErrorToast(
          error?.message
            ? error.message
            : 'Something went wrong, please try again'
        )
      })
  }, [sellerId, requestLoading])

  const updateAppointmentStatusUpdate = (id, state) => {
    setRequestLoading(true)
    updateAppointment(id, state)
      .then(response => {
        setRequestLoading(false)
        if (response.status === 'ACCEPTED') {
          SuccessToast('Appointment accepted successfully.')
        } else if (response.status === 'REJECTED') {
          SuccessToast('Appointment rejected successfully.')
        }
      })
      .catch(error => {
        setRequestLoading(false)
        ErrorToast(
          error?.message
            ? error.message
            : 'Something went wrong, please try again'
        )
      })
  }

  const deleteAppointmentFromList = id => {
    setRequestLoading(true)
    deleteAppointment(id)
      .then(response => {
        setRequestLoading(false)
        if (response._id) {
          SuccessToast('Appointment deleted successfully.')
        }
      })
      .catch(error => {
        setRequestLoading(false)
        ErrorToast(
          error?.message
            ? error.message
            : 'Something went wrong, please try again'
        )
      })
  }

  const columns = AppointmentListingHeader(
    updateAppointmentStatusUpdate,
    deleteAppointmentFromList
  )
  return (
    <>
      {requestLoading ? (
        <Loader />
      ) : (
        <>
          <PageHeader title={sellerName} />
          <Table columns={columns} data={appointmentList} loading={loading} />
        </>
      )}
    </>
  )
}

export default SellerAppointmentListing
