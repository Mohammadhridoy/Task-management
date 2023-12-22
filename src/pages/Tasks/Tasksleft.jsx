import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Tasksleft = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const {data: alltasks =[], refetch  } =useQuery({
        queryKey:['alltasks '],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/tasks/${user?.email}`)
            return res.data 
        }
    })

    const  handleDelete = (id) =>{
        console.log(id)
        axiosSecure.delete(`/tasks/${id}`)
        .then(res =>{
            if(res.data.deletedCount === 1){
                refetch()
                toast.success("DELETED!",{
                    position:"top-right",
                    autoClose:2000,
                })
              
                
            }
        })
    }


    return (
        <div className=" shadow-md bg-gray-300 ">
            <h1 className="text-xl font-bold text-center p-4">To-do: {alltasks.length}</h1>

            {
                alltasks?.map(alltask => <div key={alltask._id} className="card w-[320px] mx-auto p-5 my-8 bg-base-100 shadow-xl">
                <div className="">
                    <div className=" flex items-center justify-between pb-2">
                         <h2 className="card-title">{alltask.title}</h2>
                         <div className=" flex gap-4">
                            <FaEdit  className="text-red-400 text-xl cursor-pointer"></FaEdit>
                            <ImCross onClick={() => handleDelete(alltask?._id)} className="text-red-400 text-xl cursor-pointer" />
                         </div>
                    </div>
                    
                    <p>{alltask.description}</p>
                    <div className="flex items-center justify-between">
                    <h2 className=" text-[18px] font-semibold">Deadline: {alltask.deadlines}</h2>
                    <h2 className=" text-[18px] text-red-400 font-semibold">{alltask?.priority}</h2>
                    </div>
                   
                    <div className="card-actions justify-end">
    
                    </div>
                </div>
                </div> )
            }

            
        </div>
    );
};

export default Tasksleft;