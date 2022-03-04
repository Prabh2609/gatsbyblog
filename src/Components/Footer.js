import React from 'react'
import {BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className='text-center text-lg-start bg-light text-muted mt-4'>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 flex-wrap">
    {/* <!-- Left --> */}
    <div>
      <span className='me-4'><strong>Terms and Conditions</strong></span>
      <span className='me-2'><strong>Privacy Policy</strong></span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="" className="me-4 text-reset">
        <span>Follow</span>
      </a>
      <span className='me-4'>Facebook</span>
      <span className='me-4'>Twitter</span>
      <span className='me-4'>Insta</span>
    </div>
    {/* <!-- Right --> */}
  </section>
    </footer>
  )
}

export default Footer