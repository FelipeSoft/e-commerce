import { BiSupport } from 'react-icons/bi';
import { CardList } from './components/CardList';
import { Master } from './components/master';
import { Card } from './components/Card';

const App = () => {
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
                                    icon={<BiSupport className="text-4xl mr-4" />}
                                    label="Suporte Gratuito"
                                />
                                <Card
                                    icon={<BiSupport className="text-4xl mr-4" />}
                                    label="Suporte Gratuito"
                                />
                            </CardList>
                        </Master.Versatile>
                    </Master.Main>
                <Master.Footer />   
            </Master.Root>
        </div>
    )
}

export default App;