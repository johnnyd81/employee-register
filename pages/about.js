import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Employee Register | About</title>
        <meta name="keywords" content="employees" />
      </Head>
      <div className="about">
        <h1>About</h1>
        <p>This is a practice app for next.js</p>

        <style jsx>
          {`
            .about {
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default About;
