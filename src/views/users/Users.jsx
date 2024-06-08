/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import PrevDescription from "./components/PrevDescription"
import ProfileIcon from '../../assets/profile-icon.svg'

const Users = () => {
    const { id } = useParams()
    const [userDescription, setUserDescription] = useState({})
    const [user, setUser] = useState({})
    const [refresh, setRefresh] = useState(false)
    const [form, setForm] = useState({
        description: '',
        prescription: ''
    })

    const fetchDescription = async () => {
        const response = await fetch(`http://localhost:3000/description/${id}`)
        const data = await response.json()
        setUserDescription(data)
    }

    const fetchUserById = async () => {
        const response = await fetch(`http://localhost:3000/users/${id}`)
        const data = await response.json()
        setUser(data)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        const newForm = {
            ...form,
            [name]: value
        }
        setForm(newForm)
    }

    const handleSendAI = async () => {
        const response = await fetch('http://localhost:3000/gemini/context', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    message: form.description
                }
            )
        })
        const data = await response.json()
        const newForm = {
            ...form,
            prescription: data.response
        }
        setForm(newForm)
    }

    const handleSendDB = async () => {
        await fetch(`http://localhost:3000/description/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        setRefresh(!refresh)
    }

    const handleRagNearbyy = async () => {
        window.open('https://nearbyy.com/', '_blank')
    }

    useEffect(() => {
        fetchUserById()
        fetchDescription()
    }, [refresh])

    return (
        <div className='flex flex-col h-svh w-svw bg-[#d0d0d0]'>
            {/* Roulette Prev Data */}
            <div className="flex items-center justify-center h-[25%] bg-[#e2e2e2]">
                <div className="h-[95%] w-[99.5%] rounded-md bg-white">
                    <PrevDescription description={userDescription} />
                </div>
            </div>

            {/* Data Container */}
            <div className="h-[75%] w-full flex bg-[#e2e2e2]">
                {/* User Profile */}
                <div className="w-[18%] flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        {/* Profile Image */}
                        <img src={ProfileIcon} alt="User" className="bg-[#65b1a99f] rounded-full w-36" />

                        {/* User Data */}
                        <div className="flex flex-col items-start mt-5">
                            <h1 className="text-center"><span className=" font-bold">Name: </span>{user.name}</h1>
                            <h1 className="text-center"><span className=" font-bold">Lastname: </span>{user.lastname}</h1>
                            <h1 className="text-center"><span className=" font-bold">Email: </span>{user.email}</h1>
                            <h1 className="text-center"><span className=" font-bold">Age: </span>{user.age}</h1>
                            <h1 className="text-center"><span className=" font-bold">Genre: </span>{user.genre}</h1>
                            <h1 className="text-center"><span className=" font-bold">Phone: </span>{user.phone}</h1>
                        </div>
                    </div>
                </div>

                {/* User Information */}
                <div className="w-[82%] roundtl bg-[#d0d0d0]">
                    <div className="flex flex-col h-full items-center justify-evenly">
                        <div className="flex w-full">
                            {/* DESCRIPTION */}
                            <div className="flex flex-col items-center mt-3 w-1/2">
                                {/* Text Area Title */}
                                <label className="mr-2 font-bold">Description: </label>
                                {/* Text Area */}
                                <textarea
                                    className="w-[90%] h-56 text-sm outline-none rounded-lg p-2"
                                    name="description"
                                    value={form.description}
                                    onChange={handleInputChange}
                                />
                                <div className="flex">
                                    {/* Button Add Context */}
                                    <button onClick={handleRagNearbyy} className="bg-[#9b9b9b] px-3 rounded mt-5">Add Context</button>
                                    {/* Button Send to AI */}
                                    <button onClick={handleSendAI} className="bg-[#9b9b9b] px-3 rounded mt-5 ml-11">Send to AI</button>
                                </div>
                            </div>

                            {/* PRESCRIPTION */}
                            <div className="flex flex-col items-center mt-3 w-1/2">
                                {/* Text Area Title */}
                                <label className="mr-2 font-bold">Prescription: </label>
                                {/* Text Area */}
                                <textarea
                                    className="w-[90%] h-56 text-sm outline-none rounded-lg p-2"
                                    name="prescription"
                                    value={form.prescription}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            {/* Button Save to DB */}
                            <button onClick={handleSendDB} className="bg-[#9b9b9b] px-3 rounded mt-10">Save to database</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users