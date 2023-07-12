import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editItem, getItemById } from "../service/iventory.service";
import axios from "axios";
import MainLayout from "../components/templates/Main";
import InputForm from "../components/molecules/InputForm";
import Button from "../components/atoms/Button";
import Label from "../components/atoms/Label";
import moment from "moment";
import swal from "sweetalert";
import LoginPage from "./login";
import { statusCondition } from "./DataPage";
import numeral from "numeral";


export default function DetailPage({ id, setDetailBarang, detailBarang }) {
  // const { id } = useParams();
  const [item, setItem] = useState("");

  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [ownershipId, setOwnershipId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [qty, setQty] = useState("");
  // const [status, setStatus] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const [ownershipData, setOwnershipData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const [categoryName, setCategoryName] = useState("");
  const [ownershipName, setOwnershipName] = useState("");
  const [assetName, setAssetName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationMap, setLocationMap] = useState("");

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

  useEffect(() => {
    getItemById(id, (data) => {
      console.log(getItemById);
      setItem(data.data);
    });
  }, [id]);

  console.log(item);

  // console.log("CATEGORY NAME: ", item.category.categoryName);

  useEffect(() => {
    setItemName(item.itemName);
    setItemId(item.itemId);
    setCategoryId(item.categoryId);
    setOwnershipId(item.ownershipId);
    setLocationId(item.locationId);
    setQty(item.qty);
    // setStatus(item.status)
    setPurchaseDate(moment(item.purchaseDate).format("YYYY-MM-DD"));
    setCategoryName(item.category && item.category.categoryName);
    setOwnershipName(item.ownership && item.ownership.ownershipName);
    setAssetName(item.asset && item.asset.assetName);
    setLocationName(item.location && item.location.address);
    setLocationMap(item.location && item.location.mapUrl);
  }, [item]);
  console.log(categoryData);

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


  const calculateCondition = (purchaseDate) => {
    if (purchaseDate) {
      const currentDate = new Date();
      const yearsSincePurchase =
        currentDate.getFullYear() - new Date(purchaseDate).getFullYear();
      const conditionPercentage = 100 - yearsSincePurchase * 10;

      if (conditionPercentage >= 70) {
        return "BAIK";
      } else if (conditionPercentage >= 40) {
        return "KURANG BAIK";
      } else if (conditionPercentage >= 10) {
        return "RUSAK";
      } else {
        return "RUSAK";
      }
    }
  };
  const condition = calculateCondition(purchaseDate);

  const formatToIDR = (value) => {
    return `Rp ${numeral(value).format("0,0")}`;
  };

  return (
    <>
      {!error ? (
        <>

          <div className="flex flex-col w-full space-y-10">
            <div className="space-y-1">
              <p className="text-2xl font-medium">Nama Barang     : {itemName}</p>
              <p className="text-2xl font-medium">Kategori Barang : {categoryName}</p>
              <p className="text-2xl font-medium">Tahun Pembelian : {moment(purchaseDate).format("YYYY")}</p>
              <p className="text-2xl font-medium">Pemilik Aset    : {ownershipName}</p>
              {/* <p className="text-2xl font-medium">Status: {condition}</p> */}
            </div>


            <table className="w-full text-sm text-center dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-white">

                  <th scope="col" className="px-6 py-3">
                    Kode Barang
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Merk
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Asal Asset
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jumlah
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga Barang
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Kondisi
                  </th> */}
                  <th scope="col" className="px-6 py-3">
                    Lokasi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td className="px-6 py-3">{item.itemId}</td>
                  <td className="px-6 py-3">{item.merk}</td>
                  <td className="px-6 py-3">{assetName}</td>
                  <td className="px-6 py-3">{item.qty}</td>
                  <td className="px-6 py-3">{formatToIDR(item.price)}</td>
                  <td className="px-6 py-3">{formatToIDR(item.total)}</td>

                  {/* <td className="px-6 py-3">{ownershipName}</td> */}
                  {/* <td className="px-6 py-3">{condition}</td> */}
                  <td className="px-6 py-4">
                    <a target="blank_" href={locationMap}>
                      {locationName}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="absolute bottom-0 translate-x-[-500px] flex justify-end w-full p-10">
              <button
                className=" mb-10 flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setDetailBarang(false)}
              >
                BACK
              </button>
            </div>
          </div>



        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
