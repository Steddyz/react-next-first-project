import { useRouter } from "next/router";

export default function () {
  const { query } = useRouter();

  return <div>Пользователь c id {query.id}</div>;
}
