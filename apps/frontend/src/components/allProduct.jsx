import { Card } from 'ui';
import { useQuery, gql } from '@apollo/client';

export const ProductCard = () => {

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

  const { data, loading, error } = useQuery(PRODUCT_QUERY);

  if (loading) {
    return (
      <h2>Loading Data...</h2>
    );
  };

  if (error) {
    console.error(error);
    return (
      <h2>Sorry, there&apos;s been an error...</h2>
    );
  };

  const { allProduct } = data;

  return (
    <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {allProduct.map((product) => (
        <Card
          productName={product.productName}
          detail={product.description}
          price={product.pricePerDay}
          pic={product.pictureUrl}
          goto={product.productId}
        />
      ))}
    </div>
  );
};
