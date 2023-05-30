import { TextInput, Button, Da } from 'ui';
import { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
// change orderStatus to  111
const ADD_BILLING = gql`
  mutation Mutation(
    $billTimestamp: String!,
    $invoiceId: String!,
    $paymentMethodId: String!,
    $paidAmount: Float!,
    $firstName: String!,
    $lastName: String!,
    $tel: String!,
    $paymentSlipUrl: String!)
    { addBilling(
      billTimestamp: $billTimestamp,
      invoiceId: $invoiceId,
      paymentMethodId: $paymentMethodId,
      paidAmount: $paidAmount,
      firstName: $firstName,
      lastName: $lastName,
      tel: $tel,
      paymentSlipUrl: $paymentSlipUrl
      ) { billingId
  }
}
`;


export const BillingInfo = () => {

  const router = useRouter();

  const [data, setData] = useState({
    'billTimestamp': new Date(),
    'invoiceId': "",
    'paymentMethodId': "",
    'paidAmount': "",
    'firstName': "",
    'lastName': "",
    'tel': "",
    'paymentSlipUrl': ""
  });

  useEffect(()=>{
    console.log(data)
  }, [data])

  const [ADD_Billing] = useMutation(ADD_BILLING, {
    variables: {
    'billTimestamp': data.billTimestamp,
    'invoiceId': data.invoiceId,
    'paymentMethodId': data.paymentMethodId,
    'paidAmount': Number(data.paidAmount),
    'firstName': data.firstName,
    'lastName': data.lastName,
    'tel': data.tel,
    'paymentSlipUrl': data.paymentSlipUrl
    },
    onCompleted: () => {
      router.push('/billing')
    }
  })
  console.log(data);

  const onSubmit = (e) => {
    e.preventDefault();
    ADD_Billing().catch((err) => alert(err))
  }

  return (
    <>
      <div className="mx-auto px-4">
        <div className="mb-4 w-full rounded-md border-2 border-black px-8 py-4">
          <div className="mb-4 text-2xl font-bold">ใบแจ้งชำระเงิน</div>
          <div className="grid grid-cols-2 gap-4 md:gap-x-16">
            <div className="">
              <TextInput
                label={'Invoice ID'}
                onChange={(e) =>
                  setData({ ...data, ['invoiceId']: e.target.value })
                }
              />
            </div>
            <div className=" col-span-2 col-start-1">
              <div className="mb-2.5">เลือกประเภทการจ่ายเงิน</div>
              <div className="">
                <div class="flex">
                  <div class="mb:mr-20 mr-12 flex items-center">
                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['paymentMethodId']: e.target.value,
                        })
                      }
                      id="inline-radio"
                      type="radio"
                      value="B7"
                      name="inline-radio-group"
                      class="mr-2.5 h-4 w-4 border-[#C3A982] border-gray-300 bg-gray-100 bg-white text-[#C3A982] text-blue-600 focus:ring-2 focus:ring-[#C3A982] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      7-BARCODE
                    </label>
                  </div>
                  <div class="mb:mr-20 mr-12 flex items-center">
                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['paymentMethodId']: e.target.value,
                        })
                      }
                      id="inline-radio"
                      type="radio"
                      value="BC"
                      name="inline-radio-group"
                      class="mr-2.5 h-4 w-4 border-[#C3A982] border-gray-300 bg-gray-100 bg-white text-[#C3A982] text-blue-600 focus:ring-2 focus:ring-[#C3A982] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Bitcoin (Querian Coin)
                    </label>
                  </div>
                  <div class="mb:mr-20 mr-12 flex items-center">
                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['paymentMethodId']: e.target.value,
                        })
                      }
                      id="inline-2-radio"
                      type="radio"
                      value="CC"
                      name="inline-radio-group"
                      class="mr-2.5 h-4 w-4 border-[#C3A982] border-gray-300 bg-gray-100 bg-white text-[#C3A982] text-blue-600 focus:ring-2 focus:ring-[#C3A982] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Credit Card
                    </label>
                  </div>
                  <div class="mb:mr-20 mr-12 flex items-center">
                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['paymentMethodId']: e.target.value,
                        })
                      }
                      id="inline-3-radio"
                      type="radio"
                      value="DC"
                      name="inline-radio-group"
                      class="mr-2.5 h-4 w-4 border-[#C3A982] border-gray-300 bg-gray-100 bg-white text-[#C3A982] text-blue-600 focus:ring-2 focus:ring-[#C3A982] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="inline-3-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Debit Card
                    </label>
                  </div>
                  <div class="mb:mr-20 mr-12 flex items-center">
                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['paymentMethodId']: e.target.value,
                        })
                      }
                      id="inline-4-radio"
                      type="radio"
                      value="EB"
                      name="inline-radio-group"
                      class="mr-2.5 h-4 w-4 border-[#C3A982] border-gray-300 bg-gray-100 bg-white text-[#C3A982] text-blue-600 focus:ring-2 focus:ring-[#C3A982] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="inline-4-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      E-BANKING
                    </label>
                  </div>
                  <div class="mb:mr-20 mr-12 flex items-center">
                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['paymentMethodId']: e.target.value,
                        })
                      }
                      id="inline-radio"
                      type="radio"
                      value="PP"
                      name="inline-radio-group"
                      class="mr-2.5 h-4 w-4 border-[#C3A982] border-gray-300 bg-gray-100 bg-white text-[#C3A982] text-blue-600 focus:ring-2 focus:ring-[#C3A982] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Paypol
                    </label>
                  </div>
                  <div class="mb:mr-20 mr-12 flex items-center">
                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          ['paymentMethodId']: e.target.value,
                        })
                      }
                      id="inline-radio"
                      type="radio"
                      value="TR"
                      name="inline-radio-group"
                      class="mr-2.5 h-4 w-4 border-[#C3A982] border-gray-300 bg-gray-100 bg-white text-[#C3A982] text-blue-600 focus:ring-2 focus:ring-[#C3A982] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Transfer
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <TextInput
                label={'Upload Picture'}
                onChange={(e) => setData({ ...data, ['paymentSlipUrl']: e.target.value })}
              />
            </div>
            <TextInput
              label={'First Name'}
              onChange={(e) =>
                setData({ ...data, ['firstName']: e.target.value })
              }
            />
            <TextInput
              label={'Last Name'}
              onChange={(e) =>
                setData({ ...data, ['lastName']: e.target.value })
              }
            />
            <TextInput
              label={'Telephone Number'}
              onChange={(e) =>
                setData({ ...data, ['tel']: e.target.value })
              }
            />
            <TextInput
              label={'Total Amount'}
              onChange={(e) =>
                setData({ ...data, ['paidAmount']: e.target.value })
              }
            />
            <div>
              <label
                htmlFor="return_date"
                className="mb-2.5 block text-sm font-medium text-black"
              >
                Date-Time
              </label>
              <input
                onChange={(e) =>
                  setData({ ...data, ['billTimestamp']: e.target.value })
                }
                name="sending_date"
                type="datetime-local"
                autoComplete="true"
                id="sending_date"
                className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm "
                required
              ></input>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3">
            <div className="col-start-2">
              <Link href="/invoice">
                <Button text={'CONFIRM'} type={'submit'} onClick={onSubmit}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
