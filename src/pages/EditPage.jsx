import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { editItem, getItemById } from '../service/iventory.service';
import axios from 'axios';
import MainLayout from '../components/templates/Main';
import InputForm from '../components/molecules/InputForm';
import Button from '../components/atoms/Button';
import Label from '../components/atoms/Label';
import moment from 'moment';
import swal from 'sweetalert';
import LoginPage from './login';
import CurrencyInput from 'react-currency-input-field';



export default function EditPage() {

  const { id } = useParams();
  const [item, setItem] = useState("")

  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState("");
  const [assetId, setAssetId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [ownershipId, setOwnershipId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [statusId, setStatusId] = useState("");
  const [merk, setMerk] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const [ownershipData, setOwnershipData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [assetData, setAssetData] = useState([]);
  const [statusData, setStatusData] = useState([]);



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
        merk: merk,
        assetId: assetId,
        categoryId: categoryId,
        ownershipId: ownershipId,
        locationId: locationId,
        statusId: statusId,
        qty: qty,
        price: price,
        total: price * qty,
        purchaseDate: purchaseDate,
      }
      await axios.put(`http://localhost:3006/update/${id}`, reqdata);
      swal('Berhasil', 'Berhasil Edit Data', 'success');
      window.location.href = "/datapage"

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
    setItemName(item.itemName)
    setItemId(item.itemId)
    setMerk(item.merk)
    setPrice(item.price)
    setAssetId(item.assetId)
    setCategoryId(item.categoryId)
    setOwnershipId(item.ownershipId)
    setLocationId(item.locationId)
    setStatusId(item.statusId)
    setQty(item.qty)
    setPurchaseDate(moment(item.purchaseDate).format("YYYY-MM-DD"))
  }, [item])

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

  // FETCH STATUS
  const fetchStatusData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3006/getStatus");
      console.log("ini adalah", response);
      setStatusData(response.data.item);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchStatusData();
  }, []);



  return (

    <>
      {!error ? (

        <MainLayout title={"Edit Barang"}>
          <form onSubmit={(e) => {
            e.preventDefault()
            updateUser(item.id)
          }}
          >
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
              id="itemId"
              name="itemId"
              label="Item ID"
              type="text"
              required="required"
              disabled
              value={itemId}
              onChange={(e) => setItemId(e.target.value)}
              placeholder="Item ID"
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
              {assetData
                .slice() // Salin data kategori ke variabel baru
                .sort((a, b) => a.assetName.localeCompare(b.assetName))
                .map((asset) => (
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
              {categoryData.slice() // Salin data kategori ke variabel baru
                .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
                .map((category) => (
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
              {ownershipData
                .slice() // Salin data kategori ke variabel baru
                .sort((a, b) => a.ownershipName.localeCompare(b.ownershipName))
                .map((ownership) => (
                  <option key={ownership.id} value={ownership.id}>
                    {ownership.ownershipName}
                  </option>
                ))}
            </select>

            <Label>Status</Label>
            <select
              id="statusId"
              name="statusId"
              value={statusId}
              required="required"
              onChange={(e) => {
                setStatusId(e.target.value);
              }}
              className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {" "}
              <option value="" disabled>
                Select Status
              </option>
              {statusData
                .slice() // Salin data kategori ke variabel baru
                .sort((a, b) => a.statusName.localeCompare(b.statusName))
                .map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.statusName}
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
              {locationData
                .slice() // Salin data kategori ke variabel baru
                .sort((a, b) => a.address.localeCompare(b.address))
                .map((location) => (
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
              Simpan
            </Button>
          </form>
        </MainLayout>
      ) : (
        <LoginPage />

      )}
    </>

  )
}