import React from 'react'
import { Button } from '../../../components'
import { ActionWrapper } from './style'

const buttonDisabled = status => {
  switch (status) {
    case 'AVAILABLE':
    case 'REJECTED':
    case 'ACCEPTED':
      return true
    case 'PENDING':
      return false
    default:
      return true
  }
}

export const AppointmentListingHeader = (
  updateAppointmentStatusUpdate,
  deleteAppointmentFromList
) => [
  {
    title: 'Start Time',
    dataIndex: 'startDate',
    key: 'startDate',
    align: 'left',
    render: startDate => new Date(startDate).toUTCString()
  },
  {
    title: 'End Time',
    dataIndex: 'endDate',
    key: 'endDate',
    align: 'left',
    render: endDate => new Date(endDate).toUTCString()
  },
  {
    title: 'Request Status',
    dataIndex: 'status',
    key: 'status',
    align: 'left'
  },
  {
    title: 'Actions',
    key: 'action',
    align: 'center',
    render: (text, record) => (
      <ActionWrapper>
        <Button
          type='primary'
          disabled={buttonDisabled(record.status)}
          onClick={() => updateAppointmentStatusUpdate(record._id, 'ACCEPTED')}
        >
          Accept
        </Button>
        <Button
          type='primary'
          disabled={buttonDisabled(record.status)}
          onClick={() => updateAppointmentStatusUpdate(record._id, 'REJECTED')}
          danger
        >
          Reject
        </Button>
        <Button
          type='primary'
          disabled={record.status === 'AVAILABLE' ? false : true}
          onClick={() => deleteAppointmentFromList(record._id)}
          danger
        >
          Delete
        </Button>
      </ActionWrapper>
    )
  }
]
