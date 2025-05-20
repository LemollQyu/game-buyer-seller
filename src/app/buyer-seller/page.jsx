import { Suspense } from "react";
import BuyerClient from "./BuyerClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuyerClient />
    </Suspense>
  );
}
