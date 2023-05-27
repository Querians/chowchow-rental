import Image from 'next/image';
import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';

const Home = () => {

    const role = "inventory"
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showStock="true"/>
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" first="/inventory" second_name="Category" second="/category" current="Add New Category" />
                    <h1 className="text-4xl font-bold py-6">Add New Category</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="grid">
                            {/* <TextInput type="readOnly" placeholder="" label="Category ID" /> */}
                            <TextInput placeholder="" label="Category Name" />
                        </div>
                        <div className='grid justify-items-center'>
                            <Link href="/category">
                                <Button type="submit" text="ADD" onClick={onSubmit} />
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Home;