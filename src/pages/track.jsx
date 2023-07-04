import React, { useEffect, useState } from "react";
import MainLayout from "../components/templates/Main";
import { Link } from "react-router-dom";
import InputForm from "../components/molecules/InputForm";
import Button from "../components/atoms/Button";
import { getAllItems } from "../service/iventory.service";
import moment from "moment";

export default function TrackPage() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllItems((data) => {
      console.log(data.item);
      setItem(data.item);
    });
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    console.log("Melakukan pencarian dengan kata kunci:", search);
    // Lakukan sesuatu dengan nilai search, misalnya mengirim permintaan ke API

    // Mengambil data barang berdasarkan kode barang yang diinputkan
    const filteredItems = item.filter((data) =>
      data.itemId.toLowerCase().includes(search.toLowerCase())
    );

    // Mengupdate state item dengan data yang sudah difilter
    setItem(filteredItems);
  };

  return (
    <MainLayout title={"Track"}>
      <form>
        <InputForm
          label="Kode Barang"
          type="text"
          name="Kode Barang"
          placeholder="Masukkan Kode"
          size="w-40"
          value={search}
          onChange={handleInputChange}
        />
        <div className="text-center">
          <Button
            onClick={handleSearch}
            color="bg-blue-600"
            text="text-white"
            size="w-[200px]"
          >
            Cari Barang
          </Button>
        </div>
        {search === "" ? ("") : (<table className="w-full text-sm text-center dark:text-gray-400">
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
            </tr>
          </thead>
          <tbody>
            {item
              .filter((data) =>
                search.toLowerCase() === ""
                  ? data
                  : data.itemId
                    .toLowerCase()
                    .includes(search.toLowerCase())
              )
              .map((data, index) => (
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
                  <td className="px-6 py-4">
                    <a target="blank_" href={data.location.mapUrl}>{data.location.address}</a>
                  </td>
                  <td className="px-6 py-4">{data.qty}</td>
                  <td className="px-6 py-4">
                    {data.status >= 70 ? "SANGAT BAIK" : data.status >= 50 ? "BAIK" : "HARUS DI GANTI"}
                  </td>
                  <td className="px-6 py-4">
                    {moment(data.purchaseDate).format("DD-MM-YYYY")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>)}

      </form>
    </MainLayout>
  );
}