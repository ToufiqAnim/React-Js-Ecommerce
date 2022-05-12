
import ProductPreview from '../../Components/ProductPreview/ProductPreview';
import './ShopData';
import SHOP_DATA from './ShopData';
const Shop = () => {
    const products = SHOP_DATA;
 
    return (
        <div className='shop-page'>
            {products.map((product) =>(
                <ProductPreview key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default Shop;