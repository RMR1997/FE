import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../components/templates/Main";
import { Link } from "react-router-dom";
import { deleteItem, getAllItems } from "../service/iventory.service";
import moment from "moment";
import axios from "axios";


export default function DataPage() {
  // state for data
  const [item, setItem] = useState([])
  const [search, setSearch] = useState("")
  const [categoryData, setCategoryData] = useState([])
  const [categories, setCategories] = useState([])

  const [ownershipData, setOwnershipData] = useState([])
  const [ownership, setOwnership] = useState([])



  useEffect(() => {
    getAllItems((data) => {
      console.log(data.item);
      setItem(data.item)
    })
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

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/delete/${id}`);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan sesuatu dengan nilai search, misalnya mengirim permintaan ke API
    console.log('Melakukan pencarian dengan kata kunci:', search);
  };

  // const furniture = categoryData.id
  return (

    <MainLayout title={"Data Barang"}>
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-10 mb-4">
          <div className="flex items-center gap-2">
            <label htmlFor="category" className="text-slate-700 font-semibold">
              Kategori:
            </label>
            <select
              name="category"
              id="category"
              value={categories}
              className="bg-white rounded-[3px] px-2 py-1 border-b-4 border "
              onChange={(e) => setCategories(e.target.value)}
            >
              <option value="">Semua Kategori</option>

              {categoryData.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="relevance" className="text-slate-700 font-semibold">
              Kepemilikan:
            </label>
            <select
              name="ownership"
              id="ownership"
              value={ownership}
              className="bg-white rounded-[3px] px-2 py-1 border-b-4 border "
              onChange={(e) => setOwnership(e.target.value)}
            >
              <option value="">Ownership</option>

              {ownershipData.map((ownership) => (
                <option value={ownership.id} key={ownership.id}>
                  {ownership.ownershipName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="border rounded-lg p-1 bg-slate-400">
            <input type="text" className="rounded-lg text-center" value={search} onChange={handleInputChange} placeholder="Search..." />
            <button onClick={handleSearch}></button>
          </div>
        </div>
      </div>

      <table className="w-full text-sm text-center dark:text-gray-400">
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
              Kepemilikan
            </th>
            <th scope="col" className="px-6 py-3">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal Beli
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {item.filter((data) => {
            return search.toLowerCase() === '' ? data : data.itemName.toLowerCase().includes(search);
          })
            .filter((data) => {
              const categoryFilter = document.getElementById("category").value;
              console.log("ini", categoryFilter);
              return categoryFilter === ""
                ? data : categoryFilter === "1" ? data.category.id === 1
                  : data.category.id === 2
            })
            .filter((data) => {
              const ownershipFilter = document.getElementById("ownership").value;
              console.log("ini", ownershipFilter);
              return ownershipFilter === ""
                ? data : ownershipFilter === "1" ? data.ownership.id === 1
                  : data.ownership.id === 2
            }).map((data, index) => (

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
                <td className="px-6 py-4">{data.itemName}</td>
                <td className="px-6 py-4">{data.category.categoryName}</td>
                <td className="px-6 py-4">{data.ownership.ownershipName}</td>
                <td className="px-6 py-4"><a target="blank_" href={data.location.mapUrl}>{data.location.address}</a></td>
                <td className="px-6 py-4">{data.qty}</td>
                <td className="px-6 py-4">{data.status >= 70 ? "SANGAT BAIK" : data.status >= 50 ? "BAIK" : "HARUS DI GANTI"}</td>
                <td className="px-6 py-4">{moment(data.purchaseDate).format("DD-MM-YYYY")}</td>
                <td className="flex px-6 py-4 justify-between">
                  <Link to={`/edit/${data.id}`}> <a href="" className="text-blue-500 hover:underline">Edit</a></Link>

                  <button className="text-red-500 hover:underline" onClick={() => deleteItem(data.id)}>Delete</button>


                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </MainLayout>
  );
}