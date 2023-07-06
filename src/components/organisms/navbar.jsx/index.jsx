import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function Navbar() {
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const [tanggal, setTanggal] = useState('')

    useEffect(() => {
        // Fungsi untuk mendapatkan tanggal hari ini dengan format waktu Indonesia
        const getTanggalIndonesia = () => {
            const options = {
                timeZone: 'Asia/Jakarta',
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            };

            const tanggal = new Date().toLocaleString('id-ID', options);
            return tanggal;
        }

        // Mengupdate tanggal pada saat komponen dimount
        setTanggal(getTanggalIndonesia());
    }, []);

    const date = new Date()

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
            <div className="flex justify-center w-full h-[20%] p-4">
                <div className="flex flex-row justify-between items-end w-full bg-white rounded-xl shadow-lg px-8">
                    <div className="mb-8">
                        <div className="max-w-md mx-auto bg-white ">
                            <h1 className="text-2xl font-bold">Date</h1>
                            <p className="text-lg" id="tanggal-indonesia">{tanggal}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-8">

                        <button
                            className="bg-white border rounded-md text-md font-semibold text-white hover:bg-blue-500 hover:text-white shadow w-20 dark:bg-gray-400  transition duration-200 py-2"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}