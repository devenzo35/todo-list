import authenticatedRoute from "../components/auth/AuthenticatedRoute";
import Layout from "../components/Layout";
import Todo from "../components/Todo";

function Home() {
  return (
    <div>
      <Layout>
        <Todo />
      </Layout>
    </div>
  );
}

export default authenticatedRoute(Home, { pathAfterFailure: "/login" });
