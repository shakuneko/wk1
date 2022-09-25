import { Layout,Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

const { Header, Content, Footer ,Sider} = Layout;


function Home() {
  return (
    <Layout className="container main-layout">
      <Sider
          className="layout-sider"
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
      >
          <div className="ham">
              <Menu 
                    className="menu"
                    defaultSelectedKeys={['1']}>
                <Menu.Item key="1" className="menu-item">
                  <NavLink to="/" >
                    主頁
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2" className="menu-item">
                  <NavLink to="/" >
                    關於我
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3" className="menu-item">
                  <NavLink to="/" >
                    平面設計
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="4" className="menu-item">
                  <NavLink to="/" >
                    手繪
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="5" className="menu-item">
                  <NavLink to="/" >
                    建模
                  </NavLink>
                </Menu.Item>

              </Menu>
          </div>
        </Sider>
    <Layout>
      <Header className="layout-header">
        <AppHeader title="Yujaa | 作品集"/>
      </Header>
      <Content className="layout-content">
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Home;