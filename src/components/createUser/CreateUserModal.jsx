/* eslint-disable react/prop-types */

import {
  Modal,
  Button,
  Text,
  ActionIcon,
  Input,
  Password,
  Checkbox,
} from "rizzui";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function CreateUser({ setModalState}) {
  
  return (
    <>
      {/* <Button >Open Modal</Button> */}
      <Modal size="xxl" isOpen={true} onClose={() => setModalState(false)}>
        <div className="m-auto px-7 pt-6 pb-8">
          <div className="mb-7 flex items-center justify-between">
            <Text className="font-bold text-center text-xl" as="h3">Create Vendor</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
            <Input label="First Name *" inputClassName="border-2" size="lg" />
            <Input label="Last Name *" inputClassName="border-2" size="lg" />
            <Input
              label="Email *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Confirm Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Checkbox
              size="lg"
              inputClassName="border-2"
              className="col-span-2"
              label={
                <Text className="text-sm">
                  I agree to wedrobe&lsquo;s{" "}
                  <a className="underline">Terms of Service</a> and{" "}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2 bg-sidebarTheme-dark"
              
              onClick={() => setModalState(false)}
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}