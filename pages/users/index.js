import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

const USERS = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h3 className="user__title">USERS</h3>
      {users.map((user) => {
        return (
          <Link href={"/users/" + user.id} key={user.id}>
            <a className="users_href">
              <h4 className="users">{user.name}</h4>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default USERS;
