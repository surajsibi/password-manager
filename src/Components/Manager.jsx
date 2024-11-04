import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text"
        // alert("sghwadkjf");
        if (ref.current.src.includes("/invisible_98494.png")) {

            ref.current.src = "/visible-status_73512.png"
            passwordRef.current.type = "text"

        }
        else {
            ref.current.src = "/invisible_98494.png"
            passwordRef.current.type = "password"
        }
    }

    const handelChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }


    const savePassword = () => {
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log([...passwordArray, form])
        setForm({ site: "", username: "", password: "" })
    }

    const deletePassword = (id) => {
        console.log(id)
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
    }
    

    const editPassword = (id) =>{
        setForm(passwordArray.filter(item=>item.id=== id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

            <div className="absolute top-0 right-0 z-[-2] h-screen w-[100vw] rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>


            <div className=" mx-auto container px-40 py-5 min-w-[100vw]  ">
                <h1 className='text-4xl flex items-center text-center justify-center font-bold'>
                    <span className='text-green-900 font-bold text-2xl flex '> &lt;</span>
                    <span>Pass<span className='text-green-900 font-bold text-4xl'>OP</span></span>
                    <span className='text-green-900 font-bold text-2xl'> /&gt;</span> </h1>
                <p className='text-green-700 text-center text-xl font-bold'>Your Own Password Manager</p>

                <div className="text-black flex items-center  flex-col p-4 gap-8">
                    <input onChange={handelChange} className='rounded-lg border border-green-600 w-full text-black py-1 px-4' placeholder='Enter Website URL' type="text" name='site' id='' value={form.site} />
                    <div className='flex w-full gap-8 '>
                        <input onChange={handelChange} className='rounded-lg border border-green-600 w-full text-black py-1 px-4' placeholder='Enter  Username' type="text" name='username' id='' value={form.username} />


                        <div className='relative w-[330px] flex items-center '>

                            <input ref={passwordRef} onChange={handelChange} className='rounded-lg border border-green-600 w-full text-black py-1 px-4' placeholder='Enter  Password' type="password" name='password' id='' value={form.password} />
                            <span className='absolute right-0 px-1 border-l-2 cursor-pointer' onClick={showPassword}> <img ref={ref} width={27} src="/invisible_98494.png" alt="" /></span>
                        </div>


                    </div>



                    <button onClick={savePassword} className='flex w-fit gap-2 justify-center font-bold text-gray-300  items-center bg-green-500 rounded-full px-2 py-[5px]  border-2 border-black'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">

                        </lord-icon>Add Pasword</button>
                </div>

                <div className="passwprds mb-8  ">
                    <h2 className='font-bold text-xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No Passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th>Site</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {
                                passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='text-center  font-bold text-lg py-1 border border-white px-5'>
                                            <div className='flex justify-around items-center  '>
                                                <a href={item.site} target='_blank' ><span>{item.site}</span></a>

                                                <div onClick={() => { copyText(item.site) }} className='h-12 flex cursor-pointer  '>
                                                    <lottie-player src="https://lottie.host/6914f638-bb75-439b-9df2-54babbe5f7bc/0D3h5TSkZt.json" speed="1" hover direction="1" mode="normal"></lottie-player>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center  py-2 border  font-bold text-lg border-white'>
                                            <div onClick={() => { copyText(item.username) }} className='h-12 flex cursor-pointer justify-around items-center '>
                                                <div>{item.username}</div>
                                                <lottie-player src="https://lottie.host/6914f638-bb75-439b-9df2-54babbe5f7bc/0D3h5TSkZt.json" speed="1" hover direction="1" mode="normal"></lottie-player>
                                            </div>
                                            <div className='flex justify-center items-center'></div>
                                        </td>
                                        <td className='text-center  py-2 border font-bold text-lg border-white'>
                                            <div onClick={() => { copyText(item.password) }} className='h-12 flex cursor-pointer justify-around items-center '>
                                                <span>{item.password}</span>
                                                <lottie-player src="https://lottie.host/6914f638-bb75-439b-9df2-54babbe5f7bc/0D3h5TSkZt.json" speed="1" hover direction="1" mode="normal"></lottie-player>
                                            </div>
                                            <div className='flex justify-center items-center'></div>
                                        </td>
                                        <td className='text-center  py-2 border font-bold text-lg border-white'>
                                            <div className='flex justify-center gap-5'>
                                                <div className='cursor-pointer' onClick={() => { editPassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/wuvorxbv.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </div>
                                                <div className='cursor-pointer' onClick={() => { deletePassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover"
                                                        style={{ width: "25px", height: "25px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                    }
                </div>

            </div>
        </>

    )
}

export default Manager
