import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});

export { poppins }