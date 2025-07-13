"use client";

import CookieCard from "./components/cookie";
import Header from "./components/header";

export default function Home() {
  return (<div id="cookies" className="mx-[1rem] md:mx-[3rem]">
    <h2 className="my-8 text-6xl text-center font-medium" style={{fontFamily: "var(--font-oswald)"}}>Cookies</h2>
    <p className="my-8 text-xl text-center font-medium" style={{fontFamily: "var(--font-assistant)"}}>Gooey, thick and freshly baked. Honestly, what more could you ask for?</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-3">
    <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={() => {
        console.log("Added to cart!")
      }}
      />
      <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={() => {
        console.log("Added to cart!")
      }}
      />
      <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={() => {
        console.log("Added to cart!")
      }}
      />
      <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={() => {
        console.log("Added to cart!")
      }}
      />
      <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={() => {
        console.log("Added to cart!")
      }}
      />
  </div>
  </div>); }