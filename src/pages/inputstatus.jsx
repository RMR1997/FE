import React, { useEffect, useState } from "react";
import MainLayout from "../components/templates/Main";
import axios from "axios";
import InputForm from "../components/molecules/InputForm";
import Button from "../components/atoms/Button";
import swal from "sweetalert";
import LoginPage from "./login";
import MainLayout2 from "../components/templates/Main2";

export default function InputStatus() {
    const [statusName, setstatusName] = useState("");


    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError(true);
        }
    }, []);

    useEffect(() => {
        console.log("token", error);
    }, [error]);

    const addStatus = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3006/postStatus", {
                statusName: statusName,

            });
            swal("Sukses", "Berhasil Tambah Data", "success").then(() => {
                window.location.href = "/datapage";
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {!error ? (
                <MainLayout2 title={"Input Status"}>
                    <form onSubmit={addStatus}>
                        <InputForm
                            id="statusName"
                            name="statusName"
                            label="Status"
                            type="text"
                            required="required"
                            value={statusName}
                            onChange={(e) => setstatusName(e.target.value)}
                            placeholder="Masukan Status"
                        />

                        <Button color="bg-green-500" text="text-white" type="submit">
                            Tambah
                        </Button>
                    </form>
                </MainLayout2>
            ) : (
                <LoginPage />
            )}
        </>
    );
}
