import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/templates/Main";
import axios from "axios";

import InputForm from "../components/molecules/InputForm";
import Label from "../components/atoms/Label";
import Button from "../components/atoms/Button";
import swal from "sweetalert";
import LoginPage from "./login";
import MainLayout2 from "../components/templates/Main2";
import CurrencyInput from "react-currency-input-field";

export default function InputPage() {
    const [itemName, setItemName] = useState("");
    const [assetId, setAssetId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [ownershipId, setOwnershipId] = useState("");
    const [locationId, setLocationId] = useState("");
    const [merk, setMerk] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");

    const [ownershipData, setOwnershipData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [locationData, setLocationData] = useState([]);
    const [assetData, setAssetData] = useState([]);

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

    const addItem = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3006/post", {
                itemName: itemName,
                merk: merk,
                categoryId: categoryId,
                ownershipId: ownershipId,
                locationId: locationId,
                assetId: assetId,
                qty: qty,
                price: price.toString(),
                purchaseDate: purchaseDate,
            });
            swal("Sukses", "Barang berhasil ditambahkan!", "success").then(() => {
                window.location.href = "/datapage";
            });
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

    // FETCH LOCATION
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

    // FETCH ASSET
    const fetchAssetData = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:3006/getAsset");
            console.log("ini adalah", response);
            setAssetData(response.data.item);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchAssetData();
    }, []);

    return (
        <>
            {!error ? (
                <MainLayout2 title={"Input Barang"}>
                    <form onSubmit={addItem}>
                        <InputForm
                            id="itemName"
                            name="itemName"
                            label="Nama Item"
                            type="text"
                            required="required"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="Masukkan Nama"
                        />

                        <InputForm
                            id="merk"
                            name="merk"
                            label="Merk"
                            type="text"
                            required="required"
                            value={merk}
                            onChange={(e) => setMerk(e.target.value)}
                            placeholder="Merk"
                        />

                        <CurrencyInput
                            className="text-sm border rounded-md w-full py-2 px-3 text-slate-700 placeholder:text-slate-400 bg-gray-200"
                            placeholder="Rp 100,000,000"
                            prefix="Rp "
                            decimalsLimit={2}
                            thousandSeparator=","
                            decimalSeparator="."
                            value={price}
                            onValueChange={(value) => {
                                if (isNaN(value)) {
                                    setPrice(0);
                                } else {
                                    setPrice((value));
                                }
                            }}
                        />

                        <Label>Asset</Label>
                        <select
                            id="assetId"
                            name="assetId"
                            value={assetId}
                            required="required"
                            onChange={(e) => {
                                setAssetId(e.target.value);
                            }}
                            className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="" disabled>
                                Select Asset
                            </option>
                            {assetData.map((asset) => (
                                <option key={asset.id} value={asset.id}>
                                    {asset.assetName}
                                </option>
                            ))}

                        </select>

                        <Label>Kategori</Label>
                        <select
                            id="categoryId"
                            name="categoryId"
                            value={categoryId}
                            required="required"
                            onChange={(e) => {
                                setCategoryId(e.target.value);
                            }}
                            className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="" disabled>
                                Select Category
                            </option>
                            {categoryData.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>

                        <Label>Pemilik</Label>
                        <select
                            id="ownershipId"
                            name="ownershipId"
                            value={ownershipId}
                            required="required"
                            onChange={(e) => {
                                setOwnershipId(e.target.value);
                            }}
                            className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            {" "}
                            <option value="" disabled>
                                Select Ownership
                            </option>
                            {ownershipData.map((ownership) => (
                                <option key={ownership.id} value={ownership.id}>
                                    {ownership.ownershipName}
                                </option>
                            ))}
                        </select>

                        <Label>Lokasi</Label>
                        <select
                            id="locationId"
                            name="locationId"
                            value={locationId}
                            required="required"
                            onChange={(e) => {
                                setLocationId(e.target.value);
                            }}
                            className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
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
                            required="required"
                            onChange={(e) => setQty(e.target.value)}
                            placeholder="Jumlah"
                        />

                        <InputForm
                            label="Tanggal Beli"
                            type="date"
                            value={purchaseDate}
                            // required="required"
                            onChange={(e) => {
                                setPurchaseDate(e.target.value);
                            }}
                            placeholder="Tanggal pembelian"
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
