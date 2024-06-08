import Form from "./components/Form";
import BgImage from '../../assets/bgImage.svg'

const Register = () => {
    return (
        <div className='flex h-svh w-svw bg-[#399C7E]'>
            <div className="h-full w-1/2 bg-[#399C7E] flex justify-center items-center">
                <div className="flex flex-col">
                    <img src={BgImage} alt="bg-image" className="w-10/12" />
                    <h1 className=" text-white font-bold text-4xl mt-10 text-center">Register</h1>
                    <p className="text-[#e4e4e4] mt-4 text-center">Save your user data here!</p>
                </div>
            </div>
            <div className="h-full w-1/2 bg-white flex justify-center items-center">
                <Form />
            </div>
        </div>
    )
}

export default Register;