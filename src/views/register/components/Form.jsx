import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        lastname: '',
        email: '',
        age: 0,
        genre: '',
        phone: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        const newForm = {
            ...form,
            [name]: value
        }
        setForm(newForm)
    }

    const handleSubmitForm = async () => {
        if (form.name === '' || form.lastname === '' || form.email === '' || form.age === 0 || form.genre === '' || form.phone === '') {
            return alert('All fields are required')
        }
        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        
        if (res.status === 200) {
            setForm({
                name: '',
                lastname: '',
                email: '',
                age: 0,
                genre: '',
                phone: '',
            
            })
            return alert('User created')
        } else {
            return alert('Error')
        }
    }

    return (
        <>
            <div className="flex flex-col text-black">
                <h1 className="text-3xl font-bold">Lets start</h1>
                <p className="text-sm text-neutral-500 mt-2">Carefully read and fill up all the inputs with<br />your original information</p>
                <form>
                    <div className="flex flex-col">
                        <input onChange={handleInputChange} name='name' type="text" placeholder="Name" className="placeholder:text-black bg-[#F1F1F1] p-5 rounded-md mt-10" />
                        <input onChange={handleInputChange} name='lastname' type="text" placeholder="Lastname" className="placeholder:text-black bg-[#F1F1F1] p-5 rounded-md mt-5" />
                        <input onChange={handleInputChange} name='email' type="text" placeholder="Email" className="placeholder:text-black bg-[#F1F1F1] p-5 rounded-md mt-5" />
                        <input onChange={handleInputChange} name='age' type="text" placeholder="Age" className="placeholder:text-black bg-[#F1F1F1] p-5 rounded-md mt-5" />
                        <input onChange={handleInputChange} name='genre' type="text" placeholder="Genre" className="placeholder:text-black bg-[#F1F1F1] p-5 rounded-md mt-5" />
                        <input onChange={handleInputChange} name='phone' type="text" placeholder="Phone" className="placeholder:text-black bg-[#F1F1F1] p-5 rounded-md mt-5" />
                    </div>
                    <div className="w-full mt-10 flex justify-end">
                        <div onClick={handleSubmitForm} className="bg-[#33AF8E] text-white px-5 py-3 rounded-md hover:cursor-pointer">
                            Register
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;