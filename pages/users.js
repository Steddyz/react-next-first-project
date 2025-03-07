import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users page"}>
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
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users } };
}
