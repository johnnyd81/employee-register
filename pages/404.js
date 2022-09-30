import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter(); //returns a router object we can use i.e. in this case the router constant

  useEffect(() => {
    setTimeout(() => {
      //router.go(-1) would be like pressing the back button
      router.push("/"); //goes to the homepage after 3 seconds
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooooops....</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
