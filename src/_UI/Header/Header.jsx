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
import {PROPERTY_PAGE_URI} from "@/app/property/const";

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/'+PROPERTY_PAGE_URI },
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




