'use client'


import Image from "next/image";
import styles from "./page.module.css";
import Contador from "./Contador.js"
import Teclado from "./Teclado"
import Usuarios from "./Usuarios"

export default function Home() {
  return (
    <div>
      <Contador />
      <Teclado />
      <Usuarios />
    </div>
  );
}
