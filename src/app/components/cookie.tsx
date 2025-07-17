import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useCart } from "./CartContext";

interface CookieCardProps {
  imageUrl: string;
  name: string;
  price: string;
  onAddToCart?: () => void;
}

export default function CookieCard({ imageUrl, name, price }: CookieCardProps) {
  const { addToCart } = useCart();
  return (
    <Card style={{ background: 'var(--lavender)' }} className="w-full md:max-w-xs mx-auto p-0 rounded-2xl border border-[var(--foreground)]">
      <CardContent className="flex flex-col items-center p-4 pt-0 pb-0 md:p-0">
        <div className="relative w-full h-56 mb-2">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, 25vw"
            priority={false}
          />
        </div>
        <CardTitle style={{fontFamily: "var(--font-oswald)", color: "var(--foreground)"}} className="text-2xl font-semibold mb-2 leading-tight">
          {name}
        </CardTitle>
        <div style={{color: "var(--foreground)", fontFamily: "var(--font-assistant)"}} className="text-xl">{price}</div>
      </CardContent>
      <CardFooter className="flex justify-center border-0 pb-2 pt-0">
        <button
          onClick={addToCart}
          style={{background: "var(--foreground)"}}
          className="text-white rounded-full px-6 py-2 text-sm font-semibold hover:opacity-90 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};


