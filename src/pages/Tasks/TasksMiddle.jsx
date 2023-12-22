import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";





const TasksMiddle = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const {data: alltasks =[], refetch  } =useQuery({
        queryKey:['alltasks '],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/tasks/${user?.email}`)
            return res.data 
        }
    })

    console.log(alltasks)

    return (
        <div className=" shadow-md bg-gray-300 ">
            <h1 className="text-xl font-bold text-center p-4">Ongoing</h1>
        </div>
    );
};

export default TasksMiddle;