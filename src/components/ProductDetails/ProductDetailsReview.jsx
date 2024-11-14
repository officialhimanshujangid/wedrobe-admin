/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { PiCaretDownBold, PiStar, PiStarFill } from 'react-icons/pi';
import { Collapse, Text, Title } from 'rizzui';

import { Textarea, Button } from 'rizzui';

import { useForm, Controller } from 'react-hook-form';


const reviewData = [
  {
    id: 1,
    rating: 4,
    description:
      'Satisfactory in every way. Service and quality were top notch',
    name: 'Ronald Richards',
    date: '7 June, 2023',
    images: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/review/1.webp',
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/review/2.webp',
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/review/3.webp',
    ],
  },
  {
    id: 2,
    rating: 5,
    description:
      'I recently purchased the Nike MaxComfort sneakers, and I must say, I am thoroughly impressed! These shoes are the perfect blend of style and comfort.',
    name: 'Floyd Miles',
    date: '12 June, 2023',
    images: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/review/4.webp',
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/review/5.webp',
    ],
  },
  {
    id: 3,
    rating: 3,
    description:
      'The first thing that caught my eye was the sleek design. The modern and trendy look makes them versatile enough to wear with any outfit.',
    name: 'Marvin McKinney',
    date: '15 June, 2023',
    images: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/review/2.webp',
    ],
  },
];

function AverageRatings({ totalReviews, ratings }) {
  if (!totalReviews) return null;

  return (
    <div className="w-full pb-7 lg:flex lg:flex-wrap">
      <div className="flex shrink-0 flex-col justify-center border-gray-100 pb-6 lg:w-44 lg:border-e lg:pb-0">
        <div className="pb-3 text-5xl font-bold text-gray-900">{ratings}</div>
        <p className="text-gray-500">
          <span>{totalReviews}</span> Verified Buyers
        </p>
      </div>
      <div className="space-y-3 py-0.5 lg:ps-10 5xl:w-auto">
        {[5, 4, 3, 2, 1].map((label) => (
            <> 
           <div className="flex items-center text-sm">
           <div className="flex w-11 shrink-0 items-center space-x-1 font-semibold rtl:space-x-reverse">
             <span className="text-sm font-semibold text-gray-900">{label}</span>{' '}
             <PiStarFill className="w-4 fill-orange text-orange" />
           </div>
           <div className="relative h-1 w-52 overflow-hidden rounded-md bg-primary-lighter">
             <div
               className={`absolute h-full rounded-md `}
              
             />
           </div>
           <div className="shrink-0 ps-5">{ 5 }</div>
         </div>
         </>
        ))}
      </div>
    </div>
  );
}

export default function ProductDetailsReview() {
  const [isOpen, setIsOpen] = useState(true);
  const [reset, setReset] = useState({});
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { rating: '', review: '' },
  });

  const onSubmit = (data) => {
    console.log(data);
    setReset({ rating: '', review: '' }); // Reset form values
  };
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <Collapse
        className="border-t last-of-type:border-t-0"
        open={isOpen}
        onToggle={toggle}
        header={() => (
          <div
            role="button"
            onClick={toggle}
            className="flex w-full cursor-pointer items-center justify-between py-6 font-lexend text-lg font-semibold text-gray-900"
          >
            Ratings & Reviews
            <div className="flex shrink-0 items-center justify-center">
              <PiCaretDownBold
                className={`h-[18px] w-[18px] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        )}
      >
        <AverageRatings
          totalReviews={reviewData?.length}
          ratings={reviewData?.reduce((acc, item) => acc + item.rating, 0) / reviewData?.length}
        />

        {reviewData?.map((item) => (
         <>
          <div className="border-t border-gray-200 py-6 md:flex md:items-start">
      <div className="shrink-0 md:w-40 md:pe-4">
        <Title as="h6" className="pb-1.5 text-base font-semibold text-gray-900 md:font-medium">
          {item.name}
        </Title>
        <Text className="text-xs text-gray-500 md:text-sm">
          {item.date}
        </Text>
      </div>
      <div className="w-full pt-4 md:pt-1">
        <div className="-mx-0.5 mb-2.5 flex">
          {[...new Array(5)].map((_, index) => (
            index < 3 ? (
              <PiStarFill className="w-4 fill-orange text-orange" key={index} />
            ) : (
              <PiStar className="w-4 fill-gray-300 text-gray-500" key={index} />
            )
          ))}
        </div>
        <Text className="leading-[1.85]">{item.message}</Text>
        {item.attachment.length > 0 && (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-3 pt-2.5">
            {item.attachment.map((item, index) => (
              <div
                key={`review-key-${index}`}
                className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded bg-gray-100"
              >
                <img
               
                  src={item}
                  alt="Review attachment"
                  sizes="(max-width: 768px) 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div></>
        ))}
      </Collapse>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* <Controller
        name="rating"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Rate size="sm" value={value} onChange={onChange} />
        )}
      /> */}
      <Textarea
        placeholder="Review...."
        {...register('review', { required: 'Review is required' })}
        error={errors.review?.message}
        textareaClassName="h-24"
        className="col-span-2"
      />
      <Button size="lg" className="px-8" type="submit">
        Submit
      </Button>
    </form>
    </div>
  );
}
