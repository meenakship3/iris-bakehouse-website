import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

interface CookieCardProps {
  imageUrl: string;
  name: string;
  price: string;
  onAddToCart?: () => void;
}

const CookieCard: React.FC<CookieCardProps> = ({ imageUrl, name, price, onAddToCart }) => {
  return (
    <Card style={{ background: '#F4F3FF' }} className="w-full max-w-xs mx-auto p-0 rounded-2xl border border-[var(--foreground)]">
      <CardContent className="flex flex-col items-center p-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-56 object-cover rounded-t-2xl mb-2"
        />
        <CardTitle style={{fontFamily: "var(--font-oswald)", color: "var(--foreground)"}} className="text-2xl font-semibold mb-2 leading-tight">
          {name}
        </CardTitle>
        <div style={{color: "var(--foreground)", fontFamily: "var(--font-assistant)"}} className="text-xl">{price}</div>
      </CardContent>
      <CardFooter className="flex justify-center border-0 pb-2 pt-0">
        <button
          onClick={onAddToCart}
          style={{background: "var(--foreground)"}}
          className="text-white rounded-full px-6 py-2 text-sm font-semibold"
        >
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default CookieCard;
