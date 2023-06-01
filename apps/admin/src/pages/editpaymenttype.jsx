import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import { useState } from 'react';
import Link from 'next/link';

const PaymentTypeForm = () => {

    const role = "SA"
    const payment = {
        paymentTypeId: '0004',
        paymentTypeName: 'superdeal 2023 halfyear offer',
        interest: 1.5,
        times: 6,
    };

    const [data, setData] = useState({
        'paymentTypeId': payment.paymentTypeId,
        'paymentTypeName': payment.paymentTypeName,
        'interest': payment.interest,
        'times': payment.times,
      });

    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showFinance="true"/>
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                    <Breadcrumb first_name="Finance" second_name="Payment Type" second="/paymenttype" current="Edit Payment Type Detail" />
                    <h1 className="text-4xl font-bold py-6">Edit Payment Type Detail</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <TextInput onChange={e => setData({ ...data, ['paymentTypeId']: e.target.value })} placeholder="" label="Payment Type ID" defaultValue={payment['paymentTypeId']} />
                            <TextInput onChange={e => setData({ ...data, ['paymentTypeName']: e.target.value })} placeholder="" label="Payment Type Name" defaultValue={payment['paymentTypeName']} />
                            <TextInput onChange={e => setData({ ...data, ['interest']: e.target.value })} placeholder="" label="Interest" defaultValue={payment['interest']} />
                            <TextInput onChange={e => setData({ ...data, ['times']: e.target.value })} placeholder="" label="Times" defaultValue={payment['times']} />
                        </div>
                        <div className='grid justify-items-center'>
                            <Link href="/paymenttype">
                                <Button type="submit" text="SUBMIT" onClick={onSubmit} />
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default PaymentTypeForm;
