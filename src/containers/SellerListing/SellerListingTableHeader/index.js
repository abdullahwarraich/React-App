import React from 'react'
import { ActionWrapper, Action } from './style'

export const SellerListingTableHeader = (addAppointment, history) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'left'
  },
  {
    title: 'Details',
    dataIndex: 'detail',
    key: 'detail',
    align: 'left'
  },
  {
    title: 'Contact',
    children: [
      {
        title: 'Email',
        dataIndex: 'contact',
        key: 'contact',
        align: 'left',
        render: contact => contact.email || '-'
      },
      {
        title: 'Cell Number',
        dataIndex: 'contact',
        key: 'contact',
        align: 'left',
        render: contact => contact.cellNumber || '-'
      }
    ]
  },
  {
    title: 'Actions',
    key: 'action',
    render: (text, record) => (
      <ActionWrapper>
        <Action onClick={() => addAppointment(record._id)}>
          Add Appointment
        </Action>
        <Action
          onClick={() =>
            history.push({
              pathname: `/appointment/${record._id}`,
              state: {
                sellerName: record.name
              }
            })
          }
        >
          Appointment List
        </Action>
      </ActionWrapper>
    )
  }
]
