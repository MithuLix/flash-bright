// import React from 'react';


// export default function BookingListCards(props) {
//     const { title, status } = props.list;

//     return (
//         <div>
//             <div>
//                 <section className="d-flex justify-content-between mt-2">
//                     <h5>{title}</h5>
//                     <button type="submit" className="shadow bg-gray-700 hover:bg-gray-600 border focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded">
//                         {status}
//                     </button>
//                 </section>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';


export default function BookingListCards (props) {
    const {title, status} = props.list;
    //css
    const titleBtn = { textDecoration: 'inherit', color:"white", backgroundColor:"#4f4f4f",border:"none", fontWeight:"500"};
    const cards  = { lineHeight:"1.2rem", border:"0", background: "rgba(255,255,255,0.8)",
                     boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.2)"}

    return (
        <Container>
            <Card style={cards}>
                <Card.Body  className="d-flex justify-content-between mt-2">
                    <h5>{title}</h5>
                    <Button style={titleBtn} className="btn-sm">{status}</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}