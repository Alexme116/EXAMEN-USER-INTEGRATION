/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import ProfileIcon from '../../../assets/profile-icon.svg'

const Card = ({ user }) => {

    const navigate = useNavigate()

    const handleNavUser = () => {
        navigate(`/users/${user.id}`)
    }

    return (
        <button onClick={handleNavUser} className='flex flex-col items-center p-2 shadow-md shadow-[#000000a9] rounded-xl bg-[#399C7E]'>
            {/* Profile Image */}
            <div className='w-24 bg-[#dddddd57] rounded-full'>
                <img src={ProfileIcon} alt="Profile-Icon " />
            </div>

            {/* Profile Data */}
            <div className="mt-1">
                <div className='mt-4 flex flex-col items-start text-white'>
                    <h2><span className='font-bold'>Name: </span>{user.name}</h2>
                    <h2><span className='font-bold'>Lastname: </span>{user.lastname}</h2>
                    <h2><span className='font-bold'>Email: </span>{user.email}</h2>
                    <h2><span className='font-bold'>Age: </span>{user.age}</h2>
                    <h2><span className='font-bold'>Genre: </span>{user.genre}</h2>
                    <h2><span className='font-bold'>Phone: </span>{user.phone}</h2>
                </div>
            </div>
        </button>
    )
}

export default Card