import Image from 'next/image';
import { Navbar, Header, Breadcrumb, SearchBar, Card, Dropdown } from 'ui';

const Product = () => {
    const filter = () => {

    };

    const productList = {
        product1: {
            product_name: 'Black Chair',
            price: '17',
            detail: 'ikea black light chair',
            image: '/ikea_black_chair.png',
        },
        product2: {
            product_name: 'table wohoooooooooooooo',
            price: '13',
            detail: 'white wooden table',
            image: '/ikea_black_chair.png',
        },
        product3: {
            product_name: 'Black Chair',
            price: '17',
            detail: 'ikea black light chair',
            image: '/ikea_black_chair.png',
        },
        product4: {
            product_name: 'table',
            price: '13',
            detail: 'white wooden table',
            image: '/ikea_black_chair.png',
        },
        product5: {
            product_name: 'Black Chair',
            price: '17',
            detail: 'ikea black light chair',
            image: '/ikea_black_chair.png',
        },
        product6: {
            product_name: 'table',
            price: '13',
            detail: 'white wooden table',
            image: '/ikea_black_chair.png',
        },
        product7: {
            product_name: 'Black Chair',
            price: '17',
            detail: 'ikea black light chair',
            image: '/ikea_black_chair.png',
        },
        product8: {
            product_name: 'table',
            price: '13',
            detail: 'white wooden table',
            image: '/ikea_black_chair.png',
        },
    }

    return (
        <>
            <Navbar />
            <main className="container pt-32 md:pt-24 mx-auto px-4 pt-4">
                <div className="pb-6">
                    <Breadcrumb first_name="Home" first="/" current="Products" />
                </div>
                <div class="md:flex flex-row py-4">
                    <div class="basis-1/4">
                        <h1 className="mb-4 md:mb-0 text-4xl font-bold">Products</h1>
                    </div>
                    <div class="basis-3/4">
                        <SearchBar />
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
                        <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {Object.keys(productList).map((key) => (
                                <div class=" ">
                                    <Card
                                        productName={productList[key]['product_name']}
                                        detail={productList[key]['detail']}
                                        price={productList[key]['price']}
                                        pic={productList[key]['image']}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* <Card
                            productName="Black Chair"
                            detail="Ikea Chair"
                            price="32"
                            pic="/ikea_black_chair.png"
                            link="/"
                        /> */}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Product;