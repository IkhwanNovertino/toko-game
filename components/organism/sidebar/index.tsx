import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react';
import SidebarFooter from './footer';
import MenuItem from './menu-item';
import Profile from './profile';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" href="/member" active={activeMenu === 'overview'} />
          <MenuItem title="Transactions" icon="ic-menu-transactions" href="/member/transaksi" active={activeMenu === 'transactions'} />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Setting" icon="ic-menu-setting" href="/member/edit-profile" active={activeMenu === 'settings'} />
          <MenuItem title="Log Out" icon="ic-menu-logout" onClick={onLogout} />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
