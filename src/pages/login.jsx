import AuthLayout from '../components/templates/AuthLayout';
import Login from '../components/organisms/Login';
import Footer from '../components/organisms/Footer';

export default function LoginPage() {
    return (
        <>
            <div className="w-full justify-center items-center bg-white">
                <img src="/image/bg.jpg" className="w-full h-[745px] blur-sm" />
                <div className="absolute top-32 right-[340px]" >
                    <AuthLayout title="My Inventory" desc="Login" type="login" size="w-[370px]">
                        <Login />
                    </AuthLayout>
                    <div className='mt-20'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}