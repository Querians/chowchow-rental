import { useState, useEffect } from 'react';
import { Sidebar, Breadcrumb } from 'ui';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Link from 'next/link';

const CUTM_QUERY = gql`
  query AllCustomer {
    allCustomer {
      orders {
        invoices {
          billings {
            paymentMethod {
              paymentMethodName
              paymentMethodId
            }
            paidAmount
          }
        }
      }
      customerId
    }
  }
  `

const STAFF_ROLE = gql`
  query StaffProfile {
    StaffProfile {
      position {
        positionId
      }
    }
  }
`


const FinanceAnalyse = () => {

  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const { data, loading, error } = useQuery(CUTM_QUERY, {pollInterval: 1000});
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

  // const role = "SA"
  const issue_sum = {
    1: {
      customer_id: '8239r4i9f',
      app_not: '356',
      server_down: '35',
      order_tracking: '355',
      payment_err: '1',
      insufficient: '24',
    },
    2: {
      customer_id: '8239r4i9f',
      app_not: '356',
      server_down: '35',
      order_tracking: '355',
      payment_err: '1',
      insufficient: '24',
    },
    3: {
      customer_id: '8239r4i9f',
      app_not: '356',
      server_down: '35',
      order_tracking: '355',
      payment_err: '1',
      insufficient: '24',
    },
    4: {
      customer_id: '8239r4i9f',
      app_not: '356',
      server_down: '35',
      order_tracking: '355',
      payment_err: '1',
      insufficient: '24',
    },
    5: {
      customer_id: '8239r4i9f',
      app_not: '356',
      server_down: '35',
      order_tracking: '355',
      payment_err: '1',
      insufficient: '24',
    },
    6: {
      customer_id: '8239r4i9f',
      app_not: '356',
      server_down: '35',
      order_tracking: '355',
      payment_err: '1',
      insufficient: '24',
    },
  };

  const [isShow, setShow] = useState(false);
  const popup = () => {
    setShow(!isShow);
  };
  const drop = () => {
    popup();
    // code for drop row
  }

  return (
    <>
      <aside>
        <Sidebar role={role} showFinance="true" />
      </aside>
      <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
        <Breadcrumb first_name="Finance" current="Finance Analysis" />
        <h1 className="text-4xl font-bold pt-6 pb-4">Finance Analysis</h1>
        <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
          <h1 className="text-xl font-bold">Accumulated Paid Amount</h1>
          <div className="p-4">
            <p className='text-end pr-[35%] bg-[#E3C291] rounded-t-lg text-sm font-medium uppercase text-gray-700 pt-2'>Payment Method Name</p>
            <div class="relative overflow-x-auto rounded-b-lg h-96">
              <table class="w-full text-sm text-center text-gray-500 ">
                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Customer ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Credit Card
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Debit Card
                    </th>
                    <th scope="col" class="px-6 py-3">
                      E-banking
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Transfer
                    </th>
                    <th scope="col" class="px-6 py-3">
                      7-barcode
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Paypol
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Bitcoin (Querian Coin)
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {data && data.allCustomer?.map((key,index) => (
                    <tr class="bg-white border-b">
                      <th scope="row" class="px-6 py-4 font-bold bg-[#E1E1E1]">
                        {key['customerId']}
                      </th>
                      <td class="px-6 py-4">
                        {
                            (key.orders.map((order)=>{
                                return  ((order.invoices.map((invoice)=>{
                                    return ( (invoice.billings.filter((bill)=>{
                                      return bill.paymentMethod.paymentMethodId == 'CC'
                                    })
                                      .map(bill=>bill.paidAmount)
                                      .reduce((acc, cur)=>acc+cur, 0)
                                    )
                                  )
                                })).reduce((acc, cur)=>acc+cur, 0))
                              })
                            ).reduce((acc, cur)=>acc+cur, 0)
                        }
                      </td>
                      <td class="px-6 py-4">
                      {
                            (key.orders.map((order)=>{
                                return  ((order.invoices.map((invoice)=>{
                                    return ( (invoice.billings.filter((bill)=>{
                                      return bill.paymentMethod.paymentMethodId == 'EB'
                                    })
                                      .map(bill=>bill.paidAmount)
                                      .reduce((acc, cur)=>acc+cur, 0)
                                    )
                                  )
                                })).reduce((acc, cur)=>acc+cur, 0))
                              })
                            ).reduce((acc, cur)=>acc+cur, 0)
                        }
                      </td>
                      <td class="px-6 py-4">
                      {
                            (key.orders.map((order)=>{
                                return  ((order.invoices.map((invoice)=>{
                                    return ( (invoice.billings.filter((bill)=>{
                                      return bill.paymentMethod.paymentMethodId == 'TR'
                                    })
                                      .map(bill=>bill.paidAmount)
                                      .reduce((acc, cur)=>acc+cur, 0)
                                    )
                                  )
                                })).reduce((acc, cur)=>acc+cur, 0))
                              })
                            ).reduce((acc, cur)=>acc+cur, 0)
                        }
                      </td>
                      <td class="px-6 py-4">
                      {
                            (key.orders.map((order)=>{
                                return  ((order.invoices.map((invoice)=>{
                                    return ( (invoice.billings.filter((bill)=>{
                                      return bill.paymentMethod.paymentMethodId == 'B7'
                                    })
                                      .map(bill=>bill.paidAmount)
                                      .reduce((acc, cur)=>acc+cur, 0)
                                    )
                                  )
                                })).reduce((acc, cur)=>acc+cur, 0))
                              })
                            ).reduce((acc, cur)=>acc+cur, 0)
                        }
                      </td>
                      <td class="px-6 py-4">
                      {
                            (key.orders.map((order)=>{
                                return  ((order.invoices.map((invoice)=>{
                                    return ( (invoice.billings.filter((bill)=>{
                                      return bill.paymentMethod.paymentMethodId == 'TR'
                                    })
                                      .map(bill=>bill.paidAmount)
                                      .reduce((acc, cur)=>acc+cur, 0)
                                    )
                                  )
                                })).reduce((acc, cur)=>acc+cur, 0))
                              })
                            ).reduce((acc, cur)=>acc+cur, 0)
                        }
                      </td>
                      <td class="px-6 py-4">
                      {
                            (key.orders.map((order)=>{
                                return  ((order.invoices.map((invoice)=>{
                                    return ( (invoice.billings.filter((bill)=>{
                                      return bill.paymentMethod.paymentMethodId == 'PP'
                                    })
                                      .map(bill=>bill.paidAmount)
                                      .reduce((acc, cur)=>acc+cur, 0)
                                    )
                                  )
                                })).reduce((acc, cur)=>acc+cur, 0))
                              })
                            ).reduce((acc, cur)=>acc+cur, 0)
                        }
                      </td>
                      <td class="px-6 py-4">
                      {
                            (key.orders.map((order)=>{
                                return  ((order.invoices.map((invoice)=>{
                                    return ( (invoice.billings.filter((bill)=>{
                                      return bill.paymentMethod.paymentMethodId == 'BC'
                                    })
                                      .map(bill=>bill.paidAmount)
                                      .reduce((acc, cur)=>acc+cur, 0)
                                    )
                                  )
                                })).reduce((acc, cur)=>acc+cur, 0))
                              })
                            ).reduce((acc, cur)=>acc+cur, 0)
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FinanceAnalyse;
