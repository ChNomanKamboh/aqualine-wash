import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Main() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='slide1 h-screen w-full flex flex-col justify-center'>
        <h1 className='text-sm text-red-600 font-bold text-center mt-20 tracking-[8px]'>MODERN EQUIPMENT</h1>
        <h1 className='text-7xl text-white font-bold text-center pb-3 tracking-[5px]'>Contactless Car Wash</h1>
        <p className='text-center text-white text-xs font-bold py-3 tracking-[2px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nobis voluptates <br /> impedit hic temporibus atque!</p>
        <div className='text-center my-5'>
          <button className='z-20 text-white text-sm relative bg-red-600 py-4 px-12 rounded-full
            before:content[""] before:absolute before:h-full before:w-full before:bg-[#CEB98B] before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-black
          '><span className='relative z-20'>Read more</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
          <button className='z-20 text-black text-sm relative bg-[#CEB98B] py-4 px-12 rounded-full ml-4
            before:content[""] before:absolute before:h-full before:w-full before:bg-white before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-black
          '><span className='relative z-20'>Order now</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
        </div>
      </div>
      <div className='h-max w-full pl-16 pt-20 flex'>
        <div className='h-[500px] w-[45%]'>
          <h1 className='text-[11px] font-bold pt-10 text-red-600 tracking-[5px] pl-20'>MODERN EQUIPMENT</h1>
          <h1 className='text-4xl font-bold pt-5 '>Professional washing and <br /> cleaning of your car</h1>
          <p className='text-sm py-10'>Phasellus in arcu dapibus, lobortis est in, suscipit diam. Vivamus <br /> faucibus faucibus eros et porttitor. Sed est nulla, tincidunt ac ex <br /> eget, dictum mollis tortor. Vivamus faucibus nec ipsum id aliquam <br /> lobortis est.</p>
          <h1 className='font-bold text-lg'>Call for book: <span className='text-red-600'>8-800-10-500</span></h1>
          <button className='z-20 text-white text-sm relative bg-red-600 mt-10 py-4 px-14 rounded-full
            before:content[""] before:absolute before:h-full before:w-full before:bg-black before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-white
          '><span className='relative z-20'>Read more</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
        </div>
        <div className='h-[500px] w-[55%] carwash'></div>
      </div>
      <div className='h-max w-full px-14 py-8 flex gap-32'>
        <div className=' h-max w-max intro'>
          <i className="fa-solid fa-car text-6xl text-red-600 car"></i>
          <h1 className='font-bold text-xl py-4'>Contactless Washing</h1>
          <p className='text-xs'>Vestibulum tortor risus, rutrum at <br /> congue sed ultricies finibus.</p>
        </div>
        <div className=' h-max w-max intro'>
          <i class="fa-solid fa-jug-detergent text-6xl text-red-600 car"></i>
          <h1 className='font-bold text-xl py-4'>Safety Materials</h1>
          <p className='text-xs'>Cras aliquam tristique metus, eu gravida <br /> diam vestibulum gravida..</p>
        </div>
        <div className=' h-max w-max intro'>
          <i class="fa-solid fa-spray-can-sparkles text-6xl text-red-600 car"></i>
          <h1 className='font-bold text-xl py-4'>Modern Equipment</h1>
          <p className='text-xs'>Fusce maximus molestie nisl, ut dapibus <br /> libero vestibulum aliquam.</p>
        </div>
        <div className=' h-max w-max intro'>
          <i class="fa-solid fa-circle-radiation text-6xl text-red-600 car"></i>
          <h1 className='font-bold text-xl py-4'>Extensive Cleaning</h1>
          <p className='text-xs'>Sestibulum non dolor sit amet mi moles <br /> tincidunt vel non velit.</p>
        </div>
      </div>
      <div className='h-max w-full bg-black py-24 mt-10'>
        <h1 className='text-center text-red-600 font-bold text-xs tracking-[4px]'>WHAT WE DO</h1>
        <h1 className='text-center text-5xl text-white font-bold py-5'>Premium Washing Services</h1>
        <p className='text-center text-gray-400 py-3'>Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo <br /> tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
        <div className='h-[550px] w-[80%] overflow-hidden mx-auto my-10 flex rounded-lg'>
          <div className='h-full w-[70%] preimum'></div>
          <div className='h-max w-[30%] pl-10 py-14 bg-white'>
            <h1 className=' text-4xl font-bold'>Interior Cleaning</h1>
            <h1 className='py-2 font-bold'><i className="fa-regular fa-clock text-red-600"></i> 30 min</h1>
            <p className='leading-[30px] text-gray-500 py-3'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Donec cursus hendrerit eros, in pharetra lacus lobortis eu.</p>
            <h4 className='text-md tracking-[2px] py-1'><i className="text-sm text-green-500 fa-solid fa-check"></i> Seats washing</h4>
            <h4 className='text-md tracking-[2px] py-1'><i className="text-sm text-green-500 fa-solid fa-check"></i> Vacuum cleanig</h4>
            <h4 className='text-md tracking-[2px] py-1'><i className="text-sm text-green-500 fa-solid fa-check"></i> Interior wet cleanig</h4>
            <h4 className='text-md tracking-[2px] py-1'><i className="text-sm text-green-500 fa-solid fa-check"></i> Window wipping</h4>
            <button className='z-20 text-white text-sm relative bg-red-600 mt-5 py-4 px-14 rounded-full
            before:content[""] before:absolute before:h-full before:w-full before:bg-black before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-white
          '><span className='relative z-20 font-bold'>Get plan</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
          </div>
        </div>
      </div>
      <div className='h-max w-full py-14'>
        <h1 className='text-center font-bold text-red-600 tracking-[5px] py-3 text-xs'>WASHING PRICE</h1>
        <h1 className='text-center text-5xl font-bold py-4'>Choose Your Plan</h1>
        <p className='text-center text-sm text-gray-500 py-5'>Sed non dapibus dolor, non rhoncus dui. Ut eleifend justo at ipsum aliquam, vel cursus tellus pulvinar. Nulla vel tempus diam. Nunc <br /> vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
        <div className='h-max w-[60%] mx-auto gap-5 flex crs hover:cursor-pointer'>
          <div className='h-max w-[25%] cars overflow-hidden'>
            <img src="/car_01.png" alt="" />
            <h1 className='text-center font-bold'>Small Sedan</h1>
          </div>
          <div className='h-max w-[25%] cars overflow-hidden'>
            <img src="/car_03.png" alt="" />
            <h1 className='text-center font-bold'>Pickup</h1>
          </div>
          <div className='h-max w-[25%] cars overflow-hidden'>
            <img src="/car_02.png" alt="" />
            <h1 className='text-center font-bold'>SUV</h1>
          </div>
          <div className='h-max w-[25%] cars overflow-hidden'>
            <img src="/car_04.png" alt="" />
            <h1 className='text-center font-bold'>Minibus</h1>
          </div>
        </div>
      </div>
      <div className='h-max w-full pb-20'>
        <div className='h-max w-[90%] mx-auto gap-6 flex'>
          <div className='h-max w-[25%] py-8 card'>
            <h1 className='text-red-600 text-sm font-bold text-center py-4'>Express Washing</h1>
            <h1 className='text-5xl font-bold text-center py-4'>$12.99</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400"></i> Exterior washing</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-xmark text-gray-400 text-sm"></i> Vacuum cleanig</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-xmark text-gray-400 text-sm"></i> Interior wet cleanig</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-xmark text-gray-400 text-sm"></i> Window wipping</h1>
            <h1 className='px-14 py-8 text-center font-bold'><i className="fa-regular fa-clock text-red-600"></i> 15 min</h1>
            <button className='z-20 text-white text-sm relative bg-red-600 ml-14 mt-5 py-4 px-14 rounded-full
            before:content[""] before:absolute before:h-full before:w-full before:bg-black before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-white
          '><span className='relative z-20 font-bold'>Order now</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
          </div>
          <div className='h-max w-[25%] py-8 card'>
          <h1 className='text-red-600 text-sm font-bold text-center py-4'>Basic Cleanig</h1>
            <h1 className='text-5xl font-bold text-center py-4'>$30.99</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400"></i> Exterior washing</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400 text-sm"></i> Vacuum cleanig</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-xmark text-gray-400 text-sm"></i> Interior wet cleanig</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-xmark text-gray-400 text-sm"></i> Window wipping</h1>
            <h1 className='px-14 py-8 text-center font-bold'><i className="fa-regular fa-clock text-red-600"></i> 25 min</h1>
            <button className='z-20 text-white text-sm relative bg-red-600 ml-14 mt-5 py-4 px-14 rounded-full
            before:content[""] before:absolute before:h-full before:w-full before:bg-black before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-white
          '><span className='relative z-20 font-bold'>Order now</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
          </div>
          <div className='h-max w-[25%] py-8 card'>
          <h1 className='text-red-600 text-sm font-bold text-center py-4'>Express Washing</h1>
            <h1 className='text-5xl font-bold text-center py-4'>$36.99</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400"></i> Exterior washing</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400 text-sm"></i> Vacuum cleanig</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400 text-sm"></i> Interior wet cleanig</h1>
            <h1 className='px-16 pt-4 text-sm'><i className="fa-solid fa-xmark text-gray-400 text-sm"></i> Window wipping</h1>
            <h1 className='px-14 py-8 text-center font-bold'><i className="fa-regular fa-clock text-red-600"></i> 45 min</h1>
            <button className='z-20 text-white text-sm relative bg-red-600 ml-14 mt-5 py-4 px-14 rounded-full
            before:content[""] before:absolute before:h-full before:w-full before:bg-black before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-white
          '><span className='relative z-20 font-bold'>Order now</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
          </div>
          <div className='h-max w-[25%] py-8 card1'>
          <h1 className='text-red-600 text-sm font-bold text-center py-4'>Express Washing</h1>
            <h1 className='text-white text-5xl font-bold text-center py-4'>$59.99</h1>
            <h1 className='text-white px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400"></i> Exterior washing</h1>
            <h1 className='text-white px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400 text-sm"></i> Vacuum cleanig</h1>
            <h1 className='text-white px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400 text-sm"></i> Interior wet cleanig</h1>
            <h1 className='text-white px-16 pt-4 text-sm'><i className="fa-solid fa-check text-green-400 text-sm"></i> Window wipping</h1>
            <h1 className='px-14 py-8 text-center text-white font-bold'><i className="fa-regular fa-clock text-red-600"></i> 120 min</h1>
            <button className='z-20 text-white text-sm relative bg-red-600 ml-14 mt-5 py-4 px-14 rounded-full
            before:content[""] before:absolute before:h-full before:w-full before:bg-white before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-black
          '><span className='relative z-20 font-bold'>Order now</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
          </div>
        </div>
      </div>
      <div className='h-max w-full bg-black'>
        <div className='h-max w-full px-20 flex py-24'>
          <div className='h-max w-[35%]'>
            <h1 className='text-xs text-center py-5 text-red-600 font-bold tracking-[4px]'>DRY CLEANING</h1>
            <h1 className='text-white text-5xl pl-6 py-5 font-bold'>Dry cleaning any dirt inside the car and trunk</h1>
            <button className='z-20 text-white text-sm relative bg-red-600 mt-10 ml-6 mb-10 py-6 px-14 rounded-full
            before:content[""] before:absolute before:h-full before:w-full before:bg-white before:-left-full before:top-0 before:rounded-full before:z-10 hover:before:left-0 before:duration-200 overflow-hidden hover:text-black
          '><span className='relative z-20 font-bold'>Get plan</span> <i className="relative z-20 fa-solid fa-circle-chevron-right"></i></button>
          </div>
          <div className='h-max w-[50%] ml-20'>
            <img className='rounded-lg' src="/Before_01.jpg" alt="" />
            </div>
        </div>
        <div className='h-max w-[70%] mx-auto flex justify-between'>
          <div>
          <i className="fa-solid fa-spray-can-sparkles text-3xl text-red-600"></i>
            <h1 className='text-white text-2xl'>Natural Cleaners</h1>
            <p className='text-gray-600 text-sm'>Consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
          </div>
          <div>
          <i className="fa-solid fa-couch text-3xl text-red-600"></i>
            <h1 className='text-white text-2xl'>Heightened care</h1>
            <p className='text-gray-600 text-sm'>Consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
          </div>
          <div>
          <i className="fa-solid fa-bottle-water text-3xl text-red-600"></i>
            <h1 className='text-white text-2xl'>Aromatization</h1>
            <p className='text-gray-600 text-sm'>Vivamus hendrerit, eros non efficitur <br /> fermentum, purus lorem.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
