import Link from "next/link";
import cl from "../styles/link.module.css";

export default function A({ text, href }) {
  return (
    <Link href={href} legacyBehavior>
      <a className={cl.link}>{text}</a>
    </Link>
  );
}
