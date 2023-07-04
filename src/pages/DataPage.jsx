import React, { useEffect, useState } from "react";
import MainLayout from "../components/templates/Main";
import { Link } from "react-router-dom";
import { deleteItem, getAllItems } from "../service/iventory.service";
import moment from "moment";
import axios from "axios";


export default function DataPage() {
  // state for data
  const [item, setItem] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllItems((data) => {
      console.log(data.item);
      setItem(data.item)
    })
  }, [])

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
  return (

    <MainLayout title={"Data Barang"}>
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-10 mb-4">
          <div className="flex items-center gap-2">
            <label htmlFor="relevance" className="text-slate-700 font-semibold">
              Kategori:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-2 py-1 border-b-4 border "
            >
              <option value="">Elektronik</option>
              <option value="">Furniture</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="relevance" className="text-slate-700 font-semibold">
              Kepemilikan:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-2 py-1 border-b-4 border "
            >
              <option value="">Aigen</option>
              <option value="">GS</option>
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
              <td className="px-6 py-4">{data.location.address}</td>
              <td className="px-6 py-4">{data.qty}</td>
              <td className="px-6 py-4">{data.status}</td>
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