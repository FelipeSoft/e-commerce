import { Master } from './components/master';

const App = () => {
    return (
        <div className="w-full">
            <Master.Root>
                <Master.Header />
                    <Master.Main>
                        <Master.Aside />
                        <Master.Versatile>
                            <Master.Slider></Master.Slider>
                        </Master.Versatile>
                    </Master.Main>
                <Master.Footer />   
            </Master.Root>
        </div>
    )
}

export default App;