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

export default function DetailPage() {
  const { id } = useParams();
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

  const updateUser = async (id) => {
    try {
      const reqdata = {
        itemName: itemName,
        itemId: itemId,
        categoryId: categoryId,
        ownershipId: ownershipId,
        locationId: locationId,
        qty: qty,
        // status: status,
        purchaseDate: purchaseDate,
      };
      await axios.put(`http://localhost:3006/details/${id}`, reqdata);
      swal("Berhasil", "Berhasil Edit Data", "success");
      window.location.href = "/datapage";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItemById(id, (data) => {
      console.log(getItemById);
      setItem(data.data);
    });
  }, [id]);
  console.log(item);

  useEffect(() => {
    setItemName(item.itemName);
    setItemId(item.itemId);
    setCategoryId(item.categoryId);
    setOwnershipId(item.ownershipId);
    setLocationId(item.locationId);
    setQty(item.qty);
    // setStatus(item.status)
    setPurchaseDate(moment(item.purchaseDate).format("YYYY-MM-DD"));
  }, [item]);

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

  return (
    <>
      {!error ? (
        <>
          <p>Nama Barang : {itemName}</p>
          <p>Tahun Pembelian : {moment(purchaseDate).format("YYYY")}</p>
          <p>Jenis Aset : {ownershipId}</p>
          <br />
          <br />

          <thead className="text-xs uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-white">
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Kode Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Kategori
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <td className="px-6 py-4">{itemId}</td>
          <td className="px-6 py-4">{itemName}</td>
          <td className="px-6 py-4">{categoryId}</td>
          <td className="px-6 py-4">{ownershipId}</td>
          {/* <td className="px-6 py-4">{condition}</td>) */}
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
