"use client"
import Notify from "@/components/Notify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 p-4 md:p-4">
      <Notify 
        heading="Hello Developer !!"
        body="This is a notification component for Next.js"
        notification="Hello Developer !!"
      />
      <ToastContainer
        position="top-left"
        limit={1}
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </main>

  );
}
