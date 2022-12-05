import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import TopCollection from "./component/TopCollection";
import OfferBanner from "./component/OfferBanner";
import Sliders from "./component/Sliders";
import SocialSec from "./component/SocialSec";
import Footer from "./component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsaction } from "./redux/actions/itemsaction";
import Icons from "./component/Icons";

export default function App() {
  let dispatch = useDispatch();
  let userList = useSelector((state) => state.itemsmodule);
  let { datas } = userList;

  useEffect(() => {
    dispatch(itemsaction());
  }, [dispatch]);

  return (
    <div className="main-background">
      <div className="background_"></div>
      <div className="mobile-bottom-option">
        <Icons />
      </div>
      <Navbar />
      <Banner />
      <TopCollection setdata={datas} />
      <OfferBanner />
      <Sliders givedata={datas} />
      <SocialSec />
      <Footer />
    </div>
  );
}
