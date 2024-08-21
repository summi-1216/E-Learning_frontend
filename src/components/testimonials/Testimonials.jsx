import React from 'react'

const Testimonials = () => {

    const testimonialsData = [
        {
          id: 1,
          name: "John Doe",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        },
        {
          id: 2,
          name: "Jane Smith",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id: 3,
          name: "John Doe",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        },
        {
          id: 4,
          name: "Jane Smith",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
      ];
  return (
    <section>
        <div className="max-w-7xl mx-auto my-20">
        <h2 className='text-4xl font-bold'>What our <span className='text-[#9625af]'>students</span> say</h2>
        <div  className=' flex gap-2 rounded-md shadow-2xl my-16 bg-white border border-gray-100 cursor-pointer '>
            {
                testimonialsData.map((e)=>(
                    <div className='bg-white shadow p-20  text-left max-w-2xl items-center' key={e.id}>
                        <div className='md:shrink-0 md:flex'>
                            <img src={e.image} alt="" className='rounded-full h-24 w-24 mb-10' />
                        </div>
                        <p className='items-center font-serif mb-9 text-slate-800 text-md'>{e.message}</p>
                        <div className='text-center'>
                            <p className='font-bold text-[#9625af] mb-5 text-xl'>{e.name}</p>
                            <p className='text-lg text-slate-700'>{e.position}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
        
    </section>
  )
}

export default Testimonials