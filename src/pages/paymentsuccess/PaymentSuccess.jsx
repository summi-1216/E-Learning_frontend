import { Button } from '@/components/ui/button'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PaymentSuccess = ({user}) => {

    const params = useParams()
  return (

  
    <div class="bg-gray-100 ">
         {  user &&
         <div class="bg-white p-28  md:mx-auto ">
            <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                <path fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
            </svg>
            <div class="text-center">
                <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                <p>Your course subscription has been activated </p>
                <p>Refrence No- <span className='text-blue-700'>{params.id}</span></p>
                <div class="py-10 text-center">
                <Link to={`/${user._id}/dashboard`}>
                <Button className="bg-[#a846be] hover:bg-[#7c2c90] rounded text-white font-semibold py-3 px-12" >Go to Dashboard</Button></Link>



                    {/* <a href="#" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                        Go to Dashboard 
                   </a> */}
                </div>
            </div>
        </div>}
      </div>











    // <div className='flex items-center justify-center h-[75vh] bg-[#f5f5f5]'>
    //     {
    //         user && <div className='bg-white p-30 rounded shadow-xl items-center w-[300px]'>
    //             <h2 className='text-2xl text-[#8a4baf]'>Payment Successful</h2>
    //             <p className='text-xl text-[#8a4baf]'>Your course subscription has been activated</p>
    //             <p className='text-xl text-[#8a4baf]'>Refrence No- {params.id}</p>
    //             <Link to={`/${user._id}/dashboard`}>Go to Dashboard</Link>
    //             </div>
    //     }
    // </div>
  )
}

export default PaymentSuccess