"use client";

import CookieCard from "./components/cookie";
import Landing from "./components/landing";

export default function Home({ addToCart }: { addToCart: () => void }) {

  return (<div><Landing />
    <div id="cookies" className="mx-[1rem] md:mx-[3rem]">
    <h2 className="my-8 text-6xl text-center font-medium" style={{fontFamily: "var(--font-oswald)"}}>Cookies</h2>
    <p className="my-8 text-xl text-center font-medium" style={{fontFamily: "var(--font-assistant)"}}>Because you deserve a little treat. Or two.</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-3">
    <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={addToCart}
      />
      <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={addToCart}
      />
      <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={addToCart}
      />
      <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={addToCart}
      />
      <CookieCard
      imageUrl="/images/cookies/sample-cookie-stack-lav.png"
      name="Midnight S'more"
      price="Rs. 180"
      onAddToCart={addToCart}
      />
  </div>
  </div>
  </div>); }