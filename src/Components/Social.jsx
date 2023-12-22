import { useContext } from 'react';
import { AiOutlineGoogle  } from 'react-icons/ai';
import { DiGithubBadge  } from 'react-icons/di';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const Social = () => {
    const {googelSingin} = useContext(AuthContext)
    const navigate = useNavigate()
   

    const handlegoogleSign = () =>{
        googelSingin()
        .then(result =>{
            console.log(result.user);
            navigate('/dashboard/task');
            
        })
    }
    return (
        <div>
            <button onClick={handlegoogleSign} className="btn mb-3 btn-outline w-full hover:bg-[#3ea5fe]"> <AiOutlineGoogle></AiOutlineGoogle>  Login with Google</button>
        <button  className="btn btn-outline w-full hover:bg-[#3ea5fe]"> <DiGithubBadge></DiGithubBadge>  Login with Github</button>
            
        </div>
    );
};

export default Social;