import { BiMoney, BiSupport, BiWorld } from 'react-icons/bi';
import { CardList } from '../components/CardList';
import { Master } from '../components/master';
import { Card } from '../components/Card';
import { ProductList } from '../components/ProductList';
import { Product } from '../components/Product';
import { products } from '../data/products';

const Index = () => {
    return (
        <div className="w-full">
            <Master.Root>
                <Master.Header />
                <Master.Main>
                    <Master.Aside />
                    <Master.Versatile>
                        <Master.Slider />
                        <CardList>
                            <Card
                                icon={<BiSupport className="text-4xl mr-4" />}
                                label="Suporte Gratuito"
                            />
                            <Card
                                icon={<BiMoney className="text-4xl mr-4" />}
                                label="Cashback & Tokens"
                            />
                            <Card
                                icon={<BiWorld className="text-4xl mr-4" />}
                                label="Worldwide Shipping"
                            />
                        </CardList>
                        <ProductList>
                            {products.map(element => {
                                return (
                                    <Product 
                                        name={element.name} 
                                        rating={element.rating} 
                                        price={element.price} 
                                        indicated={element.indicated} 
                                        image={element.image}   
                                        discount={element.discount}                             
                                    />
                                )
                            })}
                        </ProductList>
                    </Master.Versatile>
                </Master.Main>
                <Master.Footer />   
            </Master.Root>
        </div>
    )
}

export default Index;