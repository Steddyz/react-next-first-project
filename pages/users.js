import Link from "next/link";
import { useState } from "react";

const users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Steddy",
    },
    {
      id: 2,
      name: "Artem",
    },
  ]);

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

export default users;
