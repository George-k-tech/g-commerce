import Link from 'next/link'


function Navbar() {
  return (
    <div className="border border-red-700 items-center pt-4 pb-4">
    <ul className=" flex justify-end space-x-10 cursor-pointer pr-6">
      <div className="container flex justify-items-start">
        <img src="" alt="LOGO" />
      </div>
      <Link href="/" className="hover:underline ">
        Home
        </Link>
      <Link className="hover:underline" href="">Blog</Link>
      <Link className="hover:underline" href="">Profile</Link>
    </ul>
  </div>
  )
}

export default Navbar