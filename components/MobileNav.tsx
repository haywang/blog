'use client'

import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'

import { useState, useEffect, useRef, Fragment } from 'react'

import Menu from '@/data/menu.svg'
// import { Transition } from '@headlessui/react'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  console.log(navShow)
  const navRef = useRef(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
        window.alert('hidden')
      } else {
        window.alert('show')
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="sm:hidden"
      >
        <Menu className="h-8 w-8 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" />
      </button>
      {/* <Transition
        appear
        show={navShow}
        as={Fragment}
        unmount={false}
      ></Transition> */}
    </>
  )
}

export default MobileNav
