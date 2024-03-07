import { useState } from "react";
import './About.css'
import card1 from '../Assets/card1.jpeg'
import card2 from '../Assets/card2.jpeg'
import { BsArrowRight } from "react-icons/bs";

function AboutBitcoin() {
  const [courses] = useState([

    {
      title: 'Lorem ipsum dolor sit amet.',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum soluta quaerat minima consectetur dolorum reprehenderit odit, deleniti fuga iusto inventore, mollitia qui ipsam! Veritatis ducimus quae quia fugiat repellat, molestiae impedit provident. Labore possimus nihil illo reiciendis corrupti dolorum obcaecati. Esse voluptate reprehenderit illo aperiam eos autem, amet aut.",
    },
    {
      title: '',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea soluta at assumenda dicta veritatis iusto autem veniam quia hic, sapiente, debitis dolor quidem sit quis dolore doloremque obcaecati asperiores aspernatur nesciunt repellendus nihil officia facilis nemo id! Aspernatur, dolores officiis suscipit, at et, eaque provident odit sunt ipsam dolore numquam! "
    },
    {
      title: '',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis omnis maxime! Sapiente labore, odit soluta rem beatae voluptatem, dolorem hic maiores magnam dolorum harum mollitia nulla odio facere laboriosam nostrum quam ex. Magnam temporibus sint voluptatum expedita rem a mollitia deleniti animi possimus. Officiis nulla quia laudantium autem. Adipisci."
    },

  ]);
  return (
    <div className='text-wrap block mt-8 shadow-md bg-white max-w-5xl p-4' >
      <div className='text-wrap ml-8 mt-4 mb-4'>
        <b className="font-extrabold text-3xl"> About Blockchain</b>
      </div>
      <div className="block text-wrap mt-6 ml-8 mr-8 pb-3 border-b-2">
        <b>What is Blockchain?</b>
        <p className=" text-wrap mt-2">Are you inquisitive about the human mind and behaviours? Do you enjoy reading people closely and analyzing their every step? Are you good at listening to people and empathizing with them? Are you the person people turn to when looking for any advice? Then, Psychology is the field for you! This program generally offers education in human behavior and related sciences, along with core psychology course work.</p>
      </div>
      <div className="text-wrap border-b-2 pb-3 ">
        {courses.map((course, index) => (
          <div key={index} className="text-wrap mt-6 ml-8 mr-8 justify-center ">
            <b className='text-wrap'>{course.title}</b>
            <span className="text-wrap block mt-2">{course.description}</span>
          </div>
        ))}
      </div>
      <div className=" box border-b-2 flex flex-wrap sm:flex-col md:flex-row align-center sm:justify-center overflow-hidden">
      <div className="p-6 w-full md:w-1/2">
        <div className="flex bg-gradient-to-br from-green-300 to-blue-700 p-4 rounded-md items-center justify-center sm:justify-start">
          <img src={card1} alt="" style={{ height: "128px", width: "128px" }} className="rounded-lg overflow-hidden" />
          <div className="ml-6 sm:ml-16">
            <h1 className="text-white text-2xl">Calculate your Profits</h1>
            <button className="mt-6 text-sm text-black bg-white rounded-lg p-2 font-bold inline-flex items-center">Check Now
              <span className="ml-2"><BsArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 w-full md:w-1/2">
        <div className="flex bg-gradient-to-br from-orange-400 to-red-600 p-4 rounded-md items-center justify-center sm:justify-start overflow-auto">
          <img src={card2} alt="" style={{ height: "128px", width: "128px" }} className="rounded-md overflow-hidden" />
          <div className="ml-6 sm:ml-16">
            <h1 className="text-white text-2xl">Calculate your tax liability</h1>
            <button className="mt-6 text-sm text-black bg-white rounded-lg p-2 font-bold inline-flex items-center">Check Now
              <span className="ml-2"><BsArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
      <div className=" block text-wrap pt-3 pb-3 pl-8 pr-8 justify-center">
        <p className="text-wrap"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugiat soluta in iure laboriosam eos deserunt nostrum aut reiciendis beatae animi officiis autem a, tempora modi repellat inventore corrupti quis. Magni dolor consectetur excepturi magnam obcaecati, veritatis doloremque mollitia maxime, error deleniti esse, explicabo pariatur totam eos ab sequi! Commodi?</p>
      </div>
      </div>
  )
}

export default AboutBitcoin;
