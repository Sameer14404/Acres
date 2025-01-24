import Blogs from "./Components/Blogs";
import Details from "./Components/Details";
import EveryThing from "./Components/EveryThing";
import Footer from "./Components/Footer";
import Localites from "./Components/Localites";
import Navbar from "./Components/Navbar";
import NewProperties from "./Components/NewProperties";
import OurWork from "./Components/Ourwork";
import QNA from "./Components/QNA";
import TopInvestments from "./Components/TopInvestment";
import Trending from "./Components/Trending";

export default function App() {
  return (
   <>
    <Navbar/>
    <Details/>
    <Trending/>
    <TopInvestments/>
     <EveryThing/>
    <Localites/>
    <NewProperties/>
    <OurWork/>
    <Blogs/>
      
    <QNA/>
    <Footer/>
   </>
  )
}