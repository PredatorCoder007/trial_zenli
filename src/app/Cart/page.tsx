import Checkout from "@/components/Checkout";
import { Cat } from "lucide-react";


function Cart() {
    return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        <Checkout/>
      </main>
    );
  }

export default Cart