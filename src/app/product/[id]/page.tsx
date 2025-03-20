"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ARRIVALS_LIST, SELLING_LIST, LIKE_LIST, SORTED_LIST } from "../../../utils/helper";
import Header from "@/components/common/Header";
import Reviews from "@/components/Review";
import Like from "@/components/Like";
import Footer from "@/components/Footer";

type Product = {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: string;
  colors?: string[];
};

type CartItem = {
  id: number;
  image: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
};

type ProductDetailProps = {
  params: { title: string };
};

const Page: React.FC<ProductDetailProps> = ({ params }) => {
  const router = useRouter();
  const [item, setItem] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("Large");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [alertMessage, setAlertMessage] = useState<string>("");

  useEffect(() => {
    const slug = decodeURIComponent(params.title).trim().toLowerCase();
    const allData: any[] = [...ARRIVALS_LIST, ...SELLING_LIST, ...LIKE_LIST];
    const foundItem = allData.find((p) => p.title.toLowerCase() === slug);

    if (foundItem) {
      setItem(foundItem);
      setSelectedColor(foundItem.colors?.[0] ?? "");
    }
  }, [params]);

  const handleAddToCart = () => {
    if (!item) return;

    if (!selectedColor) {
      setAlertMessage("Please select a color.");
      return;
    }

    if (!selectedSize) {
      setAlertMessage("Please select a size.");
      return;
    }

    const cartItem: CartItem = {
      id: item.id,
      image: item.image,
      name: item.title,
      price: item.price,
      color: selectedColor,
      size: selectedSize,
      quantity,
    };

    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  const closeAlert = () => setAlertMessage("");

  if (!item) return <p className="text-center text-xl font-bold">Product not found</p>;

  const modifiedImages = [{ image: item.image, alt: item.title }, ...SORTED_LIST.slice(1, 3)];
  const colors: string[] = item.colors || ["#4E5D48", "#2E2F35", "#1E293B"];
  const sizes: string[] = ["Small", "Medium", "Large", "X-Large"];

  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-4">
        <h3 className="font-normal text-base text-black/60 pb-10 xl:text-left md:text-center text-left">
          Home &gt; Shop &gt; Men <span className="text-black">&gt; T-shirts</span>
        </h3>

        {alertMessage && (
          <div className="fixed top-5 right-5 bg-red-500 text-white px-6 py-4 rounded-lg z-50">
            {alertMessage}
            <button className="ml-4 font-bold" onClick={closeAlert}>
              ✕
            </button>
          </div>
        )}

        <div className="flex items-center w-full max-xl:flex-col gap-10">
          <div className="flex max-lg:flex-col-reverse gap-4">
            <div className="flex lg:flex-col gap-4">
              {modifiedImages.map((img, i) => (
                <Image
                  key={i}
                  src={img.image}
                  alt={img.alt}
                  width={152}
                  height={167}
                  className={`rounded-[20px] cursor-pointer md:w-[152px] w-[111px] md:h-[167px] h-[106px] ${selectedImageIndex === i ? "border border-black" : ""
                    }`}
                  onClick={() => setSelectedImageIndex(i)}
                />
              ))}
            </div>
            <Image
              src={modifiedImages[selectedImageIndex].image}
              alt={modifiedImages[selectedImageIndex].alt}
              width={444}
              height={530}
              className="rounded-xl max-sm:max-w-[358px] max-sm:h-[290px]"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <p className="text-lg mt-6">Select Colors</p>
            <div className="flex gap-3 mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color ? "border-black" : ""
                    }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <p className="text-lg mt-6">Choose Size</p>
            <div className="flex gap-3 mt-2 border-b border-black/10 pb-6">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-6 rounded-full cursor-pointer ${selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex gap-5 mt-6">
              <div className="flex items-center bg-[#F0F0F0] rounded-full">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-2xl font-bold">
                  -
                </button>
                <span className="font-medium text-base">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-2xl font-bold">
                  +
                </button>
              </div>

              <button onClick={handleAddToCart} className="bg-black text-white py-3 px-16 rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Reviews />
      <Like />
      <Footer />
    </>
  );
};

export default Page;
