import { Master } from "../src/components/master";

const App = () => {
    return (
        <div className="w-full">
            <Master.Root>
                <Master.Header />
                    <Master.Main>
                        <Master.Aside />
                        <Master.Versatile />
                    </Master.Main>
                <Master.Footer />   
            </Master.Root>
        </div>
    )
}

export default App;