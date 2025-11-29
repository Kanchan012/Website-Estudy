import React, { useState } from "react";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.jpg";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { ToastContainer, toast, Bounce } from "react-toastify";
import logo from "./assets/logo.png"
import { NavLink } from "react-router-dom";
function App() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const [active, setActive] = useState("home");
  const handleSubmit=(e)=>{
    e.preventDefault()       //stops page reload

    if (!name || !email || !message) {
      toast.error("Please fill all fields!");
      return;
    }

    toast("Form Submitted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <>
      <nav className="bg-amber-200 p-4 shadow-xs shadow-black fixed w-full top-0">
        <div className="flex justify-between items-center ">
          <h1 className="text-black text-2xl font-bold flex  items-center">
            <img src={logo}  alt="" className="w-10" />
            eStudy</h1>
          <ul className="flex gap-5 text-black font-medium ">
         <li><a href="#home" onClick={() => setActive("home")}
                className={active === "home" ? "text-amber-500 font-extrabold" : ""}
              >Home</a></li>

            <li><a href="#aboutUs" onClick={() => setActive("aboutUS")}
                className={active === "aboutUS" ? "text-amber-500 font-extrabold" : ""}
              >About</a></li>

            <li><a href="#courses" onClick={() => setActive("courses")}
                className={active === "courses" ? "text-amber-500 font-extrabold" : ""}
              >Courses</a></li>

            <li><a href="#reviews" onClick={() => setActive("reviews")}
                className={active === "reviews" ? "text-amber-500 font-extrabold" : ""}
              >Review</a></li>

            <li><a href="#Contact" onClick={() => setActive("Contact")}
                className={active === "Contact" ? "text-amber-500 font-extrabold" : ""}
              >Contact</a></li>
          </ul>
        </div>
      </nav>
      <div id="home" className="bg-[#fcf8ed] flex p-4 pt-20">
        <div>
          <h1 className=" text-bold text-amber-500 text-4xl font-medium p-6 ">
            {" "}
            Unlocking Your best <br /> Knowledge with eStudy
          </h1>
          <p className="text-2xl p-6">
            E-study, also known as electronic study or online learning, is a
            modern way of gaining education through the internet. It allows
            students to learn from anywhere and anytime using computers,
            tablets, or mobile phones. In e-study, lessons, notes, videos, and
            quizzes are shared online through websites or apps.{" "}
          </p>
          <div  className="flex justify-center">
            <a href="#Contact">
              <button id="#Contact" className="rounded-2xl bg-amber-100 font-medium px-2  border-2 ">
                Contact Us
              </button>
           </a>
          </div>
        </div>
        <div>
          <img src={image1} alt="" className="p-4 object-cover" />
        </div>
      </div>

      <div id="aboutUs"  className="bg-[#fcf8ed] flex p-4">
        <img src={image2} alt="" className="w-96xl h-72 p-4 object-cover" />

        <div>
          <h1 className="text-bold text-amber-500 text-4xl font-medium p-6 text-center">
            About us?
          </h1>
          <p className="text-2xl p-6">
            E-study saves time, reduces paper use, and provides access to a wide
            range of learning materials. However, it also requires a good
            internet connection and self-discipline. E-study has made education
            easier, faster, and more flexible for students all around the world.
          </p>
          <div className="flex justify-center">
            <a href="#Contact">
              <button className="rounded-2xl bg-amber-100 font-medium px-2  border-2 ">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="reviews" className="bg-[#fcf8ed]">
        <h1  className="text-bold text-amber-500 text-4xl font-medium p-6 text-center">
          Reviews
        </h1>

        <div className="flex gap-10 p-6">
          <div className="bg-amber-100 p-6 rounded-2xl">
            <p className="font-medium text-black italic">
              “eStudy has completely changed the way I learn. I can easily
              attend my classes and read notes anytime. It is so flexible and
              easy to use.”
            </p>{" "}
            <br />
            <h3 className="font-semibold text-black">-Riya Sharma</h3>
            <img
              src={p1}
              alt=""
              className="rounded-full w-14 h-14 relative top-10 m-auto"
            />
          </div>

          <div className="bg-amber-100 p-6 rounded-2xl">
            <p className="font-medium text-black italic">
              “Thanks to eStudy, I can prepare for my exams from home. The
              lessons and videos are very clear and helpful.”
            </p>{" "}
            <br />
            <h3 className=" font-semibold text-black">-Sujan Thapa</h3>
            <img
              src={p2}
              alt=""
              className="rounded-full w-14 h-14 relative top-10 m-auto"
            />
          </div>

          <div className="bg-amber-100 p-6 rounded-2xl">
            <p className="font-medium text-black italic">
              “Our teachers share assignments and notes through eStudy, which
              makes learning faster and more organized.”
            </p>{" "}
            <br />
            <h3 className=" font-semibold text-black">-Anisha KC</h3>
            <img
              src={p3}
              alt=""
              className="rounded-full w-14 h-14 relative top-10 m-auto"
            />
          </div>
        </div>
      </div>

      <div id="courses"  className="bg-[#fcf8ed] p-4">
        <h1 className="text-bold text-amber-500 text-4xl font-medium p-6 text-center">
          Courses
        </h1>
        <div className="p-4 flex justify-evenly ">
          <div>
            <ul className="font-medium text-[#dbcd08] text-2xl leading-loose">
              Academic Courses
            </ul>
            <li className="font-medium leading-loose">Mathematics Mastery</li>
            <li className="font-medium leading-loose">Science Simplified</li>
            <li className="font-medium leading-loose">
              English Grammar & Writing
            </li>
            <li className="font-medium leading-loose">
              Social Studies Explorer
            </li>
            <li className="font-medium leading-loose">Computer Basics</li>
          </div>

          <div>
            <ul className="font-medium text-[#dbcd08] text-2xl leading-loose">
              Skill Development Courses
            </ul>
            <li className="font-medium leading-loose">
              Basic Coding (HTML, CSS, JavaScript)
            </li>
            <li className="font-medium leading-loose">
              Graphic Design for Beginners
            </li>
            <li className="font-medium leading-loose">Typing Practice</li>
            <li className="font-medium leading-loose">Digital Literacy</li>
            <li className="font-medium leading-loose">
              App Development Basics
            </li>
          </div>

          <div>
            <ul className="font-medium text-[#dbcd08] text-2xl leading-loose">
              Creative & Hobby Courses
            </ul>
            <li className="font-medium leading-loose">Art and Drawing</li>
            <li className="font-medium leading-loose">Music and Instruments</li>
            <li className="font-medium leading-loose">Photography Basics</li>
            <li className="font-medium leading-loose">Public Speaking</li>
            <li className="font-medium leading-loose">Creative Writing</li>
          </div>
        </div>
      </div>

      <div  id='Contact' className="p-10 bg-[#fcf8ed]">
        <h1 className="text-bold text-amber-500 text-4xl font-medium p-6 text-center mb-8">
          Contact Us
        </h1>
        <div className="flex justify-evenly gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Get in Touch
            </h2>
            <p className="mb-4 text-xl">
              We're here to help you unlock your best knowledge. Send us a
              message!
            </p>

            <p className="font-medium text-black mb-2 flex items-center gap-2">
              <MdOutlineMailOutline />
              General Inquiry:info@estudy.com
            </p>
            <p className="font-medium text-black mb-2 flex items-center gap-2">
              <IoIosCall />
              Support Hotline:(555)123-4567
            </p>
            <p className="font-medium text-black mb-2 flex items-center gap-2">
              <MdPlace />
              Address: 123 E-Learning St., Digital City, 10001
            </p>
            <p className="text-xl text-black mt-4">
              We respond to emails within 1 business day.
            </p>
          </div>

          <div className="bg-[#fcf8ed] p-3">
            <h2 className="text-2xl font-semibold text-black mb-4 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name} onChange={(e)=>setName(e.target.value)}
              className="w-full p-3 mb-4 border rounded  "
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded "
            />
            <label htmlFor="message">Messages:</label>
            <textarea
              placeholder="Your Message"
              value={message} onChange={(e)=>setMessage(e.target.value)}
              className="w-full p-3 mb-4 border rounded "
            ></textarea>
            <button type="submit" className="w-full bg-amber-500 text-white font-bold py-3 px-4 rounded">
              Submit
            </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </> 
  );
}

export default App;

