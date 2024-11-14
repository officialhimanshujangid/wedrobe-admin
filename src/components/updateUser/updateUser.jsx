import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Modal,
  Button,
  Text,
  ActionIcon,
  Input,
  Password,
  Checkbox,
} from 'rizzui';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function UpdateUser({ setModalState2 }) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobile: '',
      registrationNo: '',
      userType: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data); // handle form data
    setModalState2(false);
  };

  return (
    <Modal size="xxl" isOpen={true} onClose={() => setModalState2(false)}>
      <div className="m-auto px-7 pt-6 pb-8">
        <div className="mb-7 flex items-center justify-between">
          <Text className="font-bold text-center text-xl" as="h3">Update Vendor</Text>
          <ActionIcon
            size="sm"
            variant="text"
           
          >
            <XMarkIcon  onClick={() => setModalState2(false)} className="h-auto w-6" strokeWidth={1.8} />
          </ActionIcon>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First Name is required' }}
            render={({ field }) => <Input label="First Name *" inputClassName="border-2" size="lg" {...field} />}
          />
          {errors.firstName && <Text className="text-red-500 col-span-2">{errors.firstName.message}</Text>}

          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => <Input label="Last Name *" inputClassName="border-2" size="lg" {...field} />}
          />
          {errors.lastName && <Text className="text-red-500 col-span-2">{errors.lastName.message}</Text>}

          <Controller
            name="email"
            control={control}
            rules={{ required: 'Email is required' }}
            render={({ field }) => <Input label="Email *" inputClassName="border-2" size="lg" {...field} />}
          />
          {errors.email && <Text className="text-red-500 col-span-2">{errors.email.message}</Text>}

          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => <Password label="Password *" inputClassName="border-2" size="lg" {...field} />}
          />
          {errors.password && <Text className="text-red-500 col-span-2">{errors.password.message}</Text>}

          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: 'Confirm Password is required' }}
            render={({ field }) => <Password label="Confirm Password *" inputClassName="border-2" size="lg" {...field} />}
          />
          {errors.confirmPassword && <Text className="text-red-500 col-span-2">{errors.confirmPassword.message}</Text>}

          <Controller
            name="mobile"
            control={control}
            render={({ field }) => <Input label="Mobile" inputClassName="border-2" size="lg" {...field} />}
          />

          <Controller
            name="registrationNo"
            control={control}
            render={({ field }) => <Input label="Registration No" inputClassName="border-2" size="lg" {...field} />}
          />

          <Controller
            name="userType"
            control={control}
            render={({ field }) => (
              <Input
                label="User Type"
                inputClassName="border-2"
                size="lg"
                {...field}
              />
            )}
          />

          <Controller
            name="agreeToTerms"
            control={control}
            render={({ field }) => (
              <Checkbox
                size="lg"
                inputClassName="border-2"
                className="col-span-2"
                {...field}
                label={
                  <Text className="text-sm">
                    I agree to wedrobe&lsquo;s{" "}
                    <a className="underline">Terms of Service</a> and{" "}
                    <a className="underline">Privacy Policy</a>
                  </Text>
                }
              />
            )}
          />
          {errors.agreeToTerms && <Text className="text-red-500 col-span-2">{errors.agreeToTerms.message}</Text>}

          <Button
            type="submit"
            size="lg"
            className="col-span-2 mt-2 bg-sidebarTheme-dark"
          >
            Update Account
          </Button>
        </form>
      </div>
    </Modal>
  );
}
