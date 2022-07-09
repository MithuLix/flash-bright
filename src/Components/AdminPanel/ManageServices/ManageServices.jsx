import React, { useEffect, useState } from 'react';
import AdminDrawer from '../AdminDrawer/AdminDrawer';
import ManageDestinationCard from './ManageServiceCard';


export default function ManageServices() {
    const [manageServices, setManageService] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch("https://flash-bright-backend-production.up.railway.app/getServices")
            .then(res => res.json())
            .then(data => { setManageService(data); setSpinner(false) })
    }, []);

    return (
        <div>
            <div className="md:container">
                <div className="flex flex-wrap overflow-hidden">

                    <div className="px-2 w-1/2 overflow-hidden xs:w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
                        <AdminDrawer />
                    </div>

                    <div class="px-4 py-4 w-1/2 overflow-hidden xs:w-full sm:w-full md:ml-12 md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <p className="text-2xl font-bold my-4 text-white" >Manage Service</p>
                        <div>
                            <table className="text-dark text-lg bg-gray-300 font-medium rounded w-full justify-center text-center ">
                                <thead className="bg-gray-400"><tr><th>Title</th> <th>Price</th><th>Action</th></tr></thead>
                                <tbody>{manageServices.map((destination) => <ManageDestinationCard destination={destination} key={destination._id}></ManageDestinationCard>)}</tbody>
                            </table>
                            <div class=" flex justify-center items-center py-6">
                                {spinner && <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};