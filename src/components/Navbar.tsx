import Link from 'next/link'

const Navbar = () => {
  return (
    <header>
      <nav className='flex items-center p-4 justify-between'>
        <div>
          <h1>PeggyBoadi Esq</h1>
        </div>
        <div className='flex items-center gap-3'>
          <Link href="/" >Home</Link>
          <Link href="/" >Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
