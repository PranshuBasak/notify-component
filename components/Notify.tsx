import Image from 'next/image'
import { toast } from 'react-toastify'

const Notify = ({heading, body, notification}:
     {heading: string, body: string, notification: string}) => {

        const notify = () =>{
            toast(notification)
        }

  return (
    <>
        <header className="flex flex-col items-center justify-start gap-2">
            <h1 className="font-inter text-center text-xl 
                md:text-2xl lg:text-4xl 
                font-medium leading-none">
                    {heading}
            </h1>
            <h3 className="font-inter text-center text-sm 
                md:text-base lg:text-lg 
                font-normal leading-6">
                    {body}
            </h3>
        </header> 
        <Image 
            src="/images/hero.svg" 
            alt="Hero" 
            width={400} 
            height={400} 
            priority={true}/>
        <button 
            className=" font-inter font-semibold text-lg 
            leading-4 text-center inline-flex h-12 
            animate-shimmer items-center justify-center rounded-md 
            border border-slate-800 hover:border-[#DE502C] 
            bg-[linear-gradient(90deg,#9D0D3D00,45%,#DF522B,55%,#C77D2C00)] 
            bg-[length:200%_100%] px-10 transition-colors 
            focus:inline-none focus:ring-1 focus:ring-[#DF522B] 
            focus:ring-offset-1 focus:ring-offset-[#df522bc2]" 
            onClick={notify}
            >
            Send Notification
        </button>
    </>
  )
}

export default Notify