import React from "react";
// import { Hero } from "../../components/Hero";
import { Menu } from "../../components/Menu";
// import { Hero } from "../../components/Hero";
import { News } from "../../components/News";
import { Product } from "../../components/Product/Product";
import { Brand } from "../../components/Brand";
import { Products } from "../../components/Products";

export const Home = () => {
  return (
    <div className="bg-black">
      {/* <section>
        <Hero />
      </section> */}
      <section>
        <Menu />
      </section>
      <section>
        <News />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <Brand />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
};
