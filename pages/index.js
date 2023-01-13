import { getSession , signIn , signOut } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: {
      session
    },
  };
};

function Home() {
  return (
    <main className="grow">
      <section className="hero">
        <div className="site-container">
          <h1>Main</h1>
        </div>
      </section>
    </main>
  )
}

export default Home;
