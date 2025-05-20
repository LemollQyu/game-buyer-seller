import { Suspense } from "react";
import BuyerClient from "./buyerClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuyerClient />
    </Suspense>
  );
}
