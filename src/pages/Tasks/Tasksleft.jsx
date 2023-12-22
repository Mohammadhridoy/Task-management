import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Tasksleft = () => {
    const axiosSecure = useAxiosSecure()

    const {data: alltasks =[]  } =useQuery({
        queryKey:['alltasks '],
        queryFn: async() =>{
            const res = await axiosSecure.get('/tasks')
            return res.data 
        }
    })

    console.log(alltasks)


    return (
        <div className=" shadow-md bg-gray-300 ">
            <h1 className="text-xl font-bold text-center p-4">To-do: {alltasks.length}</h1>
            

            <div className="card w-[320px] mx-auto p-5 my-8 bg-base-100 shadow-xl">
            <div className="">
                <div className=" flex items-center justify-between pb-2">
                     <h2 className="card-title">Card title!</h2>
                     <div className=" flex gap-4">
                        <FaEdit className="text-red-400 text-xl cursor-pointer"></FaEdit>
                        <ImCross className="text-red-400 text-xl cursor-pointer" />
                     </div>
                </div>
                
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex items-center justify-between">
                <h2 className=" text-[18px] font-semibold">Deadline:</h2>
                <h2 className=" text-[18px] text-red-400 font-semibold">Deadline:</h2>
                </div>
               
                <div className="card-actions justify-end">

                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Tasksleft;