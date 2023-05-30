import ClientOnly from '@/components/ClientOnly';
import Image from 'next/image';
import { Navbar, Header, Breadcrumb, SearchBar, Card, Dropdown } from 'ui';
import { ProductCard } from '@/components/allProduct'
import { useQuery, gql } from '@apollo/client';

const PRODUCT_QUERY = gql`
query AllProduct {
  allProduct {
    productName
    productId
    pricePerDay
    description
    pictureUrl
  }
}
`


const Product = () => {

  const { data, loading, error } = useQuery(PRODUCT_QUERY);
  const filter = () => {

  };

    return (
        <>
            <Navbar />
            <main className="container pt-32 md:pt-24 mx-auto px-4">
                <div className="pb-6">
                    <Breadcrumb first_name="Home" first="/" current="Products" />
                </div>
                <div class="md:flex flex-row py-4">
                    <div class="basis-1/4">
                        <h1 className="mb-4 md:mb-0 text-4xl font-bold">Products</h1>
                    </div>
                    <div class="basis-3/4">
                        <SearchBar placeholder="Search Product"/>
                    </div>
                </div>
                <div class="md:flex pt-2">
                    <div class="basis-1/4">
                        <div className="bg-[#CDCDCD] md:w-4/5 w-full mb-4 md:mb-0 min-h-max rounded-lg">
                            <ul class="space-y-2 p-4 font-medium">
                                <h1 className="text-2xl font-bold">Filter</h1>
                                <Dropdown options={{ chair: 'chair', table: 'table', decoration: 'decoration' }} placeholder='Category' onChange={filter} />
                                <Dropdown options={{ white: 'white', brown: 'brown', black: 'black' }} placeholder='Color' onChange={filter} />
                                <Dropdown options={{ plastic: 'plastic', wood: 'wood', aluminium: 'aluminium' }} placeholder='Material' onChange={filter} />
                                <Dropdown options={{ min: 'less than 10฿', medium: '10-30฿', max: 'more than 30฿' }} placeholder='Price Range' onChange={filter} />
                            </ul>
                        </div>
                    </div>
                    <div class="basis-3/4">
                        <ClientOnly>
                          <ProductCard />
                        </ClientOnly>
                        </div>
                </div>
            </main>
        </>
    );
};

export default Product;
