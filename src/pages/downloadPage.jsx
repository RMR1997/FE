import React, { useCallback, useEffect, useState, useRef } from "react";
import MainLayout from "../components/templates/Main";
import { Link } from "react-router-dom";
import { deleteItem, getAllItems } from "../service/iventory.service";
import moment from "moment";
import axios from "axios";
import Icons from "../components/atoms/icons";
import swal from "sweetalert";
import LoginPage from "./login";
import { IoMdEye } from "react-icons/io";
import Modal2 from "../components/atoms/Modal";
import DetailPage from "./DetailPage";
import { useDownloadExcel } from "react-export-table-to-excel";

export let statusCondition = null


export default function DownloadPage() {

    const tableRef = useRef(null)
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "DATA INVENTORY",
        sheet: "DATA INVENTORY",
    })



    const [item, setItem] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [categories, setCategories] = useState([]);

    const [ownershipData, setOwnershipData] = useState([]);
    const [ownership, setOwnership] = useState([]);

    const [assetData, setAssetData] = useState([]);

    const [error, setError] = useState(false);
    const [detailBarang, setDetailBarang] = useState(false);
    const [idBarang, setIdBarang] = useState("")


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError(true);
        }
    }, []);

    useEffect(() => {
        console.log("token", error);
    }, [error]);

    useEffect(() => {
        getAllItems((data) => {
            console.log(data.item);
            setItem(data.item);
        });
    }, []);


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

    const calculateCondition = (purchaseDate) => {
        if (purchaseDate) {
            const currentDate = new Date();
            const yearsSincePurchase =
                currentDate.getFullYear() - new Date(purchaseDate).getFullYear();
            const conditionPercentage = 100 - yearsSincePurchase * 10;

            if (conditionPercentage >= 70) {
                return "BAIK";
            } else if (conditionPercentage >= 50) {
                return "KURANG BAIK";
            } else if (conditionPercentage >= 30) {
                return "RUSAK";
            } else {
                return "RUSAK";
            }
        }
    };

    return (
        <>
            {detailBarang && (
                <Modal2 title="DETAIL BARANG">
                    <DetailPage id={idBarang} detailBarang={detailBarang} setDetailBarang={setDetailBarang} />
                </Modal2>
            )}
            {!error ? (
                <MainLayout title={"Download Barang"}>
                    <div className="flex justify-end">
                        <button className=" bg-blue-600 rounded-2xl  text-white p-3 font-bold" onClick={onDownload}>DOWNLOAD TO EXCEL</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-row justify-start items-center gap-10 mb-4">
                            <div className="flex items-center gap-2">
                            </div>
                            <div className="flex items-center gap-2">
                            </div>
                        </div>
                    </div>

                    <table ref={tableRef} className="w-full text-sm text-center dark:text-gray-400">
                        <thead className="text-xs uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="text-white">
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kode Barang
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Barang
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Merk
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Kepemilikan
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Asset
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Lokasi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tahun Beli
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.map((data, index) => {
                                const condition = calculateCondition(data.purchaseDate);
                                statusCondition = condition
                                return (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={data.id}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4">{data.itemId}</td>
                                        <td className="px-6 py-4">
                                            {data.category.categoryName}
                                        </td>
                                        <td className="px-6 py-4">{data.itemName}</td>
                                        <td className="px-6 py-4">{data.merk}</td>

                                        <td className="px-6 py-4">
                                            {data.ownership.ownershipName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.asset.assetName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a target="blank_" href={data.location.mapUrl}>
                                                {data.location.address}
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">{data.qty}</td>
                                        <td className="px-6 py-4">{data.price}</td>
                                        <td className="px-6 py-4">{data.total}</td>
                                        <td className="px-6 py-4">{condition}</td>
                                        <td className="px-6 py-4">
                                            {moment(data.purchaseDate).format("YYYY")}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </MainLayout>
            ) : (
                <LoginPage />
            )}
        </>
    );
}
