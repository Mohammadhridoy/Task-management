import { useForm } from "react-hook-form";
import Tasksleft from "./Tasksleft";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import TasksMiddle from "./TasksMiddle";

const Tasks = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { register, reset,  handleSubmit } = useForm();
    const onSubmit = (data) =>{
        
        console.log(data)
        console.log(data.priority)
        const tasksData = {
            title: data.title,
            description: data.description,
            deadlines: data.deadlines, 
            priority: data.priority,
            status: data.status,
            email: user.email

        }
        axiosSecure.post("/tasks", tasksData )
        .then(res =>{
            if(res.data.insertedId){
                toast.success("task added!",{
                    position:"top-right",
                    autoClose:2000,
                })
                reset()
                
            }
        })

           
    }

    return (
        <div>
            {/* top section */}
            <div className=" p-4 shadow-md w-[295px] md:w-[542px] lg:w-[1150px] flex justify-end "> 
                <button className="bg-[#3ea5fe] p-3 font-bold rounded-3xl "
                 onClick={()=>document.getElementById('my_modal_3').showModal()}>Create A Task</button>
            </div>
            {/* model */}
                
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <form  onSubmit={handleSubmit(onSubmit)}

                className="mb-4 mt-4   mx-auto space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
                >
               


                <div>
                    {/* title section */}
                    <label htmlFor="title" className="sr-only">Title</label>

                    <input
                        {...register("title")}
                        type="text"
                        className="w-full rounded-lg border border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md "
                        placeholder="Enter title" required name="title"
                    />

                    {/* description */}
                    <textarea className="textarea textarea-bordered  w-full rounded-lg border border-gray-200
                     p-4 mb-4 pe-12 text-sm shadow-sm
                     hover:shadow-md" {...register("description")} placeholder="Description"></textarea>

                     {/* priority */}

                    <select defaultValue="default"  {...register("priority")} className="select select-bordered w-full    mb-4">
                    <option value="default" >Select  priority </option>
                    <option value="Low" >Low</option>
                    <option value="Moderate" >Moderate</option>
                    <option value="high">high</option>
                    </select>



                        {/* Image section */}
                    
                    <input
                        type="text"
                        {...register("deadlines",{required:true})}
                        className="w-full rounded-lg border border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md"
                        placeholder="Enter deadlines "
                    />

                    {/* status  */}
                                 

                     <select defaultValue="default"  {...register("status")} className="select select-bordered w-full    mb-4">
                    <option value="default" >Select Status</option>
                    <option value="todo" >To do</option>
                    <option value="ongoing" >ongoing</option>
                    <option value="completed">completed</option>
                    </select>

                        

                    

                  
                </div>

               

            
             

               
               

                <button
                    type="submit"
                    className="block w-full rounded-lg  px-5 py-3 text-sm font-medium text-black bg-[#3ea5fe] hover:shadow-lg hover:text-white"
                >
                    Add task
                </button>



              



                </form>


                 
            </div>
            </dialog>

                


            {/* bottom section */}
            <div className="py-6 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Tasksleft></Tasksleft>
            <TasksMiddle></TasksMiddle>

            </div>

            <ToastContainer></ToastContainer>
          
        </div>
    );
};

export default Tasks;