import React from 'react';
import OverviewContent from '../../components/organism/overview-content';
import SideBar from '../../components/organism/sidebar';

function Overview() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

export default Overview;
