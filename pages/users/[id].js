import { useRouter } from "next/router";
import cl from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <div className={cl.user}>
        <h1>Пользователь c id {query.id}</h1>
        <div>Имя пользователя {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
