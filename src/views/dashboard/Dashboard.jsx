import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './components/Card'

const Dashboard = () => {
    let input = ""
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    const navigate = useNavigate()

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json()
        setUsers(data)
    }

    const handleSwitchRegister = () => {
        navigate('/register')
    }

    const handleInputChange = (e) => {
        input = e.target.value
        const filtered = users.filter(user => {
            return user.name.toLowerCase().includes(input.toLowerCase())
        })
        setFilteredUsers(filtered)
    }
    
    useEffect(() => {
        fetchUsers()
    })

    return (
        <div className='flex flex-col items-center h-svh w-svw'>
            {/* Title */}
            <div className='flex items-center mt-5'>
                <h1 className='text-4xl font-bold'>DASHBOARD</h1>
            </div>

            {/* Nav */}
            <div className='w-1/3 flex items-center justify-between mt-5'>
                {/* Switch Register */}
                <button onClick={handleSwitchRegister} className='h-9 rounded-md p-2 flex items-center text-white bg-[#33AF8E]'>
                    Register
                </button>

                {/* Filter */}
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#dddddd] px-5 py-2 rounded-md outline-none w-[80%]"
                    onChange={handleInputChange}
                />
            </div>

            {/* Cards */}
            <div className='p-2 overflow-auto flex justify-center mt-5'>
                <div className='grid grid-cols-3 gap-10'>
                    {filteredUsers.length == 0 ? 
                    
                        users.map((user) => (
                            <Card key={user.id} user={user} />
                        ))
                    
                    :

                        filteredUsers.map((user) => (
                            <Card key={user.id} user={user} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;