import { TextInput, PhoneInput, DateInput, EmailInput, PasswordInput, Button } from 'ui';
import { useState, useEffect, createContext } from 'react';
import Link from 'next/link';

export const RegisterIsValidContext = createContext(null);

export const RegisterInfo = () => {
  const [data, setData] = useState({
    'Firstname':'',
    'Lastname':'',
    'DOB':'',
    'Tel':'',
    'Email':'',
    'Password':'',
    'ConfirmPassword':' ',
  });
  const [isMatch, setMatch] = useState(false);
  const [isCorrect, setIsCorrect] = useState({'PasswordFormat':false, 'EmailFormat': false});

  useEffect(()=>{
    if(data['Password'] == data['ConfirmPassword']){
      setMatch(true);
    }else{
      setMatch(false);
    }
  },[data['ConfirmPassword']])
  const CUSTOMER_PROFILE_PATH = Object.values(isCorrect).every(x=>x) && isMatch ? 'CUSTOMER_PROFILE_PATH' : false
  console.log(data)
  console.log(isCorrect)
  return (
    <>
      <RegisterIsValidContext.Provider value={ { isCorrect, setIsCorrect} }>
        <h1 className="text-4xl font-bold text-center mb-4">REGISTER</h1>
          <form onSubmit={e => {
            e.preventDefault();
            if(!isCorrect['EmailFormat']){
              alert('your Email is wrong format');
            }else if(!isCorrect['PasswordFormat']){
              alert('your Password is wrong format');
            }else if(!isMatch){
              alert('your Password is not match ConfirmPassword');
            }else{
              // pass
            }
          }}>
            <div className='grid grid-cols-2 gap-x-4'>
              <TextInput label={'Firstname'} placeholder={'somchai'} onChange={e => setData({ ...data, ['Firstname']: e.target.value })}/>
              <TextInput label={'Lastname'} placeholder={'suksamorn'} onChange={e => setData({ ...data, ['Lastname']: e.target.value })}/>
              <DateInput label={'Date of Birth'} onChange={e => setData({ ...data, ['DOB']: e.target.value })} />
              <PhoneInput label={'Tel'} onChange={e => setData({ ...data, ['Tel']: e.target.value })} />
              <div className='col-span-2'>
                <EmailInput placeholder={'my_email@hotmail.com'} onChange={e => setData({ ...data, ['Email']: e.target.value })} />
              </div>
              <div className='col-span-2'>
                  <PasswordInput type={'sign_up'} placeholder={'••••••••'} onChange={e => setData({ ...data, ['Password']: e.target.value })} />
              </div>
              <div className='col-span-2 mt-2.5'>
                <PasswordInput label={'Confirm Password'} type={'confirmPassword'} placeholder={'••••••••'} onChange={e => setData({ ...data, ['ConfirmPassword']: e.target.value })} />
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
