import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_PAYMENTMETHOD = gql`
    mutation AddPaymentMethods(
        $paymentMethodId: String!,
        $paymentMethodName: String!) {
        addPaymentMethods(
            paymentMethodId: $paymentMethodId,
            paymentMethodName: $paymentMethodName) {
                paymentMethodId
            }
        }
`;

const PaymentMethodForm = () => {

    const router = useRouter();

    const [data, setData] = useState({
      'paymentMethodId': '',
      'paymentMethodName': '',
    });

    useEffect(()=>{
      console.log(data)
    }, [data])

    // const role = "SA"


    const [addPaymentMethod] = useMutation(ADD_PAYMENTMETHOD, {
        variables: {
        'paymentMethodId': data.paymentMethodId,
        'paymentMethodName': data.paymentMethodName
        },
        onCompleted: () => {
          router.push('/paymentmethod')
        }
      })

      const onSubmit = (e) => {
        e.preventDefault();
        addPaymentMethod().catch((err) => alert(err))
      }

    return (
        <>
        <ClientOnly>
            <aside>
                <SideBar role={role} showFinance="true"/>
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                    <Breadcrumb first_name="Finance" second_name="Payment Method" second="/paymentmethod" current="Add New Payment Method" />
                    <h1 className="text-4xl font-bold py-6">Add New Payment Method</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                        <div className="grid md:grid-cols-2 gap-4">
                            <TextInput placeholder="" label="Payment Method ID" onChange={e => setData({ ...data, ['paymentMethodId']: e.target.value })} />
                            <TextInput placeholder="" label="Payment Method Name" onChange={e => setData({ ...data, ['paymentMethodName']: e.target.value })} />
                        </div>
                        <div className='grid justify-items-center'>
                            <Link href="/paymentmethod">
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

export default PaymentMethodForm;
