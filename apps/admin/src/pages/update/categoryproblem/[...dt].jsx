import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';

const POSITION_QUERY = gql`
  query Query {
    allPosition {
      positionId
      positionN
    }
  }
`;

const EDIT_CATEGORYPROBLEM = gql`
mutation UpdateCategoryProblem($categoryProblemId: String!, $categoryProblemN: String!, $positionId: String!) {
    updateCategoryProblem(categoryProblemId: $categoryProblemId, categoryProblemN: $categoryProblemN, positionId: $positionId) {
      categoryProblemN
      position {
        positionId
      }
    }
  }
`

const STAFF_ROLE = gql`
  query StaffProfile {
    StaffProfile {
      position {
        positionId
      }
    }
  }
`;

const EditCateprob = () => {
  const router = useRouter();
  const [previous, setPrevious] = useState({});
  const [executeSearch, { data, loading, error }] =
    useLazyQuery(POSITION_QUERY);
  const {
    data: staff,
    loading: loadingposition,
    error: errorposition,
  } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');
  const [editData, setEditData] = useState({
    categoryProblemN:'',
    positionId:'',
  })


  const [executeEdit] = useMutation(EDIT_CATEGORYPROBLEM, {
    variables:{
        "categoryProblemId": previous.categoryProblemId,
        "categoryProblemN": editData.categoryProblemN,
        "positionId": editData.positionId,
    },
    onCompleted: () => {
      router.push('/categoryproblem', { shallow: false })
    }
  });


  useEffect(() => {
    setPrevious({
      ...previous,
      ['categoryProblemId']: router.query.dt?.[0],
      ['categoryProblemN']: router.query.dt?.[1].replace('_', ' '),
      ['positionId']: router.query.dt?.[2],
    });
  }, [router.query.dt]);

  useEffect(() => {
    executeSearch();
  }, [executeSearch]);

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff]);

  if (loadingposition) {
    return <h2>Loading Data...</h2>;
  }

  if (errorposition) {
    console.error(errorposition);
    return <h2>Sorry, {errorposition}...</h2>;
  }

  console.log(staff);

  if (loading) {
    return <h2>Loading Data...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>Sorry, there&apos;s been an error...</h2>;
  }

  const caprob = {
    category_prob_id: 'DP',
    category_prob_name: 'Damaged packaged',
    position_id: 'DL',
    position_name: 'Deliverer',
  };
  const posi_id = {
    DL: 'Deliverer',
    MA: 'Manager',
    INV: 'Inventory Management',
    SA: 'Sale',
  };

  const onSubmit = (e) => {
    e.preventDefault();
    executeEdit().catch((err) => alert(err))
}

  return (
    <>
      <aside>
        <Sidebar role={role} showIssue={'true'} />
      </aside>

      <main className="container mx-auto px-10 lg:ml-64">
        <form action="">
          <Breadcrumb
            first_name="Issue"
            second_name="Category Problem"
            second="/categoryproblem"
            current="Edit Category Problem"
          />
          <h1 className="py-6 text-4xl font-bold">Edit category problem</h1>
          <div className="w-full rounded-lg border-2 border-black p-4">
            <div className="space-y-4">
              <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2">
                <TextInput
                  type={'readOnly'}
                  value={previous.categoryProblemId}
                  placeholder=""
                  label="Category Problem ID"
                />
                <TextInput
                  onChange={e=>setEditData({...editData, ['categoryProblemN']:e.target.value})}
                  defaultValue={previous.categoryProblemN}
                  placeholder=""
                  label="Category Problem Name"
                />
                <div>
                  <label
                    htmlFor="Position"
                    className="mb-2.5 block text-sm font-medium text-black"
                  >
                    Position
                  </label>
                  <select
                    name="Position"
                    defaultValue={previous.positionId}
                    id="Position"
                    onChange={e=>setEditData({...editData, ['positionId']:e.target.value})}
                    className="mb-2.5 block w-full rounded-md border-2 border-black p-2.5 text-sm text-black invalid:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  >
                    {data && data.allPosition?.map((position) => (
                      <option key={position} value={position.positionId}>
                        {position.positionN}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <Dropdown defaultValue={caprob.position_id} options={posi_id} label='Position Name' placeholder="Select Position"/> */}
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
