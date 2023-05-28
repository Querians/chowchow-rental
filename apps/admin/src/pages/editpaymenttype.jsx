import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';

const PaymentTypeForm = () => {

    const role = "SA"
    const payment = {
        paymentTypeId: '0004',
        paymentTypeName: 'superdeal 2023 halfyear offer'
    };
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showStock="true"/>
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                    <Breadcrumb first_name="Finance" second_name="Payment Type" second="/paymenttype" current="Edit Payment Type Detail" />
                    <h1 className="text-4xl font-bold py-6">Edit Payment Type Detail</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <TextInput placeholder="" label="Payment Type ID" value={payment['paymentTypeId']} />
                            <TextInput placeholder="" label="Payment Type Name" value={payment['paymentTypeName']} />
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