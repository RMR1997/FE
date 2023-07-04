import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/templates/Main";
import axios from "axios";

import InputForm from "../components/molecules/InputForm";
import Label from "../components/atoms/Label";
import Button from "../components/atoms/Button";

export default function InputPage() {
    const [itemName, setItemName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [ownershipId, setOwnershipId] = useState("");
    const [locationId, setLocationId] = useState("");
    const [qty, setQty] = useState("");
    const [status, setStatus] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");

    const [ownershipData, setOwnershipData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [locationData, setLocationData] = useState([]);

    const addItem = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3006/post", {
                itemName: itemName,
                categoryId: categoryId,
                ownershipId: ownershipId,
                locationId: locationId,
                qty: qty,
                status: status,
                purchaseDate: purchaseDate
            })
            window.location.href = "/datapage";
        } catch (error) {
            console.log(error);
        }
    };

    // FETCH DATA OWNERSHIP
    const fetchOwnershipData = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:3006/getOwnership");
            console.log("ini adalah", response);
            setOwnershipData(response.data.item);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {

        fetchOwnershipData();
    }, []);

    // FETCH CATEGORY OWNERSHIP
    const fetchCategoryData = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:3006/getCategory");
            console.log("ini adalah", response);
            setCategoryData(response.data.item);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {

        fetchCategoryData();
    }, []);

    // FETCH LCOATION OWNERSHIP
    const fetchLocationData = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:3006/getLocation");
            console.log("ini adalah", response);
            setLocationData(response.data.item);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {

        fetchLocationData();
    }, []);


    return (
        <MainLayout title={"Input Barang"}>
            <form onSubmit={addItem}>
                <InputForm
                    id="itemName"
                    name="itemName"
                    label="Nama Item"
                    type="text"
                    value={itemName}
                    onChange={(e) =>
                        setItemName(e.target.value)
                    }
                    placeholder="Masukkan Nama"
                />

                {/* <InputForm
                    label="categoryId"
                    type="text"
                    value={categoryId}
                    onChange={(e) =>
                        setCategoryId(e.target.value)
                    }
                    placeholder="Kategori"
                /> */}

                <Label>Kategori</Label>
                <select
                    id="categoryId"
                    name="categoryId"
                    value={categoryId}
                    onChange={(e) => {
                        setCategoryId(e.target.value);
                    }}
                    className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="" disabled>
                        Select Category
                    </option>
                    {categoryData.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.categoryName}
                        </option>
                    ))}
                </select>

                {/* <InputForm
                    label="ownershipId"
                    type="text"
                    value={ownershipId}
                    onChange={(e) =>
                        setOwnershipId(e.target.value)
                    }
                    placeholder="Kepemilikan"
                /> */}
                <Label>Pemilik</Label>
                <select
                    id="ownershipId"
                    name="ownershipId"
                    value={ownershipId}
                    onChange={(e) => {
                        setOwnershipId(e.target.value);
                    }}
                    className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >    <option value="" disabled>
                        Select Ownership
                    </option>
                    {ownershipData.map((ownership) => (
                        <option key={ownership.id} value={ownership.id}>
                            {ownership.ownershipName}
                        </option>
                    ))}
                </select>

                {/* <InputForm
                    label="locationId"
                    type="text"
                    value={locationId}
                    onChange={(e) =>
                        setLocationId(e.target.value)
                    }
                    placeholder="lokasi"
                /> */}

                <Label>Lokasi</Label>
                <select
                    id="locationId"
                    name="locationId"
                    value={locationId}
                    onChange={(e) => {
                        setLocationId(e.target.value);
                    }}
                    className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                    <option value="" disabled>
                        Select Location
                    </option>
                    {locationData.map((location) => (

                        <option key={location.id} value={location.id}>
                            {location.address}
                        </option>
                    ))}
                </select>

                <InputForm
                    label="Jumlah"
                    type="text"
                    value={qty}
                    onChange={(e) =>
                        setQty(e.target.value)
                    }
                    placeholder="Jumlah"
                />
                <InputForm
                    label="Status"
                    type="text"
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                    placeholder="Status"
                />
                <InputForm
                    label="Tanggal Beli"
                    type="date"
                    value={purchaseDate}
                    onChange={(e) =>
                        setPurchaseDate(e.target.value)
                    }
                    placeholder="Tanggal pembelian"
                />
                <Button color="bg-green-500" text="text-white" type="submit">
                    Daftar
                </Button>
            </form>
        </MainLayout>
    );
}