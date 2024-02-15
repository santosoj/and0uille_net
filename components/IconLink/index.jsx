import { Icon } from '@iconify/react'
import style from './IconLink.module.css'

export default function IconLink({ariaLabel, icon, href, ...anchorAttrs}) {
  return <>
    <a aria-label={ariaLabel} href={href} className={style.anchor} {...anchorAttrs}>
      <Icon icon={icon} className={style.icon} />
    </a>
  </>
}