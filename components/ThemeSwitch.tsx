'use client'

import { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  Menu,
  MenuItems,
  MenuItem,
  MenuButton,
  RadioGroup,
  Radio,
  Transition
} from '@headlessui/react'

import Sun from '@/data/sun.svg'
import Moon from '@/data/moon.svg'
import Monitor from '@/data/monitor.svg'

const Blank = () => <svg className="h-6 w-6" />

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="mr-5 flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center justify-center hover:text-primary-500 dark:hover:text-primary-400">
          <MenuButton
            aria-label="Theme switcher"
            className="group:hover:text-gray-100 h-6 w-6"
          >
            {mounted ? (
              resolvedTheme === 'dark' ? (
                <Moon />
              ) : (
                <Sun />
              )
            ) : (
              <Blank />
            )}
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
            <RadioGroup value={theme} onChange={setTheme}>
              <Radio value="light">
                <MenuItem>
                  {({ focus }) => (
                    <button
                      className={`${focus ? 'bg-primary-600 text-white' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <div className="mr-2">
                        <Sun className="group:hover:text-gray-100 h-6 w-6" />
                      </div>
                      Light
                    </button>
                  )}
                </MenuItem>
              </Radio>
              <Radio value="dark">
                <MenuItem>
                  {({ focus }) => (
                    <button
                      className={`${focus ? 'bg-primary-600 text-white' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <div className="mr-2">
                        <Moon className="group:hover:text-gray-100 h-6 w-6" />
                      </div>
                      Dark
                    </button>
                  )}
                </MenuItem>
              </Radio>
              <Radio value="system">
                <MenuItem>
                  {({ focus }) => (
                    <button
                      className={`${focus ? 'bg-primary-600 text-white' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <div className="mr-2">
                        <Monitor className="group:hover:text-gray-100 h-6 w-6" />
                      </div>
                      System
                    </button>
                  )}
                </MenuItem>
              </Radio>
            </RadioGroup>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default ThemeSwitch
