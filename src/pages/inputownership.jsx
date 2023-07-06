import React, { useEffect, useState } from "react";
import MainLayout from "../components/templates/Main";
import axios from "axios";
import InputForm from "../components/molecules/InputForm";
import Button from "../components/atoms/Button";
import swal from "sweetalert";
import LoginPage from "./login";

export default function InputOwnership() {
    const [ownershipName, setOwnershipName] = useState("");
    const [ownershipCode, setOwnershipCode] = useState("");

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

    const addOwnership = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3006/postOwnership", {
                ownershipName: ownershipName,
                ownershipCode: ownershipCode
            })
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
                <MainLayout title={"Input Nama Pemilik"}>
                    <form onSubmit={addOwnership}>
                        <InputForm

                            id="ownershipName"
                            name="ownershipName"
                            label="Nama Pemilik"
                            type="text"
                            required="required"
                            value={ownershipName}
                            onChange={(e) =>
                                setOwnershipName(e.target.value)
                            }
                            placeholder="Masukan Nama Pemilik"

                        />

                        <InputForm
                            id="ownershipCode"
                            name="ownershipCode"
                            label="Code Pemilik"
                            type="text"
                            required="required"
                            value={ownershipCode}
                            onChange={(e) =>
                                setOwnershipCode(e.target.value)
                            }
                            placeholder="Masukan Code"
                        />

                        <Button color="bg-green-500" text="text-white" type="submit">
                            Tambah
                        </Button>
                    </form>
                </MainLayout>

            ) : (
                <LoginPage />

            )
            }
        </>
    );
}