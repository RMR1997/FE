import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { getAllItems, getCategory } from "../../../service/iventory.service";


export default function Chart() {
    const [labels, setLabels] = useState([]);
    const [dataPoints, setDataPoints] = useState([]);

    // useEffect(() => {
    //     getAllItems((data) => {
    //         const items = data.item;
    //         // const itemName = items.map((item) => item.category.categoryName);
    //         const itemData = items.map((item) => item.qty);
    //         console.log("ini adalah ", items);
    //         // setLabels(itemName);
    //         setDataPoints(itemData);
    //     });
    // }, []);

    useEffect(() => {
        getAllItems((data) => {
            const items = data.item;
            const itemData = {};

            items.forEach((item) => {
                if (itemData[item.categoryId]) {
                    itemData[item.categoryId] += item.qty;
                } else {
                    itemData[item.categoryId] = item.qty;
                }
            });

            // const result = Object.entries(itemData).map(([categoryId, qty]) => ({ categoryId, qty }));

            // console.log("Result:", result);
            // setDataPoints(result);
            const result = Object.entries(itemData).map(([categoryId, qty]) => qty);

            console.log("Result:", result);
            setDataPoints(result);
        });
    }, []);

    useEffect(() => {
        getCategory((data) => {
            const categories = data.item;
            const categoryNames = categories.map((category) => category.categoryName);
            // const categoryData = categories.map((category) => category.categoryData);
            setLabels(categoryNames)
            // setDataPoints(categoryData);
        });
    }, []);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "total",
                data: dataPoints,
                backgroundColor: ["#4A55A2"],
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <>
            <div className="flex w-full h-full items-center justify-center">
                <Bar className="bg-[#EEEEEE] w-full " data={data} options={options} />
            </div>





        </>
    )
}