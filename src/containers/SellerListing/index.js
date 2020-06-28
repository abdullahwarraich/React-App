import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Table, PageHeader, ErrorToast } from '../../components'
import AddAppointment from './AddAppointment'
import { getSellerList } from '../../apis'
import { SellerListingTableHeader } from './SellerListingTableHeader'

const SellerListing = () => {
  const history = useHistory()
  const [sellerList, setSellerList] = useState([])
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [sellerId, setSellerId] = useState(null)

  useEffect(() => {
    setLoading(true)
    getSellerList()
      .then(response => {
        setSellerList(response)
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
  }, [])
  const closeModal = () => {
    if (!modalVisible) {
      setSellerId(null)
    }
    setModalVisible(false)
  }
  const addAppointment = id => {
    setSellerId(id)
    setModalVisible(true)
  }

  const columns = SellerListingTableHeader(addAppointment, history)
  return (
    <>
      <PageHeader title='List of Sellers' />
      <Table columns={columns} data={sellerList} loading={loading} />
      {modalVisible && (
        <AddAppointment
          visible={modalVisible}
          sellerId={sellerId}
          closeModal={closeModal}
        />
      )}
    </>
  )
}

export default SellerListing
