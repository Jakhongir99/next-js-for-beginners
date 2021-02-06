import Link from "next/link";
const CleanRoom = () => {
  return (
    <div>
      <h1>CLEAN ROOM</h1>{" "}
      <Link href="/services">
        <a className="goUsers">Go to services</a>
      </Link>
    </div>
  );
};

export default CleanRoom;
