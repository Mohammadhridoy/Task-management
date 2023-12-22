

const Tasks = () => {
    return (
        <div>
            {/* top section */}
            <div className=" p-4 shadow-md w-[295px] md:w-[542px] lg:w-[1150px] flex justify-end "> 
                <button className="bg-[#3ea5fe] p-3 font-bold rounded-3xl "
                 onClick={()=>document.getElementById('my_modal_5').showModal()}>Create A Task</button>
            </div>
            {/* model */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
                
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>


            {/* bottom section */}
            <div className="py-6 px-6">

            </div>
          
        </div>
    );
};

export default Tasks;