import Image from 'next/image';
import Link from 'next/link';
import SignInOut from './SignInOut';

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">

                    <Image src="/logo.png" alt="Logo" width={120} height={40} className="object-cover" />

                </Link>

                <ul className="flex gap-4 text-sm text-gray-500">
                    <li className="py-2">
                        <Link href="/">
                            Home
                        </Link>
                    </li>

                    <li className="py-2">
                        <Link href="/">
                            Recipe
                        </Link>
                    </li>

                    <li className="py-2">
                        <Link href="/about">
                            About us
                        </Link>
                    </li>

                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                       <SignInOut/> 
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
