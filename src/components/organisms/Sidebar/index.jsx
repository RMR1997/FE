import React from "react";
import { Link } from "react-router-dom";
import { GiExitDoor, GiPowerButton } from "react-icons/gi";
import AuthLogo from "../../templates/AuthLogo";
import AuthLogo2 from "../../templates/AuthLogo2";
import swal from "sweetalert";

export default function Sidebar() {
  const handleNavigation = (route) => {
    window.location.href = route;
    console.log(route);
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
    <>
      <div className="flex flex-col w-full bg-[#EEEEEE] shadow-lg">
        <div className="flex w-full px-4 py-8 space-x-2 flex-col">
          <h1 className="text-[30px] text-center font-bold uppercase ml-6">

          </h1>
          <AuthLogo2 />

        </div>
        <div className="flex flex-col justify-center mt-10 w-full h-[70%] p-4 space-y-4 text-black">
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-md text-md font-medium bg-[#393E46] text-white ease-in duration-300 hover:translate-x-6 w-full"
          >
            Dashboard
          </Link>
          <Link
            to="/datapage"
            className="px-4 py-2 rounded-md text-md font-medium bg-[#393E46] text-white ease-in duration-300 hover:translate-x-6 w-full"
          >
            Data Barang
          </Link>

          <Link
            to="/inputpage"
            className=" px-4 py-2 rounded-md text-md font-medium bg-[#393E46] text-white ease-in duration-300 hover:translate-x-6 w-full"
          >
            {" "}
            Input{" "}
          </Link>
        </div>

        <div className="flex justify-start gap-2  w-full px-8 pt-16 mb-10">
          <div>
            <button className=""
              onClick={handleLogout}
            >

              <div className="flex gap-2">
                <GiExitDoor className="text-[25px]" />
                <h1 className="font-semibold">Logout</h1>
              </div>

              {/* <GiPowerButton className="text-[25px]" /> */}
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
