import { Sidebar, Breadcrumb, TextInput, Button, Dropdown, DateInput } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_INVOICE =gql`
    mutation AddInvoice(
        $paymentTypeId: String!,
        $orderId: String!,
        $costAmount: Float!,
        $deadlineDate: String!) {
        addInvoice(
            paymentTypeId: $paymentTypeId,
            orderId: $orderId,
            costAmount: $costAmount,
            deadlineDate: $deadlineDate) {
                invoiceId
            }
        }
`;

const invoiceForm = () => {

    const paymentTypeList = {
        '0004': 'superdeal 2023 halfyear offer',
        '1000': 'One-time purchased',
        '2001': '2 times / m.',
        '2002': '2 times / 2 m.',
        '3001': '6 times / 6 m.',
        '4001': '1 year monthy'
    }

    const router = useRouter();

    const [data, setData] = useState({
      'paymentTypeId': '',
      'orderId': '',
      'costAmount': '',
      'deadlineDate': ''
    });

    useEffect(()=>{
      console.log(data)
    }, [data])

    const [addInvoice] = useMutation(ADD_INVOICE, {
        variables: {
        'paymentTypeId': data.paymentTypeId,
        'orderId': data.orderId,
        'costAmount': Number(data.costAmount),
        'deadlineDate': (new Date(data.deadlineDate)).toString(),
        },
        onCompleted: () => {
          router.push('/invoice')
        }
      })

      const role = "SA"
      const onSubmit = (e) => {
        e.preventDefault();
        addInvoice().catch((err) => alert(err))
      }

    return (
        <>
          <ClientOnly>
              <SideBar showFinance="true"/>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                    <Breadcrumb first_name="Finance" second_name="Invoice" second="/invoice" current="Add New Invoice" />
                    <h1 className="text-4xl font-bold py-6">Add New Invoice</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Dropdown options={paymentTypeList} label='Payment Type' onChange={e => setData({ ...data, ['paymentTypeId']: e.target.value })}/>
                            <TextInput placeholder="" label="Order ID" onChange={e => setData({ ...data, ['orderId']: e.target.value })}/>
                            <TextInput placeholder="" label="Cost Amount" onChange={e => setData({ ...data, ['costAmount']: e.target.value })}/>
                            <DateInput label={'Deadline Date'} onChange={e => setData({ ...data, ['deadlineDate']: e.target.value })}/>
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

export default invoiceForm;
