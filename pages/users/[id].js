import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

const SingleUser = ({ users }) => {
  return (
    <div>
      <h6>
        Username: <span>{users.username}</span>
      </h6>
      <h6>
        Email: <span>{users.email}</span>
      </h6>
      <h6>
        Phone: <span>{users.phone}</span>
      </h6>
      <Link href="/users">
        <a className="goUsers">Go to watch users list</a>
      </Link>
    </div>
  );
};

export default SingleUser;
