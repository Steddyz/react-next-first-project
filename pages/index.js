import Link from "next/link";

const Index = () => {
  return (
    <div>
      <div className="navbar">
        <Link href="/" legacyBehavior>
          <a className="link">Главная</a>
        </Link>
        <Link href="/users" legacyBehavior>
          <a className="link">Список пользователей</a>
        </Link>
      </div>

      <h1>Main Page</h1>
      <style jsx>{`
        .navbar {
          background-color: orange;
          padding: 10px;
        }
        .link {
          text-decoration: none;
          margin-right: 10px;
          color: #fff;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default Index;
