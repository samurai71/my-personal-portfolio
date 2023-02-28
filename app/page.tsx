import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline text-blue-800 text-center py-2 font-serif">
      Hello world!!!
    </h1>
  );
}
