import React, { useState, useEffect } from "react";
import {
    Line,
    CartesianGrid,
    LineChart,
    XAxis,
    Tooltip,
    YAxis,
    BarChart,
    Legend,
    Bar,
} from "recharts";
import HeaderMain from "../Header/Header";

const Dashboard = () => {
    const [info, setData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    console.log(info);
    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-4">
                        <h4 className="text-center">Sell on Month</h4>
                        <LineChart width={400} height={400} data={info}>
                            <XAxis dataKey="month" />
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line
                                type="monotone"
                                dataKey="sell"
                                stroke="#ff7300"
                                yAxisId={0}
                            />
                            <YAxis></YAxis>
                        </LineChart>
                    </div>
                    <div className="col-md-6 p-4">
                        <h4 className="text-center">Revenue on Month</h4>
                        <BarChart width={500} height={400} data={info}>
                            <XAxis dataKey="month" stroke="#8884d8" />
                            <YAxis />
                            <Tooltip
                                wrapperStyle={{
                                    width: 100,
                                    backgroundColor: "#ccc",
                                }}
                            />
                            <Legend
                                width={100}
                                wrapperStyle={{
                                    top: 40,
                                    right: 20,
                                    backgroundColor: "#f5f5f5",
                                    border: "1px solid #d5d5d5",
                                    borderRadius: 3,
                                    lineHeight: "40px",
                                }}
                            />
                            <CartesianGrid
                                stroke="#ccc"
                                strokeDasharray="5 5"
                            />
                            <Bar
                                dataKey="revenue"
                                fill="#8884d8"
                                barSize={30}
                            />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
