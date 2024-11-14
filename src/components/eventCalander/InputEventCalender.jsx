/* eslint-disable react/prop-types */
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { ActionIcon, Modal, Text, Input, Button } from "rizzui"; // Assuming DateTimePicker exists in RizzUI
import moment from "moment"; 

function InputEventCalender({ openInputBar, setOpenInputBar, setEvents, events, eventInputDetails }) {
    // Local state for form inputs
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [priority, setPriority] = useState("");
console.log(eventInputDetails?.start,"sjfdcashbdchbsw")


    
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleSubmit = () => {
        // Validate form inputs
        if (!title) {
            alert("Please fill in all required fields.");
            return;
        }

        const newEvent = {
            title,
            description,
            location,
            priority,
            start: startDate, // Convert to ISO format for proper event handling
            end: endDate,     // Convert to ISO format for proper event handling
        };

        setEvents([...events, newEvent]);
        // Clear form
        setTitle("");
        setDescription("");
        setLocation("");
        setPriority("");
        setStartDate(moment()); // Reset to current moment
        setEndDate(moment());   // Reset to current moment
        setOpenInputBar(false);
    };

    const handleStartDateChange = (e) => {

        setStartDate(moment(e.target.value)?.format("YYYY-MM-DDTHH:mm")); // Convert string to moment object
    };

    const handleEndDateChange = (e) => {
        setEndDate(moment(e.target.value)?.format("YYYY-MM-DDTHH:mm")); // Convert string to moment object
    };

    return (
        <div>
            <Modal isOpen={openInputBar} onClose={() => setOpenInputBar(false)}>
                <div className="m-auto px-7 pt-6 pb-8">
                    <div className="mb-7 flex items-center justify-between">
                        <Text as="h3">Create a new event</Text>
                        <ActionIcon
                            size="sm"
                            variant="text"
                            onClick={() => setOpenInputBar(false)}
                        >
                            <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
                        </ActionIcon>
                    </div>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
                        <div className="col-span-2">
                            <label>
                                <span>Event Name</span>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter a name of event"
                                    className="mt-1"
                                />
                            </label>
                        </div>
                        <div className="col-span-2">
                            <label>
                                <span>Event Description</span>
                                <Input
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter your event description"
                                    className="mt-1"
                                />
                            </label>
                        </div>
                        <div className="col-span-2">
                            <label>
                                <span>Event Location</span>
                                <Input
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Enter your location"
                                    className="mt-1"
                                />
                            </label>
                        </div>
                        <div className="col-span-1">
                            <label>
                                <span>Start Date</span>
                                <Input
                                   type="datetime-local"
                                   defaultValue={moment(eventInputDetails?.start)?.format('YYYY-MM-DDTHH:mm')}
                                    value={startDate}
                                    onChange={handleStartDateChange} // Ensure moment object
                                    className="mt-1"
                                />
                            </label>
                        </div>
                        <div className="col-span-1">
                            <label>
                                <span>End Date</span>
                                <Input
                                   type="datetime-local"
                                   defaultValue={moment(eventInputDetails?.end)?.format('YYYY-MM-DDTHH:mm')}
                                    value={endDate}
                                    onChange={handleEndDateChange} // Ensure moment object
                                    className="mt-1"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between">
                        <Button
                            variant="outline"
                            onClick={() => setOpenInputBar(false)}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} className="bg-purple-600 text-white">
                            Save
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default InputEventCalender;
