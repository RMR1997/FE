import AuthLayout from "../components/templates/AuthLayout";
import Login from "../components/organisms/Login";
import ImageCarousel from "../components/templates/Carousel";
import AuthLogo from "../components/templates/AuthLogo";
import AuthLayout2 from "../components/templates/AuthLayout2";
import BurgerMenu from "../components/organisms/Menu";

export default function LoginPage() {
    return (
        <>
            <div className="relative flex flex-col md:flex-row w-full h-screen md:w-full md:min-h-screen md:bg-white">
                {/* <ImageCarousel /> */}
                <div className="md:block w-full md:w-1/2 h-screen md:bg-[#11A7DC]">
                    <AuthLogo />
                </div>
                <div className="flex w-full md:w-1/2 justify-center items-center h-screen bg-white">
                    <div className="flex justify-center items-center w-11/12 md:w-1/2">
                        <div className="w-full h-full bg-white sticky p-16 md:p-10">
                            <img className="w-full" src="public/image/logo.png" alt="image" />
                            <p className="text-center text-2xl font-medium text-slate-900 mb-0 md:mb-4"></p>
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}