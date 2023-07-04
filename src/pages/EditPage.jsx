import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { editItem, getItemById } from '../service/iventory.service';
import axios from 'axios';
import MainLayout from '../components/templates/Main';
import InputForm from '../components/molecules/InputForm';
import Button from '../components/atoms/Button';
import Label from '../components/atoms/Label';
import moment from 'moment';



export default function EditPage() {

  const { id } = useParams();
  const [item, setItem] = useState("")

  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [ownershipId, setOwnershipId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const [ownershipData, setOwnershipData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [locationData, setLocationData] = useState([]);



  const updateUser = async (id) => {
    try {
      const reqdata = {
        itemName: itemName,
        itemId: itemId,
        categoryId: categoryId,
        ownershipId: ownershipId,
        locationId: locationId,
        qty: qty,
        status: status,
        purchaseDate: purchaseDate
      }
      await axios.put(`http://localhost:3006/update/${id}`, reqdata);
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
    setCategoryId(item.categoryId)
    setOwnershipId(item.ownershipId)
    setLocationId(item.locationId)
    setQty(item.qty)
    setStatus(item.status)
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


  return (<MainLayout title={"Edit Barang"}>
    <form onSubmit={(e) => {
      e.preventDefault()
      updateUser(item.id)
    }}
    >
      <InputForm
        name="itemName"
        label="Nama item"
        type="text"
        value={itemName}
        onChange={(e) =>
          setItemName(e.target.value)
        }
        placeholder="Masukkan Nama"
      />
      <InputForm
        name="itemId"
        label="itemId"
        type="text"
        value={itemId}
        onChange={(e) =>
          setItemId(e.target.value)
        }
        placeholder="Masukkan Id"
      />

      <Label>Kategori</Label>
      <select
        id="categoryId"
        name="categoryId"
        value={categoryId}
        onChange={(e) => {
          setCategoryId(e.target.value);
        }}
        className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
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
        onChange={(e) => {
          setOwnershipId(e.target.value);
        }}
        className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
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
        onChange={(e) => {
          setLocationId(e.target.value);
        }}
        className="shadow border rounded w-full py-2 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {locationData.map((location) => (
          <option key={location.id} value={location.id}>
            {location.address}
          </option>
        ))}
      </select>

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
        Edit
      </Button>
    </form>
  </MainLayout>


  )
}