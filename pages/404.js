import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 30000);
  }, []);
  return (
    <div>
      <h4>Ooop....</h4>
      <p>PAGE NOT FOUND PLEASE GO BACK</p>
      <Link href="/">
        <a className="goHome"> GO HOME</a>
      </Link>
    </div>
  );
};

export default NotFound;
