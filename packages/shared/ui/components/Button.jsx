import * as React from 'react';

export const Button = ({ type }) => {
  return (
    <>
      <button className='m-2 p-2 flex justify-center bg-blue'>
        {type}
      </button>
    </>
  );
};
