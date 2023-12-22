import { useContext } from "react";
import Container from "../../Components/Container";
import banner1 from "../../assets/banner1.webp"
import banner2 from "../../assets/dots-circle task.svg"
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const {user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleclick = () =>{
        user? navigate('/dashboard/task'): navigate('/signin')
    }

    return (
        <div>
          
            <section
  className="relative  ">

 
            <Container >
            <div
                className="relative py-5 md:py-0 max-w-screen-xl md:flex md:items-center md:gap-7 lg:flex justify-between items-center lg:gap-24 md:h-96 lg:h-[650px] lg:items-center "
            >
                <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right relative">
                    <div>
                    <img className=" w-80 lg:w-[300px] absolute -top-48 -left-72 hidden lg:flex " src={banner2} alt="" />
                    </div>
                <h1 className="text-2xl text-center md:text-left font-extrabold lg:text-4xl text-black">
                Create and manage tasks 
                    <strong className="block font-extrabold text-black">
                    to stay productive.
                    </strong>
                </h1>

                <p className="mt-4 text-center md:text-left max-w-lg text-[18] lg:text-xl/relaxed text-gray-400">
                Create new tasks from scratch or turn any message into a task to enjoy a smarter collaboration with your deadline-driven team.
                </p>

                <div className="mt-8 flex flex-wrap  text-center">
                    <a
                    href="#" onClick={handleclick}
                    className="block w-full rounded bg-[#3ea5fe] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#7484a2] focus:outline-none focus:ring sm:w-auto"
                    >
                    
                    Let’s Explore
                    </a>
                

                </div>
             
                </div>
                {/* banner right */}
                <img className=" mt-10 md:mt-0 ml-7 w-80 lg:w-[550px]" src={banner1} alt="" />

            </div>
            


            </Container>



</section>




    
            
        </div>
    );
};

export default Banner;