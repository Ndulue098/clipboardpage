export default function Footer() {
    return  <footer className="bg-Gray500/35 py-10 px-0 md:px-4">
        <div className="flex md:flex-row flex-col  justify-between items-center max-w-[72rem] mx-auto md:gap-0 gap-8">
          <div className="flex md:flex-row flex-col items-center lg:gap-[9rem] md:gap-[4rem] gap-9">
            <img className="w-[4rem]" src="../images/logo.svg" alt="" />
         
            <div className="grid md:text-start text-center md:grid-cols-3 grid-cols-1 gap-y-3 gap-x-7">
              <p>FAQs</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Press Kit</p>
              <p>Install Guide</p>
            </div>

          </div>
          <div className="flex gap-5">
            <img src="../images/icon-facebook.svg" alt="" />
            <img src="../images/icon-twitter.svg" alt="" />
            <img src="../images/icon-instagram.svg" alt="" />
          </div>
        </div>
      </footer>
}

