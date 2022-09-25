import { Card }from "antd"
import { Link }from 'react-router-dom';


export default function ProductItem( { product }) {
    return (
  
            <Card className="bg-gray product">
                <Link to='/'>
                    <img   
                        style={{width:'100%'}}
                        src={product.image}
                        alt={product.name} />
                </Link>
                    <div className="product-info">
                        <h6 className="product-category">
                            {product.category}
                        </h6>
                        <h2 className="product-name">
                            {product.name}
                        </h2>

                </div>
            </Card>

    );
  }