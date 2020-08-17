import React from "react";
import Image from "components/Image";
import style from "./card.module.scss";

export default function Card({ val }) {
  return (
    <a className={style.card} key={val.id} href={val.links.html}>
      <Image className={style.ikku} url={val.urls.small} />
      <div className={style.dot} style={{ backgroundColor: val.color }}></div>
    </a>
  );
}
