import React, { useState } from 'react'
import { DatePicker } from 'antd'
import { Modal, SuccessToast, ErrorToast } from '../../../components'
import { addAppointment } from '../../../apis'

const { RangePicker } = DatePicker

const AddAppointment = ({ visible, sellerId, closeModal }) => {
  const [dateRanges, setDateRanges] = useState({
    startDate: null,
    endDate: null
  })
  const [loading, setLoading] = useState(false)
  const dateTimeSelection = (dates, dateStrings) =>
    setDateRanges({
      startDate: dateStrings[0],
      endDate: dateStrings[1]
    })

  const addNewAppointment = () => {
    setLoading(true)
    addAppointment({ sellerId: sellerId, ...dateRanges })
      .then(res => {
        setLoading(false)
        closeModal()
        SuccessToast(res.message)
      })
      .catch(error => {
        setLoading(false)
        ErrorToast(
          error?.message
            ? error.message
            : 'Something went wrong, please try again'
        )
      })
  }
  return (
    <Modal
      header='Add new appointment'
      visible={visible}
      onCancel={closeModal}
      onOk={() => addNewAppointment()}
      okButtonProps={{
        disabled: !dateRanges.startDate && !dateRanges.endDate,
        loading: loading
      }}
    >
      <RangePicker
        showTime
        format='YYYY/MM/DD HH:mm'
        onChange={dateTimeSelection}
      />
    </Modal>
  )
}

export default AddAppointment
