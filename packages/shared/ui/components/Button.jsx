import * as React from 'react';
import Link from 'next/link';

export const Button = ({ logo, onClick, text, type }) => {
  return (
    <>
      {type == 'normal' ? (
        <button
          className="mb-2 mr-2 h-fit w-full rounded-md border border-2 border-neutral-900 bg-[#C3A982] px-5 py-2 text-sm font-medium text-gray-900 hover:bg-[#89724E] hover:text-white"
          onClick={onClick}
        >
          {logo ? <img src={logo} alt="" className="h-8" /> : <></>}
          {text}
        </button>
      ) : (
        <></>
      )}
      {type == 'submit' ? (
        <button
          className="mb-2 mr-2 h-fit w-full rounded-md border border-2 border-neutral-900 bg-[#A4DAAC] px-5 py-2 text-sm font-medium text-gray-900 hover:bg-[#54825B] hover:text-white"
          onClick={onClick}
        >
          {logo ? <img src={logo} alt="" className="h-8" /> : <></>}
          {text}
        </button>
      ) : (
        <></>
      )}
      {type == 'cancel' ? (
        <button
          className="mb-2 mr-2 h-fit w-full rounded-md border border-2 border-neutral-900 bg-[#C26666] px-5 py-2 text-sm font-medium text-gray-900 hover:bg-[#8B3B3B] hover:text-white"
          onClick={onClick}
        >
          {logo ? <img src={logo} alt="" className="h-8" /> : <></>}
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
