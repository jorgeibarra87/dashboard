/** @format */

import React from "react"
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri"
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu"
import "@szhsin/react-menu/dist/index.css"
import "@szhsin/react-menu/dist/transitions/slide.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className=' h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-2'>
        <Menu
          menuButton={
            <MenuButton className='relative hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
              <RiNotification3Line className='' />
              <span className='absolute -top-0.5 -right-0 bg-primary py-0.5 px-[5px] text-black rounded-full text-[8px] font-bold'>
                2
              </span>
            </MenuButton>
          }
          transition
          align='end'
          arrow
          arrowClassName='bg-secondary-100'
          menuClassName='bg-secondary-100 p-4'
        >
          <h1 className='text-gray-300 text-center font-medium'>
            Notifications (2)
          </h1>
          <hr className='my-6 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/'
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
            >
              <img
                src='https://img.freepik.com/foto-gratis/negocio-hombre-negocios-exitoso-trabajando-ordenador-portatil-usando-computadora-sonriendo-pie_1258-26447.jpg'
                alt=''
                className='w-8 h-8 object-cover rounded-full'
              />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Jorge Ibarra</span>
                  <span className='text-[8px]'>15/03/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/'
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
            >
              <RiThumbUpLine className='p-2 bg-blue-200 text-blue-700 box-content rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>New like</span>
                  <span className='text-[8px]'>15/03/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>
                  Jorge Ibarra likes your post...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/'
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
            >
              <RiChat3Line className='p-2 bg-yellow-200 text-yellow-700 box-content rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>New comment</span>{" "}
                  <span className='text-[8px]'>15/03/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>
                  Jorge Ibarra has commented...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-6 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent flex justify-center cursor-default'>
            <Link
              to='/'
              className='text-gray-400 text-sm hover:text-white transition-colors'
            >
              All notifications
            </Link>
          </MenuItem>
        </Menu>

        <Menu
          menuButton={
            <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
              <img
                src='https://img.freepik.com/foto-gratis/negocio-hombre-negocios-exitoso-trabajando-ordenador-portatil-usando-computadora-sonriendo-pie_1258-26447.jpg'
                alt=''
                className='w-6 h-6 object-cover rounded-full'
              />
              <span>Jorge Ibarra</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          transition
          align='end'
          arrow
          arrowClassName='bg-secondary-100'
          menuClassName='bg-secondary-100 p-4'
        >
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/profile'
              className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'
            >
              <img
                src='https://img.freepik.com/foto-gratis/negocio-hombre-negocios-exitoso-trabajando-ordenador-portatil-usando-computadora-sonriendo-pie_1258-26447.jpg'
                alt=''
                className='w-8 h-8 object-cover rounded-full'
              />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>Jorge Ibarra</span>
                <span className='text-xs text-gray-500'>jorge@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/configuration'
              className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'
            >
              <RiSettings3Line /> Configuration
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/logout'
              className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'
            >
              <RiLogoutCircleRLine /> Logout
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}
