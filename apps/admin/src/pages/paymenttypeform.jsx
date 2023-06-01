import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_PAYMENTTYPE =gql`
    mutation Mutation(
        $paymentTypeId: String!,
        $paymentTypeName: String!,
        $interest: Float!,
        $times: Int!) {
        addPaymentType(
            paymentTypeId: $paymentTypeId,
            paymentTypeName: $paymentTypeName,
            interest: $interest,
            times: $times) {
                paymentTypeId
            }
        }
`;

const PaymentTypeForm = () => {

    const router = useRouter();

    const [data, setData] = useState({
      'paymentTypeId': '',
      'paymentTypeName': '',
      'interest': '',
      'times': ''
    });

    useEffect(()=>{
      console.log(data)
    }, [data])

    const [addPaymentType] = useMutation(ADD_PAYMENTTYPE, {
        variables: {
        'paymentTypeId': data.paymentTypeId,
        'paymentTypeName': data.paymentTypeName,
        'interest': Number(data.interest),
        'times': Number(data.times),
        },
        onCompleted: () => {
          router.push('/paymenttype')
        }
      })

      const role = "SA"
      const onSubmit = (e) => {
        e.preventDefault();
        addPaymentType().catch((err) => alert(err))
      }

    return (
        <>
          <ClientOnly>
              <SideBar showFinance="true"/>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                    <Breadcrumb first_name="Finance" second_name="Payment Type" second="/paymenttype" current="Add New Payment Type" />
                    <h1 className="text-4xl font-bold py-6">Add New Payment Type</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                        <div className="grid md:grid-cols-2 gap-4">
                            <TextInput placeholder="" label="Payment Type ID" onChange={e => setData({ ...data, ['paymentTypeId']: e.target.value })}/>
                            <TextInput placeholder="" label="Payment Type Name" onChange={e => setData({ ...data, ['paymentTypeName']: e.target.value })}/>
                            <TextInput placeholder="" label="Interest" onChange={e => setData({ ...data, ['interest']: e.target.value })}/>
                            <TextInput placeholder="" label="Times" onChange={e => setData({ ...data, ['times']: e.target.value })}/>
                        </div>
                        <div className='grid justify-items-center'>
                            <Link href="/paymenttype">
                                <Button type="submit" text="ADD" onClick={onSubmit} />
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
            </ClientOnly>

        </>
    );
};

export default PaymentTypeForm;
