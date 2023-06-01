import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
  return (
    <>
      <div>
     <Navbar />
      </div>

     
    </>
  );
}

export default Home;