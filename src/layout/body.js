import "../assets/style/scss/layout/_grid.scss"
import "../assets/style/scss/modules/_card.scss"
import Menu from "../components/menu.js"
import EthereumCard from "../components/ethereum-card.js"
import BinanceCard from "../components/binance-card.js"
import SheeshaCard from "../components/sheesha-card.js"
import DataCard from "../components/data-card.js"
import SocialIcon from "../components/social-icons.js"

const App_body = () => (
    <section className="container__full appBody">
        <div className="grid__row">
            <div className="grid__col4">
                <EthereumCard />
            </div>
            <div className="grid__col4">
                <SheeshaCard />
            </div>
            <div className="grid__col4">
                <BinanceCard />
            </div>
        </div>


        <div className="grid__row">
            <div className="grid__col6">
                <Menu />
            </div>
            <div className="grid__col6 a_center">
                <DataCard />
            </div>
            <div className="grid__col12">
                <SocialIcon />
            </div>
        </div>
    </section>
);

export default App_body;