import "../assets/style/scss/layout/_grid.scss"
import "../assets/style/scss/modules/_card.scss"
import Menu from "../components/menu.js"
import DataCard from "../components/data-card.js"
import SocialIcon from "../components/social-icons.js"
import Header from "../layout/header"
import Footer from "../layout/Footer";

const Ethereum = () => (
    <>
    <Header/>
        <section className="container__full appBody">
        <div className="grid__row">
            <div className="grid__col6">
                <Menu />
            </div>
            <div className="grid__col6 a_center">
                <DataCard />
            </div>
           
        </div>
    </section>
   <Footer/>
    </>
  
);

export default Ethereum;