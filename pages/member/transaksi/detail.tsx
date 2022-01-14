import React from 'react'
import SideBar from '../../../components/organism/sidebar'
import TransactionDetailContent from '../../../components/organism/transactions-detail-content'

function TransactionDetail() {
  return (
    <>
      <SideBar activeMenu='transactions' />
      <TransactionDetailContent />
    </>
  )
}

export default TransactionDetail
