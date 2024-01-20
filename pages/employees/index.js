import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Employees.module.css";

export const getStaticProps = async () => {
  //fetches data from an external api
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { employees: data },
  };
};

const Employees = ({ employees }) => {
  return (
    <>
      <Head>
        <title>Employees List | All employees</title>
        <meta name="keywords" content="employees" />
      </Head>
      <div>
        <h1>All Employees</h1>
        {employees.map((employee) => (
          <Link href={"/employees/" + employee.id} key={employee.id}>
            <a className={styles.single}>
              <h3>{employee.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Employees;
