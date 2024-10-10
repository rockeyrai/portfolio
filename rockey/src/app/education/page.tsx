"use client"
import React from 'react'
import NavbarDemo from "@/components/example/navbar-menu-demo";
import { CardHoverEffectDemo } from '@/components/example/card-hover-effect-demo';

const Education = () => {
  return (
    <div className="w-full bg-blue-400 bg-gradient-to-br from-blue-200 via-blue-500 to-blue-200 h-auto md:h-[100vh]">
      <NavbarDemo/>
      <CardHoverEffectDemo/>
    </div>
  )
}

export default Education
