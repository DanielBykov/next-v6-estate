'use client'

import { useState } from 'react'
import {LoginLG, LogoLG, MobileMenuButton, Navi, NaviMobileDialog} from "@/_UI/Header/elements";

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'Features', href: '/features' },
  { name: 'Company', href: '/company' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobMenu, setMobMenu] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white/50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <LogoLG/>
        <MobileMenuButton onClick={() => setMobMenu(true)}/>
        <Navi items={navigationItems}/>
        <LoginLG/>
      </nav>
      <NaviMobileDialog mobMenu={mobMenu} setMobMenu={setMobMenu} navigationItems={navigationItems} />
    </header>
  )
}




