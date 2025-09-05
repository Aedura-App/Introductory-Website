import Link from "next/link"

const Navbar = () => {
  return (
      <header className="bg-secondary text-secondary-content p-4 font-inter tracking-tighter">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <Link href="#home" className="font-bold text-2xl">Team Aedura</Link>

          <div className="flex gap-6 items-center font-semibold">
            <Link href="#about-us" className="rounded-lg p-2">About Us</Link>
            <Link href="#offerings" className="rounded-lg p-2">Offerings</Link>
          </div>

        </div>
      </header>
  )
}
export default Navbar