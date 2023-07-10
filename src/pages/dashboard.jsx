import React, { useEffect, useState } from "react";
import MainLayout from "../components/templates/Main";
import { Link } from "react-router-dom";
import InfoBox from "../components/organisms/InfoBox";
import { getAllItems } from "../service/iventory.service";
import ErrorPage from "./error";
import LoginPage from "./login";

const Dashboard = () => {
  const [item, setItem] = useState([]);
  const [length, setLength] = useState();
  const [furnitureLength, setFurnitureLength] = useState(0);
  const [electronicLength, setElectronicLength] = useState(0);
  const [totalStock, setTotalStock] = useState(0);

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
    getAllItems((data) => {
      console.log(data.item);
      setItem(data.item);
    });
  }, []);

  useEffect(() => {
    console.log(item.length);
    setLength(item.length);

    const furnitureItems = item.filter((item) => item.category.id === 1);
    setFurnitureLength(furnitureItems.length);

    const electronicItems = item.filter((item) => item.category.id === 2);
    setElectronicLength(electronicItems.length);

    const total = item.reduce((acc, cur) => acc + cur.qty, 0);
    setTotalStock(total);
  }, [item]);

  const inventoryData = [
    { title: "Jumlah Barang", count: length, color: "bg-red-200" },
    { title: "Furniture", count: furnitureLength, color: "bg-green-200" },
    { title: "Elektronik", count: electronicLength, color: "bg-blue-200" },
    { title: "Stok Barang", count: totalStock, color: "bg-yellow-200" },
  ];

  return (
    <>
      {!error ? (
        <MainLayout title={"Dashboard"}>
          <div className="flex flex-wrap justify-center items-center gap-x-40 gap-y-8 mt-8">
            {inventoryData.map((data, index) => (
              <InfoBox
                key={index}
                color={data.color}
                title={data.title}
                count={data.count}
              />
            ))}
          </div>
        </MainLayout>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default Dashboard;
