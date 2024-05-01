import { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Preloader from "../Preloader/Preloader";

export default function Cart() {
  const [load] = useState(true);

  return (
    <>
      <Preloader load={load} />
      <Breadcrumbs page="cart"/>
    </>
  )
}