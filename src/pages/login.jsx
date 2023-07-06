import AuthLayout from '../components/templates/AuthLayout';
import Login from '../components/organisms/Login';
import Footer from '../components/organisms/Footer';
import ImageCarousel from '../components/templates/Carousel';



export default function LoginPage() {

    return (
        <>

            <div className="relative w-full h-10 justify-center items-center bg-white">

                <ImageCarousel></ImageCarousel>


                <div className="absolute top-32 right-[340px]" >
                    <AuthLayout title="My Inventory" desc="Login" type="login" size="w-[370px]">
                        <Login />
                    </AuthLayout>

                </div>


            </div>
        </>
    )
}