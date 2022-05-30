import React, { useState } from 'react'
import { Outlet, Route, Routes, Link } from 'react-router-dom'
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer mt-12 fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer mt-12 left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div className="">
        <div
          className={`top-0 left-0 w-[15vw] bg-blue-600  p-10 pl-20 text-white fixed h-full mt-12 z-40 ${
            showSidebar === true ? 'translate-x-0 ' : '-translate-x-full'
          }`}
        >
          <ul className=" flex flex-col mt-16">
            <Link to="/dashboard/orders" className="text-left py-2">
              Orders
            </Link>
            <Link to="/dashboard/" className="text-left py-2">
              Profile
            </Link>
          </ul>
        </div>
        <div className="border-2 bg-red-200 w-96">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
