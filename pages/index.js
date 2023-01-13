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
          <div className="hero-info">
            <div className="hero-left">
              <p className="hero-left-title">
                Multifunctional inventory software that allows you to fully automate the work of the store
              </p>
              <h2>
                Use Your Phone as a POS Terminal
              </h2>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;
