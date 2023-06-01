import * as React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import Link from 'next/link';

export const Card = ({ productName, detail, price, pic, goto }) => {
  const query = () => {

  };

  return (
    <>
      <div class="max-w-xs rounded-lg border border-gray-200 bg-white shadow ring-[#C3A982] hover:ring-2">
        <div class="p-5">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 truncate">
            {productName}
          </h5>
          {/* <p class="mb-3 text-md font-normal text-gray-700 truncate">{detail}</p> */}
          <div className='h-44 overflow-hidden object-center round-sm'>
            <Image
              src={pic}
              className="h-full rounded-t-lg pb-2 object-contain object-center round-sm"
              alt={productName}
              width={500}
              height={500}
              quality={100}
            />
          </div>
          <p class="mb-1 w-full flex justify-center text-xl font-semibold text-red-600">
            {price} THB/day
          </p>
          <Link href={`/product/${goto}`}>
            <div className="px-6">
              <Button type="normal" text={'More Detail'} />
            </div>
          </Link>

          {/* <Button text="More Details"/> */}
        </div>
      </div>
    </>
  );
};
