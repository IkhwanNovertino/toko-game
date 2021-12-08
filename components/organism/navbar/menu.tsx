import cx from 'classnames'
import Link from 'next/link';

interface MenuProps {
  title: string; // wajib ada di navbar/index.tsx 
  active?: boolean; //tidak wajib ada di navbar/index.tsx
  href: string
}
export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href="/" } = props;
  const classTitle = cx({
    'nav-link': true,
    active,
  })
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">{title}</a>
      </Link>
    </li>
  )
}

