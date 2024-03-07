import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sentiment = () => {
  const slides = [
    { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique, metus nec efficitur feugiat, nisl elit fermentum velit, vel aliquet purus dui nec erat. Nullam non arcu ac justo venenatis volutpat. Integer congue, ex ut tristique commodo, lacus tortor vestibulum justo, nec ultricies purus risus nec mauris. Ut sit amet nisi vel lectus luctus luctus ac vel justo. Morbi euismod leo eget justo egestas, a dictum risus dictum',color: 'red' },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique, metus nec efficitur feugiat, nisl elit fermentum velit, vel aliquet purus dui nec erat. Nullam non arcu ac justo venenatis volutpat. Integer congue, ex ut tristique commodo, lacus tortor vestibulum justo, nec ultricies purus risus nec mauris. Ut sit amet nisi vel lectus luctus luctus ac vel justo. Morbi euismod leo eget justo egestas, a dictum risus dictum' ,color: 'red'},
    { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique, metus nec efficitur feugiat, nisl elit fermentum velit, vel aliquet purus dui nec erat. Nullam non arcu ac justo venenatis volutpat. Integer congue, ex ut tristique commodo, lacus tortor vestibulum justo, nec ultricies purus risus nec mauris. Ut sit amet nisi vel lectus luctus luctus ac vel justo. Morbi euismod leo eget justo egestas, a dictum risus dictum',color: 'red' },
    { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique, metus nec efficitur feugiat, nisl elit fermentum velit, vel aliquet purus dui nec erat. Nullam non arcu ac justo venenatis volutpat. Integer congue, ex ut tristique commodo, lacus tortor vestibulum justo, nec ultricies purus risus nec mauris. Ut sit amet nisi vel lectus luctus luctus ac vel justo. Morbi euismod leo eget justo egestas, a dictum risus dictum' ,color: 'red'},
  ];

  const backgroundColors = ['#FFD700', '#FF6347', '#87CEEB', '#90EE90'];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className='mt-8 mb-8 p-8 bg-white rounded-md shadow-md'>
      <h1 className='font-extrabold text-4xl mb-4'>Sentiment</h1>
      <div>
        <div className='flex'>
          <h1 className='text-2xl mb-5'>Key Events </h1>
          <svg className='mt-1.5 ml-1' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_773)">
              <path d="M10.04 2.4635C5.43997 2.4635 1.70663 6.19683 1.70663 10.7968C1.70663 15.3968 5.43997 19.1302 10.04 19.1302C14.64 19.1302 18.3733 15.3968 18.3733 10.7968C18.3733 6.19683 14.64 2.4635 10.04 2.4635ZM10.8733 14.9635H9.20663V9.9635H10.8733V14.9635ZM10.8733 8.29683H9.20663V6.63017H10.8733V8.29683Z" fill="#7C7E8C"/>
            </g>
            <defs>
              <clipPath id="clip0_1_773">
                <rect width="20" height="20" fill="white" transform="translate(0.039978 0.796875)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={slide.id}  >
            <div className='flex' style={{height: '300px' }}>
             <div className='w-2/3'>
             <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.046875" width="44" height="44" rx="22" fill="#0082FF"/>
            <path d="M15 25.2569V22.4569H17.8V25.2569H15ZM29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8781 11.3073 13.2719C10.9134 13.6658 10.6922 14.1999 10.6922 14.7569V27.3569C10.6922 28.2851 11.0609 29.1754 11.7173 29.8317C12.3737 30.4881 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4881 32.2827 29.8317C32.939 29.1754 33.3078 28.2851 33.3078 27.3569V18.9569C33.3078 18.3999 33.0865 17.8658 32.6927 17.4719C32.2989 17.0781 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1645 30.3263 27.3426 30.195 27.4738C30.0637 27.6051 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6051 29.205 27.4738C29.0737 27.3426 29 27.1645 29 26.9789V14.7485ZM13.6 17.5569C13.6 17.3712 13.6737 17.1932 13.805 17.0619C13.9363 16.9306 14.1143 16.8569 14.3 16.8569H25.5C25.6857 16.8569 25.8637 16.9306 25.995 17.0619C26.1262 17.1932 26.2 17.3712 26.2 17.5569C26.2 17.7425 26.1262 17.9206 25.995 18.0518C25.8637 18.1831 25.6857 18.2569 25.5 18.2569H14.3C14.1143 18.2569 13.9363 18.1831 13.805 18.0518C13.6737 17.9206 13.6 17.7425 13.6 17.5569ZM21.3 21.0569H25.5C25.6857 21.0569 25.8637 21.1306 25.995 21.2619C26.1262 21.3932 26.2 21.5712 26.2 21.7569C26.2 21.9425 26.1262 22.1206 25.995 22.2518C25.8637 22.3831 25.6857 22.4569 25.5 22.4569H21.3C21.1143 22.4569 20.9363 22.3831 20.805 22.2518C20.6737 22.1206 20.6 21.9425 20.6 21.7569C20.6 21.5712 20.6737 21.3932 20.805 21.2619C20.9363 21.1306 21.1143 21.0569 21.3 21.0569ZM20.6 25.9569C20.6 25.7712 20.6737 25.5932 20.805 25.4619C20.9363 25.3306 21.1143 25.2569 21.3 25.2569H25.5C25.6857 25.2569 25.8637 25.3306 25.995 25.4619C26.1262 25.5932 26.2 25.7712 26.2 25.9569C26.2 26.1425 26.1262 26.3206 25.995 26.4518C25.8637 26.5831 25.6857 26.6569 25.5 26.6569H21.3C21.1143 26.6569 20.9363 26.5831 20.805 26.4518C20.6737 26.3206 20.6 26.1425 20.6 25.9569ZM14.3 21.0569H18.5C18.6857 21.0569 18.8637 21.1306 18.995 21.2619C19.1263 21.3932 19.2 21.5712 19.2 21.7569V25.9569C19.2 26.1425 19.1263 26.3206 18.995 26.4518C18.8637 26.5831 18.6857 26.6569 18.5 26.6569H14.3C14.1143 26.6569 13.9363 26.5831 13.805 26.4518C13.6737 26.3206 13.6 26.1425 13.6 25.9569V21.7569C13.6 21.5712 13.6737 21.3932 13.805 21.2619C13.9363 21.1306 14.1143 21.0569 14.3 21.0569Z" fill="white"/>
            </svg>
             </div>
             <div className='flex flex-col'>
             <h2 className='font-bold'>{slide.title}</h2>
              <p className='mt-4'>{slide.text}</p>
             </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex mt-4'>
        <h1 className='text-2xl'>Analyst Estimates </h1>
        <svg className='mt-1.5 ml-1' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_773)">
            <path d="M10.04 2.4635C5.43997 2.4635 1.70663 6.19683 1.70663 10.7968C1.70663 15.3968 5.43997 19.1302 10.04 19.1302C14.64 19.1302 18.3733 15.3968 18.3733 10.7968C18.3733 6.19683 14.64 2.4635 10.04 2.4635ZM10.8733 14.9635H9.20663V9.9635H10.8733V14.9635ZM10.8733 8.29683H9.20663V6.63017H10.8733V8.29683Z" fill="#7C7E8C"/>
          </g>
          <defs>
            <clipPath id="clip0_1_773">
              <rect width="20" height="20" fill="white" transform="translate(0.039978 0.796875)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      
      <div className='flex mt-14'>
        <div className='w-1/3'>
             <h1 className='rounded-full w-[200px] h-[200px] bg-green-300 flex items-center justify-center text-6xl text-green-700'>76%</h1>
        </div>
        <div className='flex flex-col justify-evenly'>
          <div className='flex'>
           Buy
           <h1 className=' ml-6 w-[300px] bg-green-900 mr-6' > </h1> 76%
          </div>
          <div className='flex'>
           Hold
           <h1 className=' ml-6 w-[50px] bg-green-300 mr-6' > </h1> 8%
          </div>
          <div className='flex'>
           Sell
           <h1 className=' ml-6 w-[150px] bg-green-500 mr-6' > </h1> 16%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
