import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/templates/Main";
import axios from "axios";

import InputForm from "../components/molecules/InputForm";
import Label from "../components/atoms/Label";
import Button from "../components/atoms/Button";

export default function InputPage() {
    const [itemName, setItemName] = useState("");
    const [itemId, setItemId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [ownershipId, setOwnershipId] = useState("");
    const [locationId, setLocationId] = useState("");
    const [qty, setQty] = useState("");
    const [status, setStatus] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");

    const addItem = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3006/post", {
                itemName: itemName,
                itemId: itemId,
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

    return (
        <MainLayout title={"Input Barang"}>
            <form onSubmit={addItem}>
                <InputForm
                    id="itemName"
                    name="itemName"
                    label="itemName"
                    type="text"
                    value={itemName}
                    onChange={(e) =>
                        setItemName(e.target.value)
                    }
                    placeholder="Masukkan Nama"
                />

                <InputForm
                    label="itemId"
                    type="text"
                    value={itemId}
                    onChange={(e) =>
                        setItemId(e.target.value)
                    }
                    placeholder="Kategori"
                />

                <InputForm
                    label="categoryId"
                    type="text"
                    value={categoryId}
                    onChange={(e) =>
                        setCategoryId(e.target.value)
                    }
                    placeholder="Kategori"
                />
                <InputForm
                    label="ownershipId"
                    type="text"
                    value={ownershipId}
                    onChange={(e) =>
                        setOwnershipId(e.target.value)
                    }
                    placeholder="Kepemilikan"
                />
                {/* < <Label>Kelas</Label>
                                        <select
                                            id="kelas"
                                            name="kelas"
                                            onChange={(e) => {
                                                setKelas(e.target.value)
                                            }}
                                            className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="Matematika">Kelas Matematika</option>
                                            <option value="IPA">Kelas IPA</option>
                                            <option value="IPS">Kelas IPS</option>
                                            <option value="Bahasa">Kelas Bahasa</option>
                                            <option value="Bela Diri">Kelas Bela Diri</option>
                                            <option value="Tari">Kelas Tari</option>
                                        </select>> */}

                <InputForm
                    label="locationId"
                    type="text"
                    value={locationId}
                    onChange={(e) =>
                        setLocationId(e.target.value)
                    }
                    placeholder="lokasi"
                />

                <InputForm
                    label="qty"
                    type="text"
                    value={qty}
                    onChange={(e) =>
                        setQty(e.target.value)
                    }
                    placeholder="Jumlah"
                />
                <InputForm
                    label="status"
                    type="text"
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                    placeholder="Status"
                />
                <InputForm
                    label="purchaseDate"
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