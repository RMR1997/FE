import React, { useState } from "react";
import MainLayout from "../components/templates/Main";
import axios from "axios";
import InputForm from "../components/molecules/InputForm";
import Button from "../components/atoms/Button";

export default function InputCategory() {
    const [categoryName, setCategoryName] = useState("");

    const addCategory = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3006/postCategory", {
                categoryName: categoryName
            })
            window.location.href = "/dashboard";
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MainLayout title={"Input Kategori"}>
            <form onSubmit={addCategory}>
                <InputForm
                    id="categoryName"
                    name="categoryName"
                    label="Kategori"
                    type="text"
                    value={categoryName}
                    required="required"
                    onChange={(e) =>
                        setCategoryName(e.target.value)
                    }
                    placeholder="Masukan Kategori"
                />

                <Button color="bg-green-500" text="text-white" type="submit">
                    Tambah
                </Button>
            </form>
        </MainLayout>
    );
}