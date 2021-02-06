import Link from "next/link";

export default function carWash() {
  return (
    <div>
      <h1>CAR WASH</h1>
      <Link href="/services">
        <a className="goUsers">Go to services</a>
      </Link>
    </div>
  );
}
