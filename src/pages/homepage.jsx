import React from 'react'
import { FaGasPump } from "react-icons/fa";
import { RxSpeakerQuiet } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5"
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md"

const Homepage = () => {
  return (
    <>
      <nav className="w-[100%] bg-white shadow h-[80px] fixed top-0 left-0  z-50 flex justify-around items-center ">
        <div className='flex gap-4'>
          <h1 className='text-gray-400 text-xl'>Home</h1>
          <h1 className='text-gray-400 text-xl'>About</h1>
          <h1 className='text-gray-400 text-xl'>Contact</h1>
        </div>
        <div className='gap-3 flex'>
          <button className='px-6 py-2 bg-white text-gray-400 rounded-md hover:bg-blue-400 text-xl cursor-pointer'>Inquire About Reservation</button>
          <button className='px-6 py-2 bg-black text-gray-400 rounded-md hover:bg-blue-400 text-xl cursor-pointer'>Sign in</button>
          <button className='px-6 py-2 bg-black text-gray-400 rounded-md hover:bg-blue-400 text-xl cursor-pointer'>Sign up</button>
        </div>
      </nav>

      <section className='flex gap-4 p-4 flex-wrap pt-[100px] items-center justify-around  bg-gray-100'>

        <div className='w-100 h-20 bg-white shadow p-3'>
          <div className='flex items-center gap-2'>
          <IoLocationOutline />
          <div>

            <h1 className='text-gray-400 text-sm'>Pickup Location</h1>
            <h1 className='font-semibold text-xl'>847 Delware Avenue, San Francisco,CA</h1>
          </div>
          </div>
        </div>
        <div className='w-40 h-20 bg-white shadow p-3'>
          <div className='flex items-center gap-2'>
            <FaCalendarAlt />
            <div>

            <h1 className='text-gray-400 text-sm'>Pickup Date</h1>
            <h1 className='font-semibold text-xl'>Jun 18,2022</h1>
            </div>
          </div>
        </div>
        <div className='w-40 h-20 bg-white shadow p-3'>
          <div className='flex items-center gap-2'>
            <MdOutlineTimer />
            <div>

            <h1 className='text-gray-400 text-sm'>Pickup Time</h1>
            <h1 className='font-semibold text-xl'>09:00am</h1>
            </div>
          </div>
        </div>
        <div className='w-40 h-20 bg-white shadow p-3'>
          <div className='flex items-center gap-2'>
                        <FaCalendarAlt />
            <div>

            <h1 className='text-gray-400 text-sm'>Return Date</h1>
            <h1 className='font-semibold text-xl'>Jun 19,2022</h1>
            </div>
          </div>
        </div>
        <div className='w-40 h-20 bg-white shadow p-3'>
          <div className='flex items-center gap-2'>
            <MdOutlineTimer />
            <div>

            <h1 className='text-gray-400 text-sm'>Return Time</h1>
            <h1 className='font-semibold text-xl'>12:00pm</h1>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full py-4 px-6 ">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm text-gray-700 ">
            <option>Gear Type</option>
            <option>Automatic</option>
            <option>Manual</option>
            <option>Semi-Automatic</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm text-gray-700">
            <option>Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm text-gray-700">
            <option>Brands</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>BMW</option>
            <option>Honda</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm text-gray-700">
            <option>Vehicle Class</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Truck</option>
            <option>Compact</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm text-gray-700">
            <option>Rental Companies</option>
            <option>Hertz</option>
            <option>Avis</option>
            <option>Enterprise</option>
            <option>Budget</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 cursor-pointer">
            Clear All Filter
          </button>
        </div>
      </section>
      <section className='w-full min-h-screen px-6 py-4'>
        <div className='mb-5 '>
           <h1 className='font-bold text-2xl'>260 Vehicle founded</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 '>
        <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Maybach Jeep</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover  justify-center'>
              <img src="/assets/car12.png" className='w-full h-50 object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
          <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Gle 63</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover justify-center'>
              <img src="/assets/car11.png" className='w-full h-100 object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
          <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Bugatti</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover justify-center'>
              <img src="/assets/car10.png" className='w-full h-150 object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
           <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Roll Royce Cullina</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover justify-center'>
              <img src="/assets/car9.png" className='w-full h-full object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
          <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Lamboghini Urus</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover justify-center'>
              <img src="/assets/car8.png" className='w-full h-full object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
           <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Mahindra</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover  justify-center'>
              <img src="/assets/car7.png" className='w-full h-full object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
          <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>RenaultKangoo</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover  justify-center'>
              <img src="/assets/car6.png" className='w-full h-full object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
           <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Peugeot301</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover  justify-center'>
              <img src="/assets/car5.png" className='w-full h-full object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
          <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Gle 63</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover justify-center'>
              <img src="/assets/car11.png" className='w-full h-100 object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
          <div className='w-80 h-110 overflow-hidden  bg-gray-200 rounded-md p-2'>
            <h1 className='font-bold text-xl'>Gle 63</h1>
            <div className='flex w-full h-40 overflow-hidden items-center object-cover justify-center'>
              <img src="/assets/car11.png" className='w-full h-100 object-contain' />
            </div>
            <div className='flex justify-around mb-3'>
              <div className='flex gap-2 items-center'>
                <FaGasPump />
                <h1 className='font-semibold'>Petrol</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>manual</h1>
              </div>
              <div className='flex gap-1 items-center'>
                <RxSpeakerQuiet />
                <h1 className='font-semibold'>Handbreak</h1>
              </div>
            </div>
                <div className="w-full flex justify-between mb-3 bg-white shadow rounded-md h-20 p-4">
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>1000</h1>
                    </div>
                    <div>
                      <h1>deport</h1>
                      <h1 className='font-bold'>900km</h1>
                    </div>
                    <div>
                      <h1>Credit Card</h1>
                      <h1 className='font-bold'>Reg</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <h1 className='text-green-500'>256.99 TL Per Day</h1>
                    <h1 className='font-semibold'>3-days</h1>
                  </div>
                  <h1 className='text-blue-600 text-xl font-bold'>776.00TL</h1>
                </div>
                <button className='px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-400 text-xl cursor-pointer w-full'>RENT NOW</button>
          </div>
          
          

        </div>
      </section>
    </>
  )
}

export default Homepage
