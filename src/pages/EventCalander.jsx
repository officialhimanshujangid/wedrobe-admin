/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Required for basic calendar styling
import InputEventCalender from '../components/eventCalander/InputEventCalender';
import DetailEventCalender from '../components/eventCalander/DetailEventCalender';
import { meetingConstant } from '../constants/meetingConstant';
import { Button } from 'rizzui';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const localizer = momentLocalizer(moment);

const EventCalander = () => {
  // Example event list
  const [events, setEvents] = useState(meetingConstant);
  const [openInputBar,setOpenInputBar] = useState(false)
  const [openWatchDetails , setOpenWatchDetails] = useState(false)
  const [eventInputDetails,setEventInputDetails] = useState(false)
  const [eventWatchDetails, setEventWatchDetails] = useState()

  // Function to add new event
  const handleAddEvent = (newEvent) => {
    setEventInputDetails(newEvent)
    setOpenInputBar(true)
  };
  const handleWatchEvent = (newEvent) => {
    setEventWatchDetails(newEvent)
    setOpenWatchDetails(true)
  };
  const breadcrumpData = [
    {
      name :"App",
      link:"/"
    },
    {
      name :"Event Calander",
      link:"/event-calander"
    },
   
  ]

  return (
    <> 
    <Breadcrumb breadcrumpData={breadcrumpData} />
    <DetailEventCalender openWatchDetails={openWatchDetails} setOpenWatchDetails={setOpenWatchDetails} eventWatchDetails={eventWatchDetails}  />
    <InputEventCalender setEvents={setEvents} events={events} setOpenInputBar={setOpenInputBar} openInputBar={openInputBar} eventInputDetails={eventInputDetails}  />
    <div className="flex justify-center items-center mt-8">
      <div className="w-full ">
        <div className="bg-white rounded-lg shadow-md p-4">
        <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={["month", "week", "day"]}
        style={{ height: 800, padding: "1rem" }}
        selectable
        onSelectSlot={(slotInfo) => handleAddEvent(slotInfo)}
        onSelectEvent={(event) => handleWatchEvent(event)}
        className="text-gray-800 bg-white rounded-lg shadow-md"
        components={{
          toolbar: CustomToolbar,  // Custom Toolbar to control view and navigation
        }}
      />
        </div>
      </div>
    </div>
    </>
  );
};

export default EventCalander;


function CustomToolbar({ label, onNavigate, onView }) {
  return (
    <div className="rbc-toolbar flex justify-between items-center mb-4">
      <div>
        <Button style={{backgroundColor:"#D73061" , color:'white' , fontWeight:'bold'}} onClick={() => onNavigate("PREV")}>Prev</Button>
        <span className="mx-4 font-bold text-lg">{label}</span>
        <Button style={{backgroundColor:"#D73061" , color:'white' , fontWeight:'bold'}} onClick={() => onNavigate("NEXT")}>Next</Button>
      </div>
      <div className="space-x-4">
        <Button style={{backgroundColor:"#D73061" , color:'white' , fontWeight:'bold'}} onClick={() => onView("month")}>Month</Button>
        <Button style={{backgroundColor:"#D73061" , color:'white' , fontWeight:'bold'}} onClick={() => onView("week")}>Week</Button>
        <Button style={{backgroundColor:"#D73061" , color:'white' , fontWeight:'bold'}} onClick={() => onView("day")}>Day</Button>
      </div>
    </div>
  );
}
