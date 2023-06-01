import Image from 'next/image';
import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';

const Home = () => {

    const role = "INV"
    const category = {
        category_id: 30030,
        category_name: 'Black Chair',
    };

    const onEdit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showStock="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" second_name="Products" second="/products" current="Edit Category" />
                    <h1 className="text-4xl font-bold py-6">Edit Category</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                            <TextInput type="readOnly" placeholder="" value={category['category_id']} label="Category ID" />
                            <TextInput placeholder="" defaultValue={category['category_name']} label="Category Name" />
                        </div>
                        <div className='grid justify-items-center'>
                            <Link href="/category">
                                <Button type="submit" text="CONFIRM" onClick={onEdit} />
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Home;
