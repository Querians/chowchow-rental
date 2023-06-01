import { useState } from 'react';
import { Button, TextInput } from 'ui';
import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import { AUTH_TOKEN } from '../constants';
import { useRouter } from 'next/router';

export const StaffLoginInfo = () => {

  const router = useRouter();

  const LOG_IN = gql`
    mutation Loginstaff($staffId: String!, $password: String!) {
      loginstaff(staffId: $staffId, password: $password) {
        token
      }
    }
  `

  const [data, setData] = useState({
    'StaffID': '',
    'Password': '',
  });

  const [login] = useMutation(LOG_IN, {
    variables: {
      "staffId": data.StaffID,
      "password": data.Password
    },
    onCompleted: ({ loginstaff }) => {
      localStorage.setItem(AUTH_TOKEN, loginstaff.token);
      router.push('/products');
    }
  })

  return (
    <>
      <div className='grid gap-16 lg:grid-cols-8 mt-16'>
        <div className=' 2xl:max-w-screen-lg border-2 border-black lg:col-start-2 lg:col-end-8 rounded-md bg-[#E3C291] px-4 py-10 md:grid md:grid-cols-10 mt-16 md:mt-8'>
          <div className='flex flex-col justify-center items-center mb-4 md:mb-0 md:col-start-1 md:col-end-5'>
            <div className='mb-4 tracking-wide flex flex-col justify-center font-bold text-2xl xl:text-3xl text-center'>
              <div>CHOW CHOW</div>
              <div>-Online Rental-</div>
            </div>
            <div>
              <svg width="150" height="150" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4672 8.16974C21.4672 4.32061 17.3777 1.26623 12.3908 2.15513C5.06996 3.45663 1.72464 18.7867 2.01768 21.5393C2.22514 23.486 6.49108 26.3077 11.4987 24.3084C14.7688 23.0014 16.5815 20.2931 17.5773 17.3855M32.5328 8.16974C32.5328 4.32061 36.6223 1.26623 41.6092 2.15513C48.93 3.45663 52.2754 18.7867 51.9823 21.5393C51.7749 23.486 47.5089 26.3077 42.5013 24.3084C39.2312 23.0014 37.6908 20.2931 36.695 17.3855M16.2807 32.6159V34.0005M37.0269 32.6159V34.0005M24.7088 38.8465H28.5988L26.6538 40.9234L24.7088 38.8465Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.99666 24.9924C6.27088 27.9851 5.90488 31.0642 5.90748 34.1556C5.90748 45.7085 15.1966 52.0001 26.6537 52.0001C38.1108 52.0001 47.3999 45.7085 47.3999 34.1556C47.3999 31.2175 46.9798 28.0634 46.1214 24.9924M22.1518 8.15039C23.6345 7.83932 25.1426 7.68627 26.6537 7.69348C28.6764 7.69348 30.5436 7.99255 32.2578 8.54084" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          <div className='md:col-start-5 mx-4 md:col-end-11 md:mr-10'>
            <TextInput label={'Staff ID'} onChange={e => setData({ ...data, ['StaffID']: e.target.value })} />
            <div className='mb-2.5'>
              <label
                htmlFor="password"
                className="mb-2.5 block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                name='password'
                type="password"
                value={data.Password}
                autoComplete="true"
                onChange={e => setData({ ...data, ['Password']: e.target.value })}
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
                onCut={(e) => e.preventDefault()}
                id='password'
                className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
                required
              />
            </div>

            <Button
              text={"SUBMIT"}
              type={'submit'}
              onClick={(e)=>{
                e.preventDefault();
                const ret = login().catch((err) => {
                  alert(err);
                });

              }}
            />

          </div>
        </div>
      </div>
    </>
  );
};
