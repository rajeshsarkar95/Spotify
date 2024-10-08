import Navbar from "./components/Navbar";
import style from "./Home.module.css";
import Mainbar from "./components/Maincontent/Maincon";
import Footer from "./components/footer/footer";


export default function Home() {
  return (
    <>
      <div classname={style.Maincontainer}>
        <Mainbar/>
        <Navbar/>
        <Footer/>
      </div>
    </>
  );
}
