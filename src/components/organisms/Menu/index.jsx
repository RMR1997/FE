import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    swal({
      title: "Apakah Anda yakin akan keluar?",
      text: "Anda akan logout dari aplikasi.",
      icon: "warning",
      buttons: ["Batal", "Logout"],
      dangerMode: true,
    }).then((confirmLogout) => {
      if (confirmLogout) {
        // Lakukan proses logout
        localStorage.clear();
        swal("Berhasil Logout", "Anda telah keluar.", "success").then(() => {
          // Redirect ke halaman logout
          window.location.href = "/";
        });
      }
    });
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-row gap-x-4 text-white">
              <img src="/image/dg0.svg" className="md:w-20 w-8"></img>
              <img src="/image/ag0.svg" className="md:w-20 w-8"></img>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/dashboard">
            <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Dashboard
            </li>
          </Link>
          <Link to="/datapage">
            <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Data Barang
            </li>
          </Link>
          <Link to="/inputpage">
            <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Input
            </li>
          </Link>
          <li>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BurgerMenu;
