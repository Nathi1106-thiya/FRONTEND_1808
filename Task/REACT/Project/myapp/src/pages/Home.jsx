import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

import pic1 from '../assets/fam2.jpeg'
import pic2 from '../assets/fam1.jpg'
import pic3 from '../assets/4.jpeg'
import pic4 from '../assets/activity2.jpeg'
import pic5 from '../assets/activity23.jpeg'

const images = [pic1, pic2, pic3, pic4, pic5]

const Home = () => {

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />

      <div className="bg-[#bda49a] py-3 px-2 ">

       <div className="w-full rounded-2xl">

          <h1 className="text-center text-3xl font-bold text-[#ad114d] mb-4">
            My Diwali Memories ✨
          </h1>

          <div className="w-500px h-[200px] md:h-[400px] rounded-2xl overflow-hidden">

  <img
    src={images[current]}
    alt="Diwali Memories"
    className="w-full h-full object-cover"
  />

</div>

          <div className="flex justify-center gap-3 mt-5">

      {images.map((img, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`h-2.5 rounded-full transition-all duration-500 ${
            current === index
              ? 'w-8 bg-[#B77A94]'
              : 'w-2.5 bg-[#E8C9D8]'
          }`}
        />
      ))}

    </div>

        </div>
      </div>
    </>
  )
}

export default Home