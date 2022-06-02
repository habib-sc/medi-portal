import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.css';

const Chart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect( () => {
        fetch('/chartdata.json')
        .then(res => res.json())
        .then(data => setChartData(data));
    } , []);


    return (
        <div className='charts'>
            <div className='chart-item'>
                <h2 className='chart-heading'>Patients Graph</h2>
                <div className='chart-container'>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FC5C62" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#FDAD64" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend></Legend>
                            <Area type="monotone" dataKey="patients" stroke="#FDAD64" fillOpacity={1} fill="url(#colorMonth)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='chart-item'>
                <h2 className='chart-heading'>Fees Graph</h2>
                <div className='chart-container'>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FC5C62" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#FDAD64" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend></Legend>
                            <Area type="monotone" dataKey="fees" stroke="#FDAD64" fillOpacity={1} fill="url(#colorMonth)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='chart-item'>
                <h2 className='chart-heading'>Patients Vs Fees Graph</h2>
                <div className='chart-container'>
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="patients" stroke="#FDAD64" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="fees" stroke="#FC5C62" />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;