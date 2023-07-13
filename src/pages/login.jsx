import AuthLayout from '../components/templates/AuthLayout';
import Login from '../components/organisms/Login';
import ImageCarousel from '../components/templates/Carousel';
import AuthLogo from '../components/templates/AuthLogo';
import AuthLayout2 from '../components/templates/AuthLayout2';

export default function LoginPage() {

    return (
        <>
            <div className="relative flex w-full h-screen  bg-[#EEEEEE]">
                {/* <ImageCarousel /> */}
                <div className='w-1/2 h-screen bg-[#11A7DC]' >
                    <AuthLogo />

                </div>
                <div className="flex w-1/2 justify-center items-center h-screen left-100 bg-white" >
                    <div className='flex justify-center items-center h-fit w-1/2'>
                        <div className="w-full h-full bg-white p-10"  >
                            <img className='w-full' src="public/image/logo.png" alt="image" />
                            <p className="text-center text-2xl font-medium text-slate-900 mb-4"></p>
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}