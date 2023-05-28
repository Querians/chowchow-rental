import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';
import Image from 'next/image';

const PaymentMethodForm = () => {

    const role = "SA"
    const billing = {
        billing_id: 'ad1snf8w56s',
        payer: 'Zack Clatonr',
        tel: '0449205452',
        paid_amount: 1234.56,
        bill_timestamp: '2023-01-23 08:44:21',
        payment_slip_url: 'https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s',
    };
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showFinance="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                    <Breadcrumb first_name="Finance" second_name="Billing" second="/billing" current="Edit Billing Detail" />
                    <h1 className="text-4xl font-bold py-6">Edit Billing Detail</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <TextInput placeholder="" label="Payment Type ID" value={billing['billing_id']} />
                            <TextInput placeholder="" label="Billing ID" value={billing['payer']} />
                            <TextInput placeholder="" label="Bill Timestamp" value={billing['tel']} />
                            <TextInput placeholder="" label="Payer's Tel." value={billing['paid_amount']} />
                            <TextInput placeholder="" label="Total Amount" value={billing['bill_timestamp']} />
                            <TextInput type="readOnly" placeholder="" label="Evidence" value={billing['payment_slip_url']} />                           
                        </div>
                        <div className='grid justify-items-center'>
                            <Link href="/billing">
                                <Button type="submit" text="CONFIRM" onClick={onSubmit} />
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default PaymentMethodForm;