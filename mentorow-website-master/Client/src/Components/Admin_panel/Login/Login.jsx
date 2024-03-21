import React, { useState } from "react"
import mentorow from "../../Admin_panel/svg/Mentorow-logo.svg"
import bg from "../../Admin_panel/image/image.png"

// react icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"


const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [visible, setVisible] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return "enter the valid Credentials"
    }
    
  }
  return (
    <div
      className={`flex items-center justify-center h-[100vh] bg-cover`}
      style={{ background: `url(${bg})` }}
    >
      <div className="flex items-center justify-center h-screen ">
        <img src={mentorow} alt="" className="w-96 absolute top-12  z-30" />
        <form onSubmit={handleSubmit}>
          <div className="h-96 w-[500px] p-8 bg-opacity-30 bg-gray-700 text-white rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <input
              type="text"
              name="username"
              autoComplete="current-username"
              className="w-full py-4 px-6 mb-6 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              placeholder="Username"
              aria-label="Username"
              onChange={(e) => setUserName(e.target.value)}
            />

            <div className="mt-1 relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-4 px-6 mb-6 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder="Password"
                aria-label="Password"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-4 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-4 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-md font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition duration-300 text-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
