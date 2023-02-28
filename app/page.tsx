import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline text-blue-800 text-center py-2">
      Hello world!!!
    </h1>
  );
}
