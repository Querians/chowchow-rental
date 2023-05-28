import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const CheckIn = () => {

    const role = "inventory"
    const item = {
        item_id: 23000121,
        item_status: "A",
    }
    const item_status = {
        A: "Available",
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
                    <Breadcrumb first_name="Order Management" second_name="Order" second="/order" third_name="Order Tracking" third="/ordertracking" fourth_name="Edit Item status" fourth="/ordercheckinout" current="Item Check-In" />
                    <h1 className="text-4xl font-bold py-6">Item Check-In</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput type="readOnly" defaultValue={item["item_id"]} label="Item ID" />
                                <Dropdown options={item_status} label='Item Status' defaultValue={item["item_status"]}/>
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/itemcheckinout">
                                        <Button type="submit" text="Check-In" onClick={onSubmit} />
                                    </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default CheckIn;