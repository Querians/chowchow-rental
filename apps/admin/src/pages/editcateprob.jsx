import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const EditCateprob = () => {

    const role = "inventory"
    const caprob = {
        category_prob_id: "DP",
            category_prob_name: "Damaged packaged",
            position_id: "DL",
            position_name: "Deliverer",
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
                                <TextInput placeholder="" label="Category Problem ID" />
                                <TextInput placeholder="" label="Category Problem Name" />
                                <TextInput type = 'readOnly' placeholder="" value={caprob['position_id']}label="Position ID" />
                                <TextInput placeholder="" label="Position Name" />
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/categoryproblem">
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