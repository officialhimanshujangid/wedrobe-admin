/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/16/solid";
import { ActionIcon, Modal, Text } from "rizzui";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid"; // For calendar and location icons

function DetailEventCalender({ openWatchDetails, setOpenWatchDetails, eventWatchDetails }) {
  return (
    <div>
      <Modal isOpen={openWatchDetails} onClose={() => setOpenWatchDetails(false)}>
        <div className="m-auto max-w-lg px-7 pt-6 pb-8 bg-white rounded-lg shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <Text as="h3" className="text-2xl font-bold text-gray-900">
              Event Details
            </Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setOpenWatchDetails(false)}
            >
              <XMarkIcon className="h-auto w-6 text-gray-500 hover:text-gray-800 transition duration-200" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <Text as="h4" className="text-xl font-semibold text-gray-900">
            {eventWatchDetails?.title || "N/A"}
          </Text>
          <Text className="text-sm text-gray-500 mb-6">
            {eventWatchDetails?.description || "No description provided"}
          </Text>
          <div className="space-y-4">

            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
              <Text as="span" className="text-sm font-medium text-gray-700">
                Event Start:
              </Text>
              <Text as="span" className="text-sm text-gray-900">
                {new Date(eventWatchDetails?.start).toLocaleString() || "N/A"}
              </Text>
            </div>

            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
              <Text as="span" className="text-sm font-medium text-gray-700">
                Event End:
              </Text>
              <Text as="span" className="text-sm text-gray-900">
                {new Date(eventWatchDetails?.end).toLocaleString() || "N/A"}
              </Text>
            </div>

            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
              <Text as="span" className="text-sm font-medium text-gray-700">
                Address:
              </Text>
              <Text as="span" className="text-sm text-gray-900">
                {eventWatchDetails?.location || "No location provided"}
              </Text>
            </div>
          </div>


          <div className="mt-6 flex justify-end">
            
            <button
              className="px-4 py-2 bg-sidebarTheme-dark text-white font-semibold rounded-md  transition duration-200"
              onClick={() => {
                setOpenWatchDetails(false)
              }}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DetailEventCalender;