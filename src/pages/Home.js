import React, { createRef } from "react";
//components
import Hero from "../components/Hero";
import ProductTypes from "../components/ProductTypes";
import ProductFeatures from "../components/ProductFeatures";
import ProductDetails from "../components/ProductDetails";
import ProductTechnology from "../components/ProductTechnology";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../layouts/Footer";

function Home() {
  const ref = createRef();

  const handleScroll = () =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  return (
    <main>
      <Hero handleScroll={handleScroll} />
      <ProductTypes ref={ref} />
      <ProductFeatures />
      <ProductDetails />
      <ProductTechnology />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;
