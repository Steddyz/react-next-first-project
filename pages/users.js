import Link from "next/link";

const Users = ({ users }) => {
  return (
    <div>
      Список пользователей
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} legacyBehavior>
            <a>
              <li key={user.id}>{user.name}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users } };
}
