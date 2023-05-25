import * as React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import Link from 'next/link';

export const Card = ({ productName, detail, price, pic}) => {
  const query = () => {
    
  };

  return (
    <>
      <div class="max-w-xs rounded-lg border border-gray-200 bg-white shadow ring-[#C3A982] hover:ring-2">
        <div class="p-5">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 truncate">
                {productName}
              </h5>
              <p class="mb-3 text-md font-normal text-gray-700 truncate">{detail}</p>                   
          <Image
            src={pic}
            className="w-full rounded-t-lg pb-2"
            alt={productName}
            width={200}
            height={200}
            quality={100}
          />
          <p class="mb-1 w-full flex justify-center text-xl font-semibold text-red-600">
                {price} ฿/day
              </p>
          <Link href="/productinfo">
            <div className="px-6">
              <Button type="normal" text={'More Detail'} onClick={query}/>
            </div>
          </Link>

          {/* <Button text="More Details"/> */}
        </div>
      </div>
    </>
  );
};
