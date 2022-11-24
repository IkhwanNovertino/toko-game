import React from 'react';
import SideBar from '../../../components/organism/sidebar';
import TransactionContent from '../../../components/organism/transactions-content';

function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}

export default Transactions;
