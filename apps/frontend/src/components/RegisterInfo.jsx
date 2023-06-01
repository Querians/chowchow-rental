import { TextInput, PhoneInput, DateInput, Button } from 'ui';
import { EmailInput } from './EmailInput';
import { PasswordInput } from './PasswordInput';
import { useState, useEffect, createContext } from 'react';
import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import { AUTH_TOKEN } from '../constants';
import { useRouter } from 'next/router';

export const RegisterIsValidContext = createContext(null);

export const RegisterInfo = () => {

  const router = useRouter();

  const SIGN_UP = gql`
    mutation Signup(
      $firstName: String!,
      $lastName: String!,
      $dob: String!,
      $tel: String!,
      $email: String!,
      $password: String!
    ) {
        signup(
          firstName: $firstName,
          lastName: $lastName,
          dob: $dob,
          tel: $tel,
          email: $email,
          password: $password
        ) {
            token
          }
      }
    `;

  const [data, setData] = useState({
    'firstName': '',
    'lastName': '',
    'dob': '',
    'tel': '',
    'email': '',
    'password': '',
    'confirmPassword': ' ',
  });
  const [isMatch, setMatch] = useState(false);
  const [isCorrect, setIsCorrect] = useState({ 'PasswordFormat': false, 'EmailFormat': false });

  const [signup] = useMutation(SIGN_UP, {
    variables: {
      "firstName": data.firstName,
      "lastName": data.lastName,
      "dob": data.dob,
      "tel": data.tel,
      "email": data.email,
      "password": data.password
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      router.push('/profile');
    }
  })

  useEffect(() => {
    if (data['password'] == data['confirmPassword']) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [data, data.confirmPassword])

  // const CUSTOMER_PROFILE_PATH = Object.values(isCorrect).every(x=>x) && isMatch ? 'CUSTOMER_PROFILE_PATH' : false
  const CUSTOMER_PROFILE_PATH = null
  console.log(data)
  console.log(isCorrect)
  return (
    <>
      <RegisterIsValidContext.Provider value={{ isCorrect, setIsCorrect }}>
        <h1 className="text-4xl font-bold text-center mb-4">REGISTER</h1>
        <form onSubmit={e => {
          e.preventDefault();
          if (!isCorrect['EmailFormat']) {
            alert('your Email is wrong format');
          } else if (!isCorrect['PasswordFormat']) {
            alert('your Password is wrong format');
          } else if (!isMatch) {
            alert('your Password is not match Confirm Password');
          } else {
            console.log("success")
            signup();
          }
        }}>
          <div className='grid grid-cols-2 gap-x-4'>
            <TextInput label={'Firstname'} placeholder={'somchai'} onChange={e => setData({ ...data, ['firstName']: e.target.value })} />
            <TextInput label={'Lastname'} placeholder={'suksamorn'} onChange={e => setData({ ...data, ['lastName']: e.target.value })} />
            <DateInput label={'Date of Birth'} onChange={e => setData({ ...data, ['dob']: e.target.value })} />
            <PhoneInput label={'Tel'} onChange={e => setData({ ...data, ['tel']: e.target.value })} />
            <div className='col-span-2'>
              <EmailInput placeholder={'my_email@hotmail.com'} onChange={e => setData({ ...data, ['email']: e.target.value })} />
            </div>
            <div className='col-span-2'>
              <PasswordInput type={'sign_up'} placeholder={'••••••••'} onChange={e => setData({ ...data, ['password']: e.target.value })} />
            </div>
            <div className='col-span-2 mt-2.5'>
              <PasswordInput label={'Confirm Password'} type={'confirmPassword'} placeholder={'••••••••'} onChange={e => setData({ ...data, ['confirmPassword']: e.target.value })} />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-4'>
            {CUSTOMER_PROFILE_PATH
              ?
              <Link href='CUSTOMER_PROFILE_PATH' className='col-start-2'>
                <Button text={'CONFIRM'} type={'submit'} />
              </Link>
              :
              <div className='col-start-2'>
                <Button text={'CONFIRM'} type={'submit'} />
              </div>
            }
          </div>
        </form>
      </RegisterIsValidContext.Provider>
    </>
  );
};
