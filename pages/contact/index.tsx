import Head from 'next/head'
import Link from "next/link"
import MainLayout from '../../Components/layouts/MainLayout'

export default function ContactPage() {
  
  return (
    <MainLayout>
    <main>
    <h1 className={"title"}>
            Contact Page <br />
          Ir a <Link href="/" replace>Home</Link>
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/about.jsx</code>
        </p>
    </main>
       
    </MainLayout>
  )
}
