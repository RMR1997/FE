import React, { useState } from "react";
import MainLayout from "../components/templates/Main";
import axios from "axios";
import InputForm from "../components/molecules/InputForm";
import Button from "../components/atoms/Button";

export default function InputLocation() {
    const [address, setAddress] = useState("");
    const [mapUrl, setMapUrl] = useState("");

    const addLocation = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3006/postLocation", {
                address: address,
                mapUrl: mapUrl
            })
            window.location.href = "/dashboard";
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MainLayout title={"Input Alamat"}>
            <form onSubmit={addLocation}>
                <InputForm
                    id="address"
                    name="address"
                    label="Alamat"
                    type="text"
                    value={address}
                    required="required"
                    onChange={(e) =>
                        setAddress(e.target.value)
                    }
                    placeholder="Masukan Alamat"
                />

                <InputForm
                    id="mapUrl"
                    name="mapUrl"
                    label="Link Google Maps"
                    type="text"
                    value={mapUrl}
                    required="required"
                    onChange={(e) =>
                        setMapUrl(e.target.value)
                    }
                    placeholder="Masukan Link Google Maps"
                />

                <Button color="bg-green-500" text="text-white" type="submit">
                    Tambah
                </Button>
            </form>
        </MainLayout>
    );
}