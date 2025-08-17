'use client'

import { useState } from 'react'
import {
  HeaderBox,
  LoginLG,
  LogoLG,
  MobileMenuButton,
  NavBox,
  NavigationItems,
  NaviMobileDialog
} from "@/_UI/Header/elements";

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: '1 Col', href: '/prop1' },
  { name: '3 Col with search', href: '/prop2' },
  // { name: 'Residential', href: '/residential' },
  // { name: 'Rural', href: '/rural' },
  // { name: 'Commercial', href: '/commercial' },
]

export default function Header() {
  const [mobMenu, setMobMenu] = useState(false)

  return (
    <HeaderBox>
      <NavBox>
        <LogoLG/>
        <MobileMenuButton onClick={() => setMobMenu(true)}/>
        <NavigationItems items={navigationItems}/>
        <LoginLG/>
      </NavBox>
      <NaviMobileDialog mobMenu={mobMenu} setMobMenu={setMobMenu} navigationItems={navigationItems} />
    </HeaderBox>
  )
}




