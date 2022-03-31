import CreatePassword from "../pages/Components/CreatePassword"
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Generador de Passsword</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
      </Head>
      <div className="page">
          <CreatePassword/>
      </div>
    </>
  )
}
