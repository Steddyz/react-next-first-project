import A from "../components/A";

const Index = () => {
  return (
    <div>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Список пользователей" />
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
