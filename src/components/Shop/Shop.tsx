import { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Preloader from "../Preloader/Preloader";
import ShopArea from "./ShopArea";

export default function Shop() {
  const [load] = useState(true);

  return (
    <>
      <Preloader load={load} />
      <Breadcrumbs page="shop" />
      <ShopArea/>
    </>
  )
}