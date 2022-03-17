import Link from "next/link"
import DarkLayout from "../Components/layouts/DarkLayout"
import MainLayout from '../Components/layouts/MainLayout'


export default function AboutPage() {
  
  return (
    <>
       <h1 className={"title"}>
          Ir <Link href="/" replace>Home</Link>
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/about.jsx</code>
        </p>
    </>

  )
}


AboutPage.getLayout = function getLayout(page: JSX.Element){
  return ( 
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}