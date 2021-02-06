import Link from "next/link";
export default function index() {
  return (
    <div>
      <h1>SERVICES</h1>
      <ul>
        <li>
          <Link href="/services/car-wash">
            <a>CAR WASH</a>
          </Link>
        </li>
        <li>
          <Link href="/services/clean-room">
            <a>CLEAN ROOM</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
