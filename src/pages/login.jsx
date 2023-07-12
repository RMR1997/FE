import AuthLayout from '../components/templates/AuthLayout';
import Login from '../components/organisms/Login';
import ImageCarousel from '../components/templates/Carousel';
import AuthLogo from '../components/templates/AuthLogo';

export default function LoginPage() {

    return (
        <>
            <div className="relative w-full h-10 justify-center items-center bg-white">
                {/* <ImageCarousel /> */}
                <AuthLogo />
                {/* <div className="bg-white flex flex-col justify-center absolute top-2 ml-20">
                        <img src="/image/dg-3.svg" className="w-48 h-60"></img>
                        <img src="/image/ag-1.png" className="w-60 h-60"></img>
                    </div> */}
                <div className="absolute top-40 right-[140px]" >
                    <AuthLayout title="MY INVENTORY" type="login" size="w-[370px]">
                        <Login />
                    </AuthLayout>
                </div>
            </div>
        </>
    )
}