import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <main className="">
            <section className="h-screen grid place-items-center">
                <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                    <h4 className="font-bold text-2xl">Sign in</h4>
                    <LoginForm/> 

                    <p className="text-center text-xs text-gray-600">Or</p>

                    <Link className="underline text-sm mx-auto block text-gray-600 mt-4 text-center" href="/register">

                        Create New Account

                    </Link>
                </div>
            </section>
        </main>
    );
};

export default LoginPage;