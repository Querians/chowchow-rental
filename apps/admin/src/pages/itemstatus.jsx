import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const ItemStatus = () => {

    const picurl = "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s";
    const role = "inventory"
    const item = {
        item_id: 23000121,
        item_status: "A",
    }
    const item_status = {
        A: "Available",
        N: "Not available",
        O: "Out of order",
        U: "Unavailable",
    }
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showStock="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" first="/inventory" second_name="Items" second="/items" current="Update Item Status" />
                    <h1 className="text-4xl font-bold py-6">Update Item Status</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput defaultValue={item["item_id"]} label="Item ID" />
                                <Dropdown options={item_status} label='Item Status' defaultValue={item["item_status"]}/>
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/items">
                                        <Button type="submit" text="UPDATE" onClick={onSubmit} />
                                    </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default ItemStatus;