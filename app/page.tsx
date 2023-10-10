import Header from "./components/Header";
import Form from "./components/input/Form";
import getCurrentUser from "./functions/getCurrentUser";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <>
      <Header label="Home" disableBack />
      <Form user={user} placeholder="Write Something!" />
    </>
  );
}
