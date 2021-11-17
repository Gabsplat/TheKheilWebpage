
/* COMPONENTS */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Img from './components/Img'

/* PAGES */
import Home from './pages/Home';
import VoicesOfTheDomain from './pages/VoicesOfTheDomain';
import TheCivilization from './pages/TheCivilization';
import Story from './pages/Story';
import Cards from './pages/Cards';
import Card from './pages/Card';
import Chapters from './pages/Chapters';
import Chapter from './pages/Chapter';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

/* LIBS */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/* SVGS */
import OpenSeaLogo from './assets/imgs/svg/opensea.svg'
import InstagramLogo from './assets/imgs/svg/instagram.svg'
import TwitterLogo from './assets/imgs/svg/twitter.svg'
import DiscordLogo from './assets/imgs/svg/discord.svg'

function App() {

  return (
    <Router basename="/">
      <Navbar />
      <Switch>
        <Route exact path="/cards">
          <section className="flex-1 flex flex-col px-6 tablet:px-12 lg:px-36 xl:px-64 2xl:px-96 landscape:px-6"> 
            <Cards />
          </section>
          <Footer />
        </Route>
        <Route path="/cards/:id">
          <section className="flex-1 justify-center flex flex-col px-6 tablet:px-12 lg:px-36 xl:px-52 2xl:px-96 landscape:px-6"> 
            <Card />
          </section>
          <Footer />
        </Route>
        <Route exact path="/chapters">
          <section className="flex-1 flex flex-col px-6 tablet:px-12 lg:px-36 xl:px-64 2xl:px-96 landscape:px-6"> 
            <Chapters />
          </section>
          <Footer />
        </Route>
        <Route path="/chapters/:id">
          <section className="flex-1 justify-center flex flex-col px-6 tablet:px-12 lg:px-36 xl:px-52 2xl:px-96 landscape:px-6"> 
            <Chapter />
          </section>
          <Footer />
        </Route>
        <Route path="/story">
          <section className="flex-1 flex flex-col px-6 tablet:px-12 lg:px-36 xl:px-52 2xl:px-96 landscape:px-6"> 
            <Story />
          </section>
          <Footer />
        </Route>
        <Route path="/voicesofthedomain">
          <section className="flex-1 flex flex-col px-6 tablet:px-12 lg:px-36 xl:px-64 2xl:px-96 landscape:px-6"> 
            <VoicesOfTheDomain />
          </section>
          <Footer />
        </Route>
        <Route path="/thecivilization">
          <section className="flex-1 flex flex-col px-6 tablet:px-12 lg:px-36 xl:px-64 2xl:px-96 landscape:px-6"> 
            <TheCivilization />
          </section>
          <Footer />
        </Route>
        <Route path="/about">
          <section className="flex-1 flex flex-col px-6 tablet:px-12 lg:px-36 xl:px-64 2xl:px-96 landscape:px-6"> 
            <About />
          </section>
          <Footer />
        </Route>
        <Route exact path="/">
          <section className="flex-1 flex flex-col px-6 tablet:px-12 lg:px-40 xl:px-64 2xl:px-96 landscape:px-6"> 
            {/* RRSS - HOME */}
            <div className="rrss absolute w-max bottom-20 tablet:bottom-1/12 right-3 smobile:right-6 mobile:left-7 xl:left-16 lg:top-1/2 transform md:-translate-y-1/2 flex flex-col justify-between h-52 md:h-64 self-center">
                  <a rel="noopener noreferrer" target="_blank" href="https://opensea.io/the_kheil"><Img alt="OpenSea Link" className="w-6 cursor-pointer transition ease-in duration-200 transform hover:scale-125" src={OpenSeaLogo}/></a>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/the_kheil/"><Img alt="Instagram Link" className="w-6 cursor-pointer transition ease-in duration-200 transform hover:scale-125" src={InstagramLogo}/></a>
                  <a rel="noopener noreferrer" target="_blank" href="https://discord.com/invite/QUyB5dTtfg"><Img alt="Discord Link" className="w-6 cursor-pointer transition ease-in duration-200 transform hover:scale-125" src={DiscordLogo}/></a>
                  <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/the_kheil"><Img alt="Twitter Link" className="w-6 cursor-pointer transition ease-in duration-200 transform hover:scale-125" src={TwitterLogo}/></a>
            </div>
            <Home />
          </section>
        </Route>
        <Route path="*">
          <section className="flex-1 flex flex-col pl-6 pr-6 tablet:pl-12 tablet:pr-12 md:pl-44 md:pr-44 xl:px-64 landscape:pl-6 landscape:pr-6"> 
            <NoMatch />
          </section>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
