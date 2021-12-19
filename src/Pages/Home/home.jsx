import React from "react";
import Banner from "../../Components/Banner/banner";
import AuxiliarBanners from "../../Components/AuxiliarBanners/auxiliarBanners";
import Showcase from "../../Components/Showcase/showcase";

function Home() {
  return (
    <section>
      <Banner />
      <AuxiliarBanners />
      <Showcase />
    </section>
  );
}
export default Home;
