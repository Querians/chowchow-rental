import * as React from 'react';

export const Button = ({ type }) => {
  return (
    <>
      <button className="bg-blue m-2 flex justify-center p-2">{type}</button>
    </>
  );
};
