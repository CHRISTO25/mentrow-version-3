import React, { useState } from "react"
import { RxAvatar, RxCross1 } from "react-icons/rx"

const StudentForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [qualification, setQualification] = useState("")
  const [specilzation, setSpecilization] = useState("")
  const [experiance, setExperiance] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [yearOfPassout, setYearOfPassout] = useState("")

  const handleSubmit = () => {}
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center   ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-3 text-centre text-3xl text-center font-extrabold text-gray-900">
            Student Form
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg:white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor=" First Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500   sm:text-sm"
                    type="text"
                    name="firstName"
                    autoComplete="firstName"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=" Last Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500   sm:text-sm"
                    type="text"
                    name="lastName"
                    autoComplete="lastName"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500  sm:text-sm"
                    type="text"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="phoneNumber"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500  sm:text-sm"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="qualification"
                  className="block text-sm font-medium text-gray-700"
                >
                  Qualification
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500  sm:text-sm"
                    type="text"
                    name="qualification"
                    autoComplete="qualification"
                    required
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="qualification"
                  />
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="specilzation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Specilzation
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500  sm:text-sm"
                    type="text"
                    name="specilzation"
                    autoComplete="specilzation"
                    required
                    value={specilzation}
                    onChange={(e) => setSpecilization(e.target.value)}
                    placeholder="specilzation"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="experiance"
                  className="block text-sm font-medium text-gray-700"
                >
                  Experiance
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500  sm:text-sm"
                    type="text"
                    name="experiance"
                    autoComplete="experiance"
                    required
                    value={experiance}
                    onChange={(e) => setExperiance(e.target.value)}
                    placeholder="experiance"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="jobLocation"
                  className="block text-sm font-medium text-gray-700"
                >
                  JobLocation
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500  sm:text-sm"
                    type="text"
                    name="jobLocation"
                    autoComplete="jobLocation"
                    required
                    value={jobLocation}
                    onChange={(e) => setJobLocation(e.target.value)}
                    placeholder="jobLocation"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="yearOfPassout"
                  className="block text-sm font-medium text-gray-700"
                >
                  YearOfPassout
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500  sm:text-sm"
                      type="month" 
                    name="yearOfPassout"
                    autoComplete="yearOfPassout"
                    required
                    value={yearOfPassout}
                    onChange={(e) => setYearOfPassout(e.target.value)}
                    placeholder="yearOfPassout"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group-relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentForm
