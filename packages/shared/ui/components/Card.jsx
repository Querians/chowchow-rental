import * as React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import Link from 'next/link';

export const Card = ({ productName, detail, price, pic, link }) => {
  return (
    <>
      <div class="max-w-xs rounded-lg border border-gray-200 bg-white shadow ring-[#C3A982] hover:ring-2">
        <div class="p-5">
          <div class="flex justify-between">
            <div class="">
              <h5 class="mb-2 text-2xl font-bold text-gray-900">
                {productName}
              </h5>
            </div>
            <div class="">
              <p class="mb-3 text-2xl font-semibold text-red-600">
                {price} ฿/day
              </p>
            </div>
          </div>
          <p class="mb-3 text-lg font-normal text-gray-700">{detail}</p>
          <Image
            src={pic}
            className="w-full rounded-t-lg pb-2"
            alt={productName}
            width={200}
            height={200}
            quality={100}
          />
          <Link href={link}>
            <Button text={'More Detail'} />
          </Link>

          {/* <Button text="More Details"/> */}
        </div>
      </div>
    </>
  );
};
