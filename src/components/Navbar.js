'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Crypto Taxes',
    href: '#',
  },
  {
    name: 'Free Tools',
    href: '#',
  },
  {
    name: 'Resource Center',
    href: '#',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className=" w-full bg-white mt-[-40px]">
      <div className="flex  items-center justify-between px-8 py-8 sm:px-8 lg:px-20 ">
        <div className="inline-flex items-center space-x-2">
          <span className='ml-12'>
                        <svg width="81" height="21" viewBox="0 0 81 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0776 6.16429L30.3998 5.65592L30.694 5.34435C30.6746 4.84358 30.9048 4.24746 31.3433 3.75316C31.8241 3.21118 32.4565 2.90339 32.9887 2.91471L33.2805 2.60571L33.7889 3.28354L33.7797 3.29327C34.1739 3.81646 34.0171 4.7596 33.3395 5.52364C32.6211 6.3329 31.6339 6.5853 31.08 6.16171L31.0776 6.16429Z" fill="url(#paint0_linear_57_443)"/>
                <path d="M32.876 5.04837C33.6461 4.18029 33.797 3.05644 33.2128 2.53819C32.6287 2.01993 31.5308 2.30352 30.7606 3.17161C29.9904 4.03969 29.8396 5.16354 30.4238 5.68179C31.0079 6.20005 32.1058 5.91646 32.876 5.04837Z" fill="url(#paint1_linear_57_443)"/>
                <path d="M32.8866 5.0581C33.652 4.19534 33.7943 3.07158 33.2042 2.5481C32.6142 2.02463 31.5154 2.29968 30.7499 3.16244C29.9845 4.0252 29.8423 5.14897 30.4323 5.67244C31.0223 6.19591 32.1211 5.92086 32.8866 5.0581Z" fill="#0052FE"/>
                <path d="M8.04306 10.4317L15.5479 2.39062H11.5569L3.58637 10.7631V2.39062H0V19.0393H3.58637V15.1141L5.68152 12.9396L10.6723 19.0393H14.8837L8.55075 11.0708L8.04306 10.431V10.4317Z" fill="#0052FE"/>
                <path d="M27.1136 9.78978C25.9979 8.01998 23.9509 6.92529 21.4551 6.92529C18.7879 6.92529 16.6223 8.17656 15.5662 10.1592C15.11 11.0085 14.8613 11.9947 14.8613 13.0718C14.8613 16.6656 17.6444 19.2183 21.4551 19.2183C25.2659 19.2183 28.028 16.6656 28.028 13.0718C28.028 11.8334 27.6993 10.7177 27.1136 9.78978ZM21.4551 16.3776C19.7172 16.3776 18.3799 15.1351 18.3799 13.0718C18.3799 11.2973 19.3668 10.13 20.7488 9.83858C20.9746 9.7891 21.2111 9.7647 21.4551 9.7647C21.6266 9.7647 21.7913 9.77554 21.9533 9.80198C23.4371 10.0162 24.5074 11.2098 24.5074 13.0718C24.5074 15.1351 23.1938 16.3776 21.4558 16.3776H21.4551Z" fill="#0052FE"/>
                <path d="M33.82 7.10278H30.3448V19.0399H33.82V7.10278Z" fill="#0052FE"/>
                <path d="M44.3371 6.92529C42.7104 6.92529 41.3066 7.48111 40.3712 8.50056V7.10288H37.0519V19.04H40.5264V13.1376C40.5264 12.2699 40.7135 11.586 41.0463 11.0783C41.5506 10.2954 42.3911 9.92195 43.4017 9.92195C44.7675 9.92195 45.623 10.6221 45.7965 12.1303C45.8189 12.3187 45.8297 12.5234 45.8297 12.739V19.0394H47.7439L49.3069 16.869V12.2076C49.3069 8.56698 47.1671 6.92529 44.3371 6.92529Z" fill="#0052FE"/>
                <path d="M67.3716 2.33374L50.3223 19.0401H55.6289L57.1866 16.8256L66.0085 4.27367L67.3716 2.33374Z" fill="url(#paint2_linear_57_443)"/>
                <path d="M62.3462 2.33374L61.8012 3.09155L53.245 14.9779L50.3223 19.0401L67.3716 2.33374H62.3462Z" fill="url(#paint3_linear_57_443)"/>
                <path d="M65.6838 16.1226L65.4635 15.8108C65.2798 15.5505 64.9809 15.396 64.6637 15.396H60.653C60.5045 15.396 60.3893 15.4841 60.3344 15.6014L67.7478 19.04L65.6838 16.1226Z" fill="#F69300"/>
                <path d="M60.3344 15.6016C60.2856 15.7059 60.2849 15.8334 60.3575 15.9445L61.181 17.1978H61.1831L62.3943 19.0402H67.7485L60.3351 15.6016H60.3344Z" fill="url(#paint4_linear_57_443)"/>
                <path d="M57.9241 5.42603L56.6545 3.56201L55.8181 2.33447H50.5798L57.842 5.90728C57.9844 5.80087 58.0379 5.59345 57.9247 5.42603H57.9241Z" fill="url(#paint5_linear_57_443)"/>
                <path d="M50.5792 2.33393L52.814 5.55563C52.8234 5.56851 52.8323 5.57935 52.8417 5.59223C53.0268 5.83421 53.3135 5.97723 53.6199 5.97723H57.6326C57.7146 5.97723 57.7844 5.94877 57.842 5.90606L50.5798 2.33325L50.5792 2.33393Z" fill="#F69300"/>
                <path d="M74.7411 2.97178H73.3299V6.6727H72.3764V2.97178H70.9845V2.26685H74.7411V2.97178ZM76.523 2.26685L77.7078 5.44885L78.8878 2.26685H80.1351V6.6727H79.1719V5.44885L79.2779 3.36341L78.0305 6.6727H77.3803L76.1377 3.36831L76.2341 5.44885V6.6727H75.2853V2.26685H76.523Z" fill="black"/>
                <defs>
                <linearGradient id="paint0_linear_57_443" x1="33.8736" y1="3.45301" x2="31.3317" y2="6.41849" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3372F5"/>
                <stop offset="0.249995" stop-color="#3372F5"/>
                <stop offset="0.505208" stop-color="#80DBFB"/>
                <stop offset="0.838547" stop-color="#3372F5"/>
                <stop offset="1" stop-color="#3372F5"/>
                </linearGradient>
                <linearGradient id="paint1_linear_57_443" x1="37.6371" y1="3.44302" x2="36.9571" y2="4.20848" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0080D4"/>
                <stop offset="0.47" stop-color="white"/>
                <stop offset="0.6" stop-color="#F1F8FC"/>
                <stop offset="1" stop-color="#007DCC"/>
                </linearGradient>
                <linearGradient id="paint2_linear_57_443" x1="63.5412" y1="6.81687" x2="56.9358" y2="14.4587" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFAC00"/>
                <stop offset="1" stop-color="#FE7801"/>
                </linearGradient>
                <linearGradient id="paint3_linear_57_443" x1="50.3223" y1="10.6872" x2="67.3716" y2="10.6872" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFCE00"/>
                <stop offset="1" stop-color="#FFB003"/>
                </linearGradient>
                <linearGradient id="paint4_linear_57_443" x1="60.2998" y1="17.3212" x2="67.7478" y2="17.3212" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE8B01"/>
                <stop offset="1" stop-color="#FE7801"/>
                </linearGradient>
                <linearGradient id="paint5_linear_57_443" x1="50.5792" y1="4.12054" x2="57.9857" y2="4.12054" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFCE00"/>
                <stop offset="1" stop-color="#FFC101"/>
                </linearGradient>
                </defs>
                </svg>
          </span>
        </div>
        <div className="hidden lg:block space-x-12 items-end">
        <ul className="ml-24 inline-flex space-x-8 ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{ background: 'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)' }} >
            Get Started
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                    <svg width="81" height="21" viewBox="0 0 81 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0776 6.16429L30.3998 5.65592L30.694 5.34435C30.6746 4.84358 30.9048 4.24746 31.3433 3.75316C31.8241 3.21118 32.4565 2.90339 32.9887 2.91471L33.2805 2.60571L33.7889 3.28354L33.7797 3.29327C34.1739 3.81646 34.0171 4.7596 33.3395 5.52364C32.6211 6.3329 31.6339 6.5853 31.08 6.16171L31.0776 6.16429Z" fill="url(#paint0_linear_57_443)"/>
                        <path d="M32.876 5.04837C33.6461 4.18029 33.797 3.05644 33.2128 2.53819C32.6287 2.01993 31.5308 2.30352 30.7606 3.17161C29.9904 4.03969 29.8396 5.16354 30.4238 5.68179C31.0079 6.20005 32.1058 5.91646 32.876 5.04837Z" fill="url(#paint1_linear_57_443)"/>
                        <path d="M32.8866 5.0581C33.652 4.19534 33.7943 3.07158 33.2042 2.5481C32.6142 2.02463 31.5154 2.29968 30.7499 3.16244C29.9845 4.0252 29.8423 5.14897 30.4323 5.67244C31.0223 6.19591 32.1211 5.92086 32.8866 5.0581Z" fill="#0052FE"/>
                        <path d="M8.04306 10.4317L15.5479 2.39062H11.5569L3.58637 10.7631V2.39062H0V19.0393H3.58637V15.1141L5.68152 12.9396L10.6723 19.0393H14.8837L8.55075 11.0708L8.04306 10.431V10.4317Z" fill="#0052FE"/>
                        <path d="M27.1136 9.78978C25.9979 8.01998 23.9509 6.92529 21.4551 6.92529C18.7879 6.92529 16.6223 8.17656 15.5662 10.1592C15.11 11.0085 14.8613 11.9947 14.8613 13.0718C14.8613 16.6656 17.6444 19.2183 21.4551 19.2183C25.2659 19.2183 28.028 16.6656 28.028 13.0718C28.028 11.8334 27.6993 10.7177 27.1136 9.78978ZM21.4551 16.3776C19.7172 16.3776 18.3799 15.1351 18.3799 13.0718C18.3799 11.2973 19.3668 10.13 20.7488 9.83858C20.9746 9.7891 21.2111 9.7647 21.4551 9.7647C21.6266 9.7647 21.7913 9.77554 21.9533 9.80198C23.4371 10.0162 24.5074 11.2098 24.5074 13.0718C24.5074 15.1351 23.1938 16.3776 21.4558 16.3776H21.4551Z" fill="#0052FE"/>
                        <path d="M33.82 7.10278H30.3448V19.0399H33.82V7.10278Z" fill="#0052FE"/>
                        <path d="M44.3371 6.92529C42.7104 6.92529 41.3066 7.48111 40.3712 8.50056V7.10288H37.0519V19.04H40.5264V13.1376C40.5264 12.2699 40.7135 11.586 41.0463 11.0783C41.5506 10.2954 42.3911 9.92195 43.4017 9.92195C44.7675 9.92195 45.623 10.6221 45.7965 12.1303C45.8189 12.3187 45.8297 12.5234 45.8297 12.739V19.0394H47.7439L49.3069 16.869V12.2076C49.3069 8.56698 47.1671 6.92529 44.3371 6.92529Z" fill="#0052FE"/>
                        <path d="M67.3716 2.33374L50.3223 19.0401H55.6289L57.1866 16.8256L66.0085 4.27367L67.3716 2.33374Z" fill="url(#paint2_linear_57_443)"/>
                        <path d="M62.3462 2.33374L61.8012 3.09155L53.245 14.9779L50.3223 19.0401L67.3716 2.33374H62.3462Z" fill="url(#paint3_linear_57_443)"/>
                        <path d="M65.6838 16.1226L65.4635 15.8108C65.2798 15.5505 64.9809 15.396 64.6637 15.396H60.653C60.5045 15.396 60.3893 15.4841 60.3344 15.6014L67.7478 19.04L65.6838 16.1226Z" fill="#F69300"/>
                        <path d="M60.3344 15.6016C60.2856 15.7059 60.2849 15.8334 60.3575 15.9445L61.181 17.1978H61.1831L62.3943 19.0402H67.7485L60.3351 15.6016H60.3344Z" fill="url(#paint4_linear_57_443)"/>
                        <path d="M57.9241 5.42603L56.6545 3.56201L55.8181 2.33447H50.5798L57.842 5.90728C57.9844 5.80087 58.0379 5.59345 57.9247 5.42603H57.9241Z" fill="url(#paint5_linear_57_443)"/>
                        <path d="M50.5792 2.33393L52.814 5.55563C52.8234 5.56851 52.8323 5.57935 52.8417 5.59223C53.0268 5.83421 53.3135 5.97723 53.6199 5.97723H57.6326C57.7146 5.97723 57.7844 5.94877 57.842 5.90606L50.5798 2.33325L50.5792 2.33393Z" fill="#F69300"/>
                        <path d="M74.7411 2.97178H73.3299V6.6727H72.3764V2.97178H70.9845V2.26685H74.7411V2.97178ZM76.523 2.26685L77.7078 5.44885L78.8878 2.26685H80.1351V6.6727H79.1719V5.44885L79.2779 3.36341L78.0305 6.6727H77.3803L76.1377 3.36831L76.2341 5.44885V6.6727H75.2853V2.26685H76.523Z" fill="black"/>
                        <defs>
                        <linearGradient id="paint0_linear_57_443" x1="33.8736" y1="3.45301" x2="31.3317" y2="6.41849" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3372F5"/>
                        <stop offset="0.249995" stop-color="#3372F5"/>
                        <stop offset="0.505208" stop-color="#80DBFB"/>
                        <stop offset="0.838547" stop-color="#3372F5"/>
                        <stop offset="1" stop-color="#3372F5"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_57_443" x1="37.6371" y1="3.44302" x2="36.9571" y2="4.20848" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0080D4"/>
                        <stop offset="0.47" stop-color="white"/>
                        <stop offset="0.6" stop-color="#F1F8FC"/>
                        <stop offset="1" stop-color="#007DCC"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_57_443" x1="63.5412" y1="6.81687" x2="56.9358" y2="14.4587" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFAC00"/>
                        <stop offset="1" stop-color="#FE7801"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_57_443" x1="50.3223" y1="10.6872" x2="67.3716" y2="10.6872" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFCE00"/>
                        <stop offset="1" stop-color="#FFB003"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_57_443" x1="60.2998" y1="17.3212" x2="67.7478" y2="17.3212" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FE8B01"/>
                        <stop offset="1" stop-color="#FE7801"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_57_443" x1="50.5792" y1="4.12054" x2="57.9857" y2="4.12054" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFCE00"/>
                        <stop offset="1" stop-color="#FFC101"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  style={{ background: 'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)' }} >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar