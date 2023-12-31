import React, { useEffect, useState } from "react";
import MainLayout from "../components/templates/Main";
import axios from "axios";
import InputForm from "../components/molecules/InputForm";
import Button from "../components/atoms/Button";
import swal from "sweetalert";
import LoginPage from "./login";
import MainLayout2 from "../components/templates/Main2";

export default function InputCategory() {
    const [categoryName, setCategoryName] = useState("");
    const [categoryCode, setCategoryCode] = useState("");

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

    const addCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3006/postCategory", {
                categoryName: categoryName,
                categoryCode: categoryCode,
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
                <MainLayout2 title={"Input Kategori"}>
                    <form onSubmit={addCategory}>
                        <InputForm
                            id="categoryName"
                            name="categoryName"
                            label="Kategori"
                            type="text"
                            value={categoryName}
                            required="required"
                            onChange={(e) => setCategoryName(e.target.value)}
                            placeholder="Masukan Kategori"
                        />

                        <InputForm
                            id="categoryCode"
                            name="categoryCode"
                            label="Kode Kategori"
                            type="text"
                            value={categoryCode}
                            required="required"
                            onChange={(e) => setCategoryCode(e.target.value)}
                            placeholder="Masukan Kode Kategori"
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
