/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { TopupCategoriesTypes, TransactionsTypes } from '../../../services/data-types';
import { getMemberOverview } from '../../../services/member';
import Category from './category-card';
import TableRow from './table-row';

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [datas, setDatas] = useState([]);

  const getOverviewMember = useCallback(async () => {
    const { data } = await getMemberOverview();
    setCount(data.count);
    setDatas(data.data);
  }, [getMemberOverview]);

  useEffect(() => {
    getOverviewMember();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((item: TopupCategoriesTypes) => (
                <Category
                  key={item._id}
                  icon="ic-category-mobile"
                  nominal={item.value}
                >
                  Game
                  <br />
                  {item.name}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((item: TransactionsTypes) => (
                  <TableRow
                    key={item._id}
                    title={item.historyVoucherTopup.gameName}
                    category={item.historyVoucherTopup.category}
                    item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                    price={item.value}
                    status={item.status}
                    image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
