import Container from "./Container";
import people1 from '../assets/people1.png'
const People = () => {
    return (
        <div className=" bg-[#f6fbfa]">
            <Container> 
            <h1 className="text-center text-2xl font-semibold md:text-3xl lg:text-4xl underline pt-9">People</h1>
            <h5 className=" text-center text-xl  py-4">  what type of people use </h5>
            <div className=" md:flex items-center gap-8 lg:gap-16 pb-8">
                <div className="md:py-12 md:w-72 lg:w-[600px]">   <h1 className="text-2xl text-center md:text-left font-extrabold lg:text-4xl text-black">
                 It’s so easy to be efficient
                   
                </h1>
                
                <p className="mt-4  text-center md:text-left max-w-lg text-[18] lg:text-xl/relaxed text-gray-400">
                Team alignment, productivity, & smarter decisions come naturally when your data is not fragmented across multiple tools.
                </p>
                </div>

                <div className=" ml-28 md:ml-0  pt-10 md:pt-0 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-12">

                    {/* card 1 */}
                    <div className=" p-3 shadow-lg rounded-full flex items-center gap-3 h-14 w-48">
                        <img  className=" h-10 w-10" src={people1} alt="" />
                        <h1 className="text-xl font-bold ">Developers</h1>
                    </div>
                       {/* card 2 */}
                       <div className=" p-3 shadow-lg rounded-full flex items-center gap-3 h-14 w-48">
                        <img  className=" h-10 w-10 " src={people1} alt="" />
                        <h1 className="text-xl font-bold ">Managers</h1>
                    </div>

                       {/* card 2 */}
                       <div className=" p-3 shadow-lg rounded-full flex items-center gap-3 h-14 w-48">
                        <img  className=" h-10 w-10 " src={people1} alt="" />
                        <h1 className="text-xl font-bold ">Sales</h1>
                    </div>
                       {/* card 2 */}
                       <div className=" p-3 shadow-lg rounded-full flex items-center gap-3 h-14 w-48">
                        <img  className=" h-10 w-10 " src={people1} alt="" />
                        <h1 className="text-xl font-bold ">Marketing</h1>
                    </div>
                         {/* card 2 */}
                         <div className=" p-3 shadow-lg rounded-full flex items-center gap-3 h-14 w-48">
                        <img  className=" h-10 w-10 " src={people1} alt="" />
                        <h1 className="text-xl font-bold ">Designers</h1>
                    </div>
                   
                       {/* card 2 */}
                       <div className=" p-3 shadow-lg rounded-full flex items-center gap-3 h-14 w-48">
                        <img  className=" h-10 w-10 " src={people1} alt="" />
                        <h1 className="text-xl font-bold "> Corporate</h1>
                    </div>
                    
                    

                </div>
                
            </div>

            </Container>
           
            
        </div>
    );
};

export default People;