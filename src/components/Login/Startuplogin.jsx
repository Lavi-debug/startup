import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from './Logo.png'
const Startuplogin = () => {
    const host = "http://localhost:5000"; // Backend host URL
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        try {
            const response = await fetch(`${host}/api/startup/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), 
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setSuccess(data.message);
                localStorage.setItem('registeredEmail', email);
                localStorage.setItem('registeredId', data.userId);  // Save the userId in localStorage
                navigate('/Startupmainhomepage', { state: { email } });
            } else {
                setError(data.message); 
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

  return (
    <>
            <div className="bg-[#e8e8e0] h-[100vh]">
                <div className="flex flex-col justify-center mx-auto pb-[75px] bg-[#e8e8e0]">
                    <div>
                        <div className="my-[36px] px-[9px] flex justify-center">
                            <a href="">
                                <img
                                    src={logo}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="px-[32px] py-[24px] sm3:w-[432px] w-full rounded-[] max-w-full bg-[white] border-[1px] border-[#b7b7b7] shadow-custom4">
                            <div>
                                <p className="text-[24px] font-[600] text-[#222]">Login to your account</p>
                                <ul className="flex flex-wrap my-[1.5rem]">
                                    <button className={`mr-[10px] text-[14px] font-[500]`} onClick={() => navigate('/investorlogin')}>
                                        <a href="" className='py-[6px] px-[12px] flex'
                                        >
                                            <img
                                                src="https://investor.creddinv.in/_next/static/media/investorDark.87d515fd.svg"
                                                alt=""
                                            />
                                            <span className="text-[#222] ml-[6px]">Investor</span>
                                        </a>
                                    </button>
                                    <button
                                        className="mr-[10px] text-[14px] font-[500] ml-[6px]"
                                    >
                                        <a
                                            href=""
                                            className='py-[6px] px-[12px]  border-b-[2.5px] border-b-black flex'
                                        >
                                            <img
                                                src="https://investor.creddinv.in/_next/static/media/startUpLight.51c76175.svg"
                                                alt=""
                                            />
                                            <span className="text-[#222] ml-[6px]">Startup</span>
                                        </a>
                                    </button>
                                </ul>
                            </div>

                            <div className="mt-[20px]">
                                <form onSubmit={handleLogin}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col">
                                            <label className="text-[12px] text-[400] text-[#666]">Email ID</label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Type here"
                                                className="border-[1px] border-black w-full h-[48px] p-[15px] mt-[8px] text-black"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex flex-col mt-[12px]">
                                            <label className="text-[12px] text-[400] text-[#666]">Password</label>
                                            <input
                                                type="text"
                                                id="password"
                                                placeholder="Type here"
                                                className="border-[1px] border-black w-full h-[48px] p-[15px] mt-[8px] text-black"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between mt-[24px]">
                                            <div className="flex gap-[6px]">
                                                <input
                                                    type="checkbox"
                                                    className="border-[1px] border-black w-[18px] h-[18px]"
                                                />
                                                <span className="text-[13px] font-[400] text-[#222] text-left">
                                                    Remember me
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href=""
                                                    className="text-[14px] font-[400] text-left text-[#222] underline"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="py-[15px] px-[24px] flex items-center justify-center mt-[40px] bg-[#222] text-[#e8e8e0] w-full shadow-custom4"
                                    >
                                        Login
                                    </button>
                                </form>
                                {error && <p className="text-red-500 mt-4">{error}</p>}

                                {/* <div className="flex items-center justify-center my-[20px] w-full">
                                    <p className="text-[14px] font-[500] text-[#666]">or continue with</p>
                                </div>

                                <div className="h-[40px] w-full flex items-center justify-center">
                                    <div className="w-[70%] h-full bg-slate-300"></div>
                                </div> */}

                                <div className="flex justify-center">
                                    <a onClick={() => navigate('/Startupsignuptwo')} className="cursor-pointer mt-[12px] text-[14px] font-[400] text-[#222]">
                                        Don't have an account? &nbsp;<span className="underline font-[700]">Signup here</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Startuplogin
