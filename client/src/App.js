import './App.css';
import Header from './components/Header/Header';
import Header2 from './components/Header/Header-sticky';
import MainCards from './components/Home/Home';
import Footer from './components/Footer/Footer';
import DetailsPage from './pages/DetailsPage';
import NotMatch from './pages/NotMatch';
import { Route, Switch } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import ScrollToTop from './components/ScrollToTop';
import SignUpPage from './pages/SignUpPage';
import ShowAllPictures from './components/Pictures/ShowAllPictures'; // von Wilhelmine 04.10.
import Aboutus from './components/Footer/Aboutus';//von Marine
import Support from './components/Footer/supportpage/Support';//von Marine
import Formcontact from './components/Footer/formcontact'; //von marine
import Overview from './components/Overview/Overview'; // von Wilhelmine 10.10.

function App() {
  return (
    <ScrollToTop>
      <Switch>
        
        <Route exact path="/">
          <div className="App">
            <Header />
            <Header2 />
            <Overview />
            <MainCards />
            <Footer />
          </div>
        </Route>

        {/* von Wilhelmine 05.10. */}
        <Route path="/details/:id/showAllPictures" component={ShowAllPictures} />

        <Route path="/details/:id">
          <Header2 />
          <DetailsPage />
          <Footer />
        </Route>

        {/* //von Salem */}
        <Route path="/signin">
          <SignInPage />
        </Route>

        {/* //von Salem */}
        <Route path="/signup">
          <SignUpPage />
        </Route>

        {/* von marine */}
        <Route path="/aboutus">
          <Header />
          <Aboutus />
          <Footer />
        </Route>

        {/* von marine */}
        <Route path="/support">
          <Header />
          <Support />
          <Footer />
        </Route>

        {/* von marine */}
        <Route path="/contact">
          <Header />
          <Formcontact />
          <Footer />
        </Route>





        {/* von Wilhelmine 05.10. */}
        <Route path="*">
          <Header />
          <NotMatch />
          <Footer />
        </Route>

      </Switch >
    </ScrollToTop >

  );
}

export default App;