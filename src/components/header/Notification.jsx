import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { Drawer,  Badge, ActionIcon, Text, Empty, EmptyProductBoxIcon } from "rizzui";

export default function Notification({drawerState ,setDrawerState}) {
  return (
    <>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <div className="flex min-h-full flex-col py-4 px-5">
          <header className="flex items-center justify-between">
            <Text className="font-bold" as="h3">Notifications</Text>
            <ActionIcon
              size="sm"
              variant="outline"
              onClick={() => setDrawerState(false)}
            >
              <XMarkIcon
                className="h-auto w-5"
                strokeWidth={1.5}
              />
            </ActionIcon>
          </header>
          {/* End of drawer header */}
          <div className="flex flex-grow flex-col items-center justify-center">
            <Empty
              image={<EmptyProductBoxIcon />}
              text="No Notification Available"
              textClassName="mt-1 text-gray-500"
            />
          </div>
          
        </div>
      </Drawer>
    </>
  );
}