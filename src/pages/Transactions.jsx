import { useState, useEffect } from 'react';
import { Avatar, Badge, Button,  Table,  } from 'rizzui';

import { useNavigate, useParams } from 'react-router-dom';
import { bookingItems } from '../constants/bookingList';
import { FaRegEye } from 'react-icons/fa';
import { sidebar_width } from '../constants/appConstants';
// import CreateBooking from '../components/createBooking/CreateBooking'; // Ensure this component exists
// import UpdateBooking from '../components/updateBooking/UpdateBooking'; // Ensure this component exists

function Transactions() {
    const { bookingType } = useParams();
    const [bookingList, setBookingList] = useState([]);
    useEffect(() => {
        // Filter bookingItems based on bookingType
        const data = bookingItems.filter((item) => item.bookingType === bookingType);
        setBookingList(data);
    }, [bookingType]);

    const navigate = useNavigate()
    const handleeyeClick = (ClientId)=>{
        navigate(`/transaction-details/${ClientId}`)
    }

    return (
        <>
          

            <div className="p-4 w-full">
                <div className="text-xl font-bold mb-4">
                    Booking List
                </div>
                <div className={`w-full xl:[width:calc(100vw-${sidebar_width})] overflow-auto  x-scrollbar-custom`} >
                    <Table  variant="minimal" className='w-full'>
                        <Table.Header>
                            <Table.Row>
                                <Table.Head>Avatar</Table.Head>
                                <Table.Head>Client Name</Table.Head>
                                <Table.Head>Client ID</Table.Head>
                                <Table.Head>Total Amount</Table.Head>
                                <Table.Head>Phone Number</Table.Head>
                                <Table.Head>Email</Table.Head>
                                <Table.Head>Status</Table.Head>
                                <Table.Head>Booking Date</Table.Head>
                                <Table.Head>Booking ID</Table.Head>
                                <Table.Head>Notes</Table.Head>
                                <Table.Head>Actions</Table.Head>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {bookingList.map((booking, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>
                                        <Avatar
                                            src={booking.avatar}
                                            name={booking.clientName}
                                            className="ring-2 ring-sidebarTheme-dark ring-offset-background ring-offset-2"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{booking.clientName}</Table.Cell>
                                    <Table.Cell>{booking.clientId}</Table.Cell>
                                    <Table.Cell>{booking.totalAmount}</Table.Cell>
                                    <Table.Cell>{booking.phoneNumber}</Table.Cell>
                                    <Table.Cell>{booking.email}</Table.Cell>
                                    <Table.Cell>
                                        {booking.status === "done" && (
                                            <Badge className='capitalize'  color="secondary">
                                                {booking.status}
                                            </Badge>
                                        )}
                                        {booking.status === "upcoming" && (
                                            <Badge className='capitalize'  color="warning">
                                                {booking.status}
                                            </Badge>
                                        )}
                                        {booking.status === "active" && (
                                            <Badge className='capitalize'  color="success">
                                                {booking.status}
                                            </Badge>
                                        )}

                                    </Table.Cell>
                                    <Table.Cell>{booking.bookingDate}</Table.Cell>
                                    <Table.Cell>{booking.bookingID}</Table.Cell>
                                    <Table.Cell>{booking.notes}</Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center gap-4">
                                            <Button
                                            variant="outline"
                                            color="secondary"
                                            onClick={()=>{handleeyeClick(booking.clientId)}}
                                            >
                                                <FaRegEye  size={15} />
                                            </Button>

                                            
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                    </div>
                </div>
   
        </>
    );
}
export default Transactions;
