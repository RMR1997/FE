import React, { useEffect, useState } from "react";
import MainLayout from "../components/templates/Main";
import { Link } from "react-router-dom";
import InfoBox from "../components/organisms/InfoBox";
import { getAllItems, getCategory } from "../service/iventory.service";
import ErrorPage from "./error";
import LoginPage from "./login";
import BarChart from "../components/templates/Chart";
import Chart from "../components/templates/Chart";

const Dashboard = () => {
  const [item, setItem] = useState([]);
  const [categoryItem, setCategoryitem] = useState([]);
  const [length, setLength] = useState();
  const [categoryLength, setCategoryLength] = useState();
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
    getCategory((data) => {
      console.log(data.item);
      setCategoryitem(data.item);
    });
  }, []);

  useEffect(() => {
    console.log(item.length);
    setLength(item.length);

    const category = categoryItem.filter((item) => item.id);
    setCategoryLength(category.length);



    const total = item.reduce((acc, cur) => acc + cur.qty, 0);
    setTotalStock(total);
  }, [item]);

  const inventoryData = [
    { title: "Jumlah Barang", count: length, color: "bg-red-200" },
    { title: "Total Asset", count: totalStock, color: "bg-yellow-200" },
    { title: "Kategori Barang", count: categoryLength, color: "bg-green-200" },
  ];

  return (
    <>
      {!error ? (
        <MainLayout title={"Dashboard"}>
          <div className="flex flex-col ">
            <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:gap-x-6 font-bold md:gap-y-24 gap-y-12 mt-8">
              {inventoryData.map((data, index) => (
                <InfoBox
                  key={index}
                  color={data.color}
                  title={data.title}
                  count={data.count}
                />

              ))}
            </div>
            <div className="mt-10 w-screen h-[250px] md:flex md:justify-center md:items-center md:mt-20 md:w-full">
              <Chart />
            </div>
          </div>


        </MainLayout>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default Dashboard;