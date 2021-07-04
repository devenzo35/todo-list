import authenticatedRoute from "../components/auth/authenticatedRoute";
import Layout from "../components/Layout";
import Todo from "../components/Todo";
import WelcomeMsg from "../components/WelcomeMsg";

function Home() {
  return (
    <div>
      <Layout>
        <WelcomeMsg />
        <Todo />
      </Layout>
    </div>
  );
}

export default authenticatedRoute(Home, { pathAfterFailure: "/auth/login" });
