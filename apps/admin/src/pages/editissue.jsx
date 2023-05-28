import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const EditCateprob = () => {

    const role = "inventory"
    const issue_data = {
            customer_name: "DP",
            customer_id: "Damaged packaged",
            order_id: "nvjdk415fg5",
            description: "who threw MY PACKAGE",
            position_name: "Deliverer",
            category_prob_n: "missing order",
            branch_id: "Deliverer",
            staff_name: "Luv Cocoa",
            customer_tel: "0XXXXXXXXX",
            email: "LetusSleep@gmail.com",
            status: true,
    }
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Issue" second_name="Category Problem" second="/categoryproblem" current="Edit Category Problem" />
                    <h1 className="text-4xl font-bold py-6">Edit category problem</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput type='readOnly' placeholder="" value={issue_data['customer_name']}label="Customer Name" />
                                <TextInput type='readOnly' placeholder="" value={issue_data['customer_id']}label="Customer ID" />
                                <TextInput type='readOnly' placeholder="" value={issue_data['order_id']}label="Order ID" />
                                <TextInput type='readOnly' placeholder="" value={issue_data['description']}label="Description" />
                                <TextInput type='readOnly' placeholder="" value={issue_data['position_name']}label="Position Name" />
                                <TextInput type='readOnly' placeholder="" value={issue_data['category_prob_n']}label="Category Problem Name" />
                                <TextInput placeholder="" value={issue_data['branch_id']}label="Branch ID" />
                                <TextInput type='readOnly' placeholder="" value={issue_data['staff_name']}label="Staff Name" />
                                <TextInput type='readOnly' placeholder="" value={issue_data['customer_tel']}label="Customer Tel." />
                                <TextInput type='readOnly' placeholder="" value={issue_data['email']}label="Email" />   
                            </div>
                            <div>
                            <text> Issue Status </text>
                                <input type= "checkbox" value="" class="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/issue">
                                        <Button type="submit" text="EDIT" onClick={onSubmit} />
                                    </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default EditCateprob;