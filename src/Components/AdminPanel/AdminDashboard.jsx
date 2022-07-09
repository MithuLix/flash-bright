// import { useContext, useEffect, useState } from 'react'
// import { UserContext } from '../../App';
// import AddService from './AddService/AddService';
// import ManageServices from './ManageServices/ManageServices';
// import OrderList from './OrderList/OrderList';


// export default function AdminDrawer() {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         fetch('https://flash-bright-backend-production.up.railway.app/isAdmin', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/' },
//             body: JSON.stringify({ email: loggedInUser.email }),
//         })
//             .then(response => response.json())
//             .then(data => setIsAdmin(data))
//     }, [])


//     return (
//         <div>
//             {isAdmin &&
//                 <div>
//                     <AddService />

//                     <ManageServices />

//                     <OrderList />
//                 </div>
//             }
//         </div>
//     );
// };

// import * as React from "react";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { Title } from 'react-admin';

// export default ({ permissions }) => (
//     <Card>
//         <Title title="Dashboard" />
//         <CardContent>Lorem ipsum sic dolor amet...</CardContent>
//         {permissions === 'admin'
//             ? <CardContent>Sensitive data</CardContent>
//             : null
//         }
//     </Card>
// );