import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const ProductForm = () => {
    // query category name
    const catagoryList = {
        chair: 'chair',
        table: 'table',
        decoration: 'decoration'
    }

    const picurl = "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s";
    const role = "inventory"
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showStock="true"/>
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" first="/inventory" second_name="Products" second="/products" current="Products Form" />
                    <h1 className="text-4xl font-bold py-6">Add new product</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput placeholder="" label="Product Name" constraint="^.{1,40}$" />
                                <Dropdown placeholder="" label="Category Name" options={catagoryList} />
                                <TextInput placeholder="" label="Rental Price Per Day" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                <TextInput placeholder="" label="Picture URL" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <div class="grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-4">
                                    <TextInput placeholder="" label="color" constraint="^.{1,20}$" />
                                    <TextInput placeholder="" label="material" constraint="^.{1,30}$" />
                                    <TextInput placeholder="kg" label="weight" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                    <TextInput placeholder="cm" label="width" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                    <TextInput placeholder="cm" label="depth" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                    <TextInput placeholder="cm" label="hight" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                </div>
                                <div>
                                    <Textarea label="Description" isRequire={false} />
                                </div>
                            </div>

                            <div class="grid justify-items-center">
                                    <Link href="/products">
                                        <Button type="submit" text="ADD" onClick={onSubmit} />
                                    </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default ProductForm;