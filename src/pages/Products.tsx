import { Master } from "../components/master/index";
import { ProductView } from "../components/product/ProductView";

const Products = () => {
    return  (
        <div className="w-full">
            <Master.Root>
                <Master.Header/>
                <Master.Main>
                    <Master.Aside/>
                    <Master.Versatile>
                        <ProductView/>
                    </Master.Versatile>
                </Master.Main>
                <Master.Footer/>
            </Master.Root>
        </div>
    )
}


export default Products;