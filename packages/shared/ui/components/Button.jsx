import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Button = ({ logo, onClick, text, type }) => {
  return (
    <>
      {type == 'normal' ? (
        <button
          className="h-fit w-full rounded-md border border-2 border-neutral-900 bg-[#C3A982] px-5 py-2 text-base font-bold text-gray-900 hover:bg-[#89724E] hover:text-white"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
      {type == 'submit' ? (
        <button
          className="h-fit w-full rounded-md border border-2 border-neutral-900 bg-[#A4DAAC] px-5 py-2 text-base font-bold text-gray-900 hover:bg-[#54825B] hover:text-white"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
      {type == 'cancel' ? (
        <button
          className="h-fit w-full rounded-md border border-2 border-neutral-900 bg-[#C26666] px-5 py-2 text-base font-bold text-gray-900 hover:bg-[#8B3B3B] hover:text-white"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
      {type == 'white' ? (
        <button
          className="h-fit w-full rounded-md border border-2 border-neutral-900 bg-[#FFFFFF] px-5 py-2 text-base font-bold text-gray-900 hover:bg-[#CDCDCD]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
      {type == 'count' ? (
        <button
          className="h-8 w-max flex items-center px-2 rounded-md border border-2 border-neutral-900 bg-[#C3A982] text-base font-bold text-gray-900 hover:bg-[#89724E] hover:text-white"
          onClick={onClick}
        >
          {logo ? <Image
            src={logo}
            className="w-full"
            alt=""
            width={30}
            height={30}
            quality={100}
          /> : <></>}
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
