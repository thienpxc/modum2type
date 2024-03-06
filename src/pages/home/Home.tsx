import "./home.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AdComponent from "../../components/AdComponent/AdComponent";
import { useEffect, useState } from "react";
import ProductHome from "../../components/producthome/ProductHome";
import MiddleBody from "../../components/middlebody/MiddleBody";
import Carousels from "../../components/Carousels/Carousels";

export default function Home() {
  const [showAd, setShowAd] = useState(false);
  const HOUR_IN_MILLISECONDS = 3600000;
  useEffect(() => {
    const adShown = parseInt(localStorage.getItem("Timestamp") || "");
    const currentTime = new Date().getTime();
    if (!adShown || currentTime - adShown > HOUR_IN_MILLISECONDS) {
      setShowAd(true);
      localStorage.setItem("Timestamp", currentTime.toString());
      setTimeout(() => {
        setShowAd(false);
      }, 20000);
    }
  }, []);
  return (
    <>
      {showAd && <div className="overlay"></div>}
      {showAd && <AdComponent onClose={() => setShowAd(false)} />}

      <div className="home-page">
        <Header />
        <MiddleBody />
        <div className="ProductHome">
          <Carousels />
          <ProductHome />
          <button className="SeeMore">Xem Thêm</button>
        </div>
        <Footer />
      </div>
    </>
  );
}
