import BentoGridDemo from '@/components/example/bento-grid-demo'
import NavbarDemo from '@/components/example/navbar-menu-demo'
import React from 'react'

const Extra = () => {
  return (
    <div className="w-full bg-gradient-to-br from-purple-200 via-purple-500 to-purple-400 h-auto ">
      <NavbarDemo/>
      <BentoGridDemo/>
    </div>
  )
}

export default Extra
