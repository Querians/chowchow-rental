import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';
const cateposition = {
    category_prob_id: "DP",
    position_id: "DL",
}
const category_prob_id = {
    Application_error: "AE",
    Feedback: "FB",
    Improper_service: "IS",
    Late_delivery: "LD",
    Payment_problem: "PP",
    Question_answer: "QA",
    }
    const posi_id = {
        DL: "DL",
        MA: "MA",
        INV: "INV",
        SA: "SA",
    }
const CateprobForm = () => {

    const role = "inventory"
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Issue" second_name="Category Problem" second="/categoryproblem" current="Add Category Problem" />
                    <h1 className="text-4xl font-bold py-6">Add category problem</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <Dropdown options={category_prob_id} label='Category Problem ID' defaultValue={cateposition["category_prob_id"]}/>
                                <TextInput type='readOnly' placeholder="" label="Category Problem Name" />
                                <Dropdown options={posi_id} label='Position ID' defaultValue={cateposition["posi_id"]}/>
                                <TextInput type='readOnly' placeholder="" label="Position Name" />
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/categoryproblem">
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

export default CateprobForm;