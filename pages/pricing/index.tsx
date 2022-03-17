
import Link from "next/link"
import MainLayout from "../../Components/layouts/MainLayout"

export default function Pricing() {
  return (
    <MainLayout>
       <h1 className={"title"}>
            <div>Pricing Page</div>
          Ir <Link href="/contact">Contact</Link>
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
