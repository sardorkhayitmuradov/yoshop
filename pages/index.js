import { getSession, signIn, signOut } from "next-auth/react";
import Button from "../components/Button/Button";
import Arrowleft from "../public/assets/images/left.svg";
import ArrowRight from "../public/assets/images/right.svg";


export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

function Home() {
 
  return (
    <main className="grow">
      <section
        className={`hero pb-[263px] bg-[url("../public/assets/images/hero-image.png")] bg-no-repeat bg-right-top pt-[208px]`}
      >
        <div className="site-container flex flex-col justify-center">
          <div className="hero-info flex justify-between items-center mb-[200px]">
            <div className="hero-left max-w-[583px] w-full">
              <p className="hero-left-title mb-[40px] max-w-[410px] w-full text-[18px] leading-[180%] font-normal">
                Multifunctional inventory software that allows you to fully
                automate the work of the store
              </p>

              <h2 className="mb-[57px] font-bold text-[56px] text-[#FC7941]">
                Use Your Phone as a POS Terminal
              </h2>

              <Button
                className={
                  "pt-[16px] pb-[26px] px-[123px] bg-[#4F46E5] border-[1px] border-solid border-[#94A3B8] rounded-[10px] font-bold leading-[140%] text-xl"
                }
              >
                Try for free
              </Button>
            </div>
          </div>
          <div className="flex items-center max-w-[60px] w-full justify-between self-center justify-self-end">
            <Image
              src={Arrowleft}
              alt="site-logo"
              width={20}
              height={20}
              className="mb-[30px]"
            />
            <Image
              src={ArrowRight}
              alt="site-logo"
              width={20}
              height={20}
              className="mb-[30px]"
            />
          </div>
        </div>
      </section>
     
    </main>
  );
}

export default Home;
