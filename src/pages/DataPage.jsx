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


export let statusCondition = null

export default function DataPage() {



  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [categories, setCategories] = useState([]);

  const [ownershipData, setOwnershipData] = useState([]);
  const [ownership, setOwnership] = useState([]);

  const [assetData, setAssetData] = useState([]);

  const [error, setError] = useState(false);
  const [detailBarang, setDetailBarang] = useState(false);
  const [idBarang, setIdBarang] = useState("")

  const handleDetail = (id) => {
    setIdBarang(id)
    setDetailBarang(true);
  }

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

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


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

  const handleDelete = (id) => {
    swal({
      title: "Apakah Anda Yakin?",
      text: "Data akan dihapus secara permanen!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "Konfirmasi",
          text: "Masukkan kata sandi untuk konfirmasi penghapusan:",
          content: "input",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((password) => {
          if (password && password.trim() === "12345678") {
            deleteItem(id)
              .then(() => {
                swal("Data berhasil dihapus!", {
                  icon: "success",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            swal("Konfirmasi gagal!", "Kata sandi salah.", "error");
          }
        });
      }
    });
  };



  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan sesuatu dengan nilai search, misalnya mengirim permintaan ke API
    console.log("Melakukan pencarian dengan kata kunci:", search);
  };


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
        <MainLayout title={"Data Barang"}
          option={<Link to={"/download"}><button className=" bg-[#00ADB5] rounded-2xl  text-white p-3 font-bold">Download</button></Link>}
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-row justify-start items-center gap-10 mb-4">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="category"
                  className="text-slate-700 font-semibold"
                >
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

                  {categoryData
                    .slice() // Salin data kategori ke variabel baru
                    .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
                    .map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.categoryName}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="relevance"
                  className="text-slate-700 font-semibold"
                >
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
                <input
                  type="text"
                  className="rounded-lg text-center"
                  value={search}
                  onChange={handleInputChange}
                  placeholder="Search..."
                />
                <button onClick={handleSearch}></button>
              </div>
            </div>
          </div>

          <table className="w-full text-sm text-center dark:text-gray-400">
            <thead className="text-xs uppercase bg-[#393E46]">
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
                  Kondisi
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {item
                .filter((data) => {
                  const itemName = data.itemName.toLowerCase();
                  const query = search.toLowerCase();
                  return itemName.includes(query);
                })
                .filter((data) => {
                  const categoryFilter = document.getElementById("category").value;
                  console.log("ini", categoryFilter);

                  const categoryMappings = {};

                  for (let i = 1; i <= 30; i++) {
                    categoryMappings[i.toString()] = i;
                  }

                  if (categoryFilter === "") {
                    return data;
                  } else if (categoryMappings.hasOwnProperty(categoryFilter)) {
                    return data.category.id === categoryMappings[categoryFilter];
                  } else {
                    return false;
                  }
                })
                .filter((data) => {
                  const ownershipFilter =
                    document.getElementById("ownership").value;
                  console.log("ini", ownershipFilter);
                  return ownershipFilter === ""
                    ? data
                    : ownershipFilter === "1"
                      ? data.ownership.id === 1
                      : ownershipFilter === "2"
                        ? data.ownership.id === 2
                        : data.ownership.id === 3;
                })
                .map((data, index) => {
                  const condition = calculateCondition(data.purchaseDate);
                  statusCondition = condition
                  return (
                    <tr
                      className="bg-[#A0BFE0] border-b font-medium text-black"
                      key={data.id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 whitespace-nowrap"
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
                      <td className="px-6 py-4">{condition}</td>
                      <td className=" px-6 py-4 flex justify-center gap-6 items-center">
                        <button
                          onClick={() => {
                            handleDetail(data.id)
                          }}
                        >
                          <IoMdEye className="text-[25px]" />
                        </button>

                        <Link to={`/edit/${data.id}`}>
                          {" "}
                          <a href="" className="">
                            <Icons.pen width="25px" height="25px" color="#3333cc" />
                          </a>
                        </Link>
                        <button
                          className=""
                          onClick={() => handleDelete(data.id)}
                        >
                          <Icons.trash
                            width="35px"
                            height="35px"
                            color="#ff0000"
                          />
                        </button>
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
