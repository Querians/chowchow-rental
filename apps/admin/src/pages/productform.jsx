import Image from 'next/image';
import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';

const ProductForm = () => {

    const picurl = "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s";
    const role = "inventory"
    return (
        <>
            <aside>
                <Sidebar role={role} />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="store" first="/store" current="Products" />
                    <h1 className="text-4xl font-bold py-6">Add new product</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput placeholder="" label="Product Name" constraint=".{1,5}" />
                                <Dropdown placeholder="" label="Category Name" options={{ chair: 'chair', table: 'table', decoration: 'decoration' }} />
                                <TextInput placeholder="" label="Rental Price Per Day" constraint=".{1,5}" />
                                <TextInput placeholder={picurl} label="Picture URL" constraint="" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <div class="grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-4">
                                    <TextInput placeholder="" label="color" constraint="" />
                                    <TextInput placeholder="" label="material" constraint="" />
                                    <TextInput placeholder="kg" label="weight" constraint="" />
                                    <TextInput placeholder="cm" label="width" constraint="" />
                                    <TextInput placeholder="cm" label="depth" constraint="" />
                                    <TextInput placeholder="cm" label="hight" constraint="" />
                                </div>
                                <div>
                                    <Textarea label="Description" />
                                </div>
                            </div>

                            <div class="grid justify-items-center">
                                <div className="w-1/5">
                                    <Button type="submit" text="CONFIRM" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default ProductForm;