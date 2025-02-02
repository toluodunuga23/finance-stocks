import React, { useEffect } from 'react'
import { mockStocks } from '../constants/mock';
import { useState } from 'react';
import useHttpClient from "../components/api/useHttpClient"
import { Card } from '@/components/ui/card';
import Sidebar from './Sidebar/Sidebar';


const Dashboard = () => {
    const [appleStock, setAppleStock] = useState();
    const basePath = "https://finnhub.io/api/v1";
    const alphaVantageBasePath = "https://www.alphavantage.co";

    const { loading, error, sendRequest, clearError } = useHttpClient();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const stockLoad = {
    //                 appleStock: async () => {
    //                     const apple = await sendRequest(
    //                         `${basePath}/quote?symbol=AAPL&token=${import.meta.env.VITE_FINNHUB_API_KEY}`
    //                     );
    //                     setAppleStock(apple?.c);
    //                 },

    //                 amazonStock: async () => {
    //                     const amazonStock = await sendRequest(`${basePath}/quote?symbol=AMZN&token=${import.meta.env.VITE_FINNHUB_API_KEY}`);
    //                     setAmazonStock(amazonStock.c);
    //                 },
    //                 teslaStock: async () => {
    //                     const teslaStock = await sendRequest(`${basePath}/quote?symbol=TSLA&token=${import.meta.env.VITE_FINNHUB_API_KEY}`);
    //                     setTeslaStock(teslaStock.c);
    //                 },
    //                 msftStock: async () => {
    //                     const msftStock = await sendRequest(`${basePath}/quote?symbol=MSFT&token=${import.meta.env.VITE_FINNHUB_API_KEY}`);
    //                     setMsftStock(msftStock.c);
    //                 },
    //             };

    //             await stockLoad.appleStock();
    //             await stockLoad.amazonStock();
    //             await stockLoad.teslaStock();
    //             await stockLoad.msftStock();
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };

    //     fetchData();
    // }, [sendRequest]);

    return (
        <>
            <div className="md:w-64 hidden md:block fixed">
            <Sidebar />
            </div>
            <div className='flex flex-col py-12 px-14 h-screen '>
                <div className="grid grid-cols-4 gap-3 mt-10 h-40 ml-64 ">
                    {mockStocks.map((stock, index) => (
                        <>
                            <Card className="h-10 flex items-center justify-start font-bold p-10 ">{stock.logo} {stock.stock} {stock.price}</Card>
                        </>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Dashboard
