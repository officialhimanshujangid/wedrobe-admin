import {  Table,  } from "rizzui";
import { todayEvents } from "../../constants/dashboardConstants";

function TodayEventsTable() {
   
    return (
      <div className="bg-white border shadow overflow-auto h-72 hideScrollbar  text-center rounded-lg py-4 px-1 my-2">
        <h2 className=" text-lg font-bold mb-4">Today&apos;s Appointments</h2>
        <div className="overflow-x-auto x-scrollbar-custom">
    <Table  variant="minimal" className="min-w-full">
      <Table.Header>
        <Table.Row>
         
          <Table.Head className="text-nowrap">Booking ID</Table.Head>
          <Table.Head className="text-nowrap">Customer ID</Table.Head>
          <Table.Head className="text-nowrap">Vendor</Table.Head>
          <Table.Head className="text-nowrap">Event Type</Table.Head>
          <Table.Head className="text-nowrap">Time</Table.Head>
          <Table.Head className="text-nowrap">Location</Table.Head>
          
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {todayEvents.map((event,index) => (
          <Table.Row className={`transition-transform duration-200 ease-in-out  hover:bg-gray-200 hover:shadow-lg cursor-pointer`} key={event.id}>
            {/* <Table.Cell>
              <Avatar
                src={event.avatar}
                className="ring-2 ring-orange ring-offset-background ring-offset-2"
              />
            </Table.Cell> */}
            <Table.Cell>
              <span className="text-sm text-nowrap  font-bold ">{event.bookingId}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="text-sm text-nowrap  font-bold ">{event.customerId}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="text-sm text-nowrap  font-bold ">{event.vendor}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="text-sm text-nowrap  font-bold ">{event.eventType}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="text-sm text-nowrap  font-bold ">{event.time}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="text-sm text-nowrap  font-bold ">{event.location}</span>
            </Table.Cell>
           
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
      </div>
    )
}

export default TodayEventsTable
