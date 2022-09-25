import{Row ,Col} from "antd";
import { Link }from 'react-router-dom';
import ProductItem from "./ProductItem";
import img from '../image/1.png';
import ig from '../image/ig.png';
import tw from '../image/twitter.png';
import mail from '../image/mail.png';
import NavBar from "./NavBar";

export default function ProductList({products}) {
  return (
    <div>
      <NavBar/>
        <div>
          <div className="big-pic-body">
            <img className="big-pic" src={img} alt="Rice"/>
          
            <div>
              <a href="https://www.instagram.com/padaplanet.2022/" className="icon-link">
                <img className="icon-pic" src={ig} alt="Rice"/>
              </a>
                <Link to='/' className="icon-link">
                  <img className="icon-pic" src={tw} alt="Rice"/>
                </Link>
                <Link to='/' className="icon-link">
                  <img className="icon-pic" src={mail} alt="Rice"/>
                </Link>

            </div>
          </div>
        </div>
        <div className="big-pic-down">
        <Row gutter={[32,32]}>
          {products.map(product => (
            <Col
              key={product.id}
              sm={{span:12}}
              lg={{span:8}}
              xl={{span:8}}
              xxl={{span:4}}
            >
            <ProductItem product={product}/>
            </Col>
          ))}
      
        </Row>
        </div>
    </div>
  );
}