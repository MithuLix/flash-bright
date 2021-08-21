import React, { useEffect, useState } from 'react';
import AdminDrawer from '../AdminDrawer/AdminDrawer';
import OrderListCard from './OrderListCard';


export default function OrderList() {
    const [orderLists, setOrderLists] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => { setOrderLists(data); setSpinner(false) })
    }, [toggle]);


    return (
        <div className="md:container">
            <div className="flex flex-wrap overflow-hidden">

                <div className="px-2 w-1/2 overflow-hidden xs:w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
                    <AdminDrawer />
                </div>

                <div class="px-4 py-4 w-1/2 overflow-hidden xs:w-full sm:w-full md:ml-12 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <p className="text-2xl font-bold my-4" >Order List</p>
                    <div>
                        <table>
                            <thead><tr><th>Name</th> <th>Email ID</th><th>Destination</th><th>Status</th></tr> </thead>
                            <tbody>
                                {orderLists.map(orderList => <OrderListCard toggle={toggle} setToggle={setToggle} orderList={orderList} key={orderList._id}> </OrderListCard>)}
                            </tbody>
                        </table>
                        <div class=" flex justify-center items-center">
                            {spinner && <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-700"></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

