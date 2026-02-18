import React from 'react'
import dot from '../assets/icon-sub-heading.svg'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section className="bg-[var(--accent-primary)] text-white py-20 px-6 md:px-16" id='contact'>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className='content-center'>
            <div className="flex items-center gap-2 mb-3">
              <img src={dot} alt="" />
              <h1 className="text-sm font-semibold">Contact me</h1>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 textbg">
              Get in touch
            </h2>
            <p className="mb-12 max-w-xl">
              Open to exciting opportunities — feel free to reach out to discuss how I can contribute to your team.
            </p>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <div className="flex items-center gap-4 py-5 border-b border-[var(--accent-dark)]">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M35.7144 5H4.28585C2.7079 5 1.42871 6.27919 1.42871 7.85714V32.1429C1.42871 33.7208 2.7079 35 4.28585 35H35.7144C37.2924 35 38.5716 33.7208 38.5716 32.1429V7.85714C38.5716 6.27919 37.2924 5 35.7144 5Z" stroke="url(#paint0_linear_362_3352)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.42871 8.57153L18.1716 22.8572C18.685 23.2849 19.332 23.519 20.0001 23.519C20.6683 23.519 21.3153 23.2849 21.8287 22.8572L38.5716 8.57153" stroke="url(#paint1_linear_362_3352)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_362_3352" x1="38.5621" y1="5.02022" x2="-3.86113" y2="19.5426" gradientUnits="userSpaceOnUse"><stop stop-color="#F0FF6C"></stop><stop offset="1" stop-color="#6BFDD9"></stop></linearGradient><linearGradient id="paint1_linear_362_3352" x1="38.5621" y1="8.58161" x2="6.36544" y2="30.7022" gradientUnits="userSpaceOnUse"><stop stop-color="#F0FF6C"></stop><stop offset="1" stop-color="#6BFDD9"></stop></linearGradient></defs></svg>
                      </div>
                      <div>
                          <h4>Email Me At</h4>
                          <p className='text-lg font-bold'><a href="mailto:tdeepak383@gmail.com">tdeepak383@gmail.com</a></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 py-5 border-b border-[var(--accent-dark)]">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g clip-path="url(#clip0_362_3361)"><path d="M25.0283 37.1429C26.7878 38.278 28.8845 38.7727 30.9658 38.5438C33.0472 38.3148 34.9862 37.3762 36.4569 35.8858L37.7426 34.6286C38.3063 34.0521 38.6219 33.2778 38.6219 32.4715C38.6219 31.6652 38.3063 30.8909 37.7426 30.3143L32.2854 24.9143C31.7137 24.3525 30.9442 24.0376 30.1426 24.0376C29.341 24.0376 28.5715 24.3525 27.9997 24.9143V24.9143C27.4232 25.478 26.6489 25.7936 25.8426 25.7936C25.0363 25.7936 24.262 25.478 23.6854 24.9143L15.114 16.3429C14.8281 16.0611 14.601 15.7253 14.446 15.355C14.291 14.9847 14.2112 14.5872 14.2112 14.1858C14.2112 13.7843 14.291 13.3869 14.446 13.0165C14.601 12.6462 14.8281 12.3104 15.114 12.0286V12.0286C15.6759 11.4569 15.9907 10.6874 15.9907 9.88576C15.9907 9.08416 15.6759 8.31463 15.114 7.74291L9.68545 2.31434C9.1089 1.75066 8.33461 1.43506 7.5283 1.43506C6.72199 1.43506 5.94771 1.75066 5.37116 2.31434L4.11402 3.60005C2.62358 5.07074 1.68497 7.00977 1.45603 9.0911C1.22708 11.1724 1.72176 13.2691 2.85688 15.0286C8.77129 23.745 16.2967 31.251 25.0283 37.1429V37.1429Z" stroke="url(#paint0_linear_362_3361)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><linearGradient id="paint0_linear_362_3361" x1="38.6124" y1="1.4601" x2="-5.49871" y2="13.6751" gradientUnits="userSpaceOnUse"><stop stop-color="#F0FF6C"></stop><stop offset="1" stop-color="#6BFDD9"></stop></linearGradient><clipPath id="clip0_362_3361"><rect width="40" height="40" fill="white"></rect></clipPath></defs></svg>
                      </div>
                      <div>
                          <h4>Phone Number</h4>
                          <p className='text-lg font-bold'><a href="tel:+917078136062">+91 7078136062</a></p>
                      </div>
                    </div>
                </div>
                {/* <div className='flex flex-col items-center'>
                      <div className='w-48 bg-[var(--accent-dark)] rounded-2xl p-4 mb-3'>
                          <div className=''>
                            <h3 className='text-[60px] font-semibold textbg'>05</h3>
                            <p className='font-semibold'>Years Experience</p>
                          </div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <p className='text-center'><a href="/Resume.pdf" target='_blank'>My Resume </a></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.6142 9.5992L15.3426 8.95004C14.3196 8.66163 13.3877 8.11551 12.6362 7.36395C11.8846 6.61239 11.3385 5.68053 11.0501 4.65754L10.4009 2.38587C10.3683 2.30639 10.3127 2.23841 10.2413 2.19057C10.17 2.14273 10.086 2.11719 10.0001 2.11719C9.91415 2.11719 9.83017 2.14273 9.75879 2.19057C9.68742 2.23841 9.63189 2.30639 9.59924 2.38587L8.95007 4.65754C8.66166 5.68053 8.11555 6.61239 7.36399 7.36395C6.61242 8.11551 5.68056 8.66163 4.65757 8.95004L2.3859 9.5992C2.29868 9.62396 2.22191 9.67649 2.16725 9.74883C2.11258 9.82117 2.08301 9.90937 2.08301 10C2.08301 10.0907 2.11258 10.1789 2.16725 10.2512C2.22191 10.3236 2.29868 10.3761 2.3859 10.4009L4.65757 11.05C5.68056 11.3384 6.61242 11.8846 7.36399 12.6361C8.11555 13.3877 8.66166 14.3195 8.95007 15.3425L9.59924 17.6142C9.62399 17.7014 9.67653 17.7782 9.74887 17.8329C9.82121 17.8875 9.9094 17.9171 10.0001 17.9171C10.0907 17.9171 10.1789 17.8875 10.2513 17.8329C10.3236 17.7782 10.3761 17.7014 10.4009 17.6142L11.0501 15.3425C11.3385 14.3195 11.8846 13.3877 12.6362 12.6361C13.3877 11.8846 14.3196 11.3384 15.3426 11.05L17.6142 10.4009C17.7015 10.3761 17.7782 10.3236 17.8329 10.2512C17.8876 10.1789 17.9171 10.0907 17.9171 10C17.9171 9.90937 17.8876 9.82117 17.8329 9.74883C17.7782 9.67649 17.7015 9.62396 17.6142 9.5992Z" fill="url(#paint0_linear_362_3347)"></path><defs><linearGradient id="paint0_linear_362_3347" x1="17.9131" y1="2.12784" x2="-0.850705" y2="7.32707" gradientUnits="userSpaceOnUse"><stop stop-color="#F0FF6C"></stop><stop offset="1" stop-color="#6BFDD9"></stop></linearGradient></defs></svg>
                      </div>
                </div> */}
            </div>
          </div>
          <div>
              <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact