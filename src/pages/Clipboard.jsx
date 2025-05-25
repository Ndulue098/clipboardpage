import Button from "../ui/Button";
import ComputerList from "../ui/ComputerList";
import Footer from "../ui/Footer";
import Iconlist from "../ui/Iconlist";
import ReusedIntro from "../ui/ReusedIntro";

export default function Clipboard() {
  return (
    <section className=" font-pry text-Gray500 ">
      <div className="md:max-w-none max-w-[28rem] mx-auto px-4">
        <img className="absolute  w-full left-0 hidden sm:block top-0" src="../images/bg-header-desktop.png" alt="" />
        <img className="absolute w-full left-0 sm:hidden block top-0" src="../images/bg-header-mobile.png" alt="" />
      <div className="text-center  py-14 max-w-[38rem] mx-auto">
        <img className="mx-auto w-22 mb-9" src="../images/logo.svg" alt="" />
        <h1 className="text-4xl font-semibold text-Gray700 mb-3">A history of everything you copy</h1>
        <p className="text-base mb-7">
          {" "}
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex md:flex-row flex-col gap-3 justify-center">
          <Button type="ios">Download for iOS</Button>
          <Button type="mac">Download for Mac</Button>
        </div>
        
      </div>

      <ReusedIntro head="Keep track of your snippets">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
      </ReusedIntro>


      <div className="flex items-center md:flex-row flex-col  lg:gap-24 md:gap-20 gap-8  py-14 max-w-[72rem] px-0 md:pr-4 pr-0">
        {/* image */}
        <img className="xl:ml-[-3rem] lg:ml-[-6rem] md:ml-[-20rem] ml-0" src="../images/image-computer.png" alt="" />
        <div className="flex flex-col items-center justify-center">
          <ul>
            <ComputerList title={"Quick Search"}>
              Easily search your snippets by content, category, web address,
                application, and more.
            </ComputerList>

            <ComputerList title={"iCloud Sync"}>
              Instantly saves and syncs snippets across all your devices.
            </ComputerList>

            <ComputerList title={"Complete History"}>
              Retrieve any snippets from the first moment you started using
                the app.
            </ComputerList>
          </ul>
        </div>
      </div>
      
      <ReusedIntro head="Access Clipboard anywhere">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
      </ReusedIntro>

      <img className=" mx-auto" src="../images/image-devices.png" alt="" />

      <ReusedIntro head="Supercharge your workflow">
          We’ve got the tools to boost your productivity.
      </ReusedIntro>

      <div>

        

        <ul className="flex md:flex-row flex-col items-center justify-center gap-8  py-10 max-w-[68rem] mx-auto">
          <Iconlist title={"Create blacklists"} icon={"blacklist"}>
            Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
          </Iconlist>
          <Iconlist title={"Plain text snippets"} icon={"text"}>
            Remove unwanted formatting from copied text for a consistent look.
          </Iconlist>
          <Iconlist title={"Sneak preview"} icon={"preview"}>
            Quick preview of all snippets on your Clipboard for easy access.
          </Iconlist>
         
        </ul>
      </div>

      <div className="flex  md:flex-row flex-col md:gap-0 gap-18  justify-between items-center py-32  max-w-[70rem]  mx-auto">
        {/* LOGO SECTION */}
        <img className="lg:w-full md:max-w-[7rem] " src="../images/logo-google.png" alt="" />
        <img className="lg:w-full md:max-w-[7rem] " src="../images/logo-ibm.png" alt="" />
        <img className="lg:w-full md:max-w-[7rem] " src="../images/logo-microsoft.png" alt="" />
        <img className="lg:w-full md:max-w-[7rem] " src="../images/logo-hp.png" alt="" />
        <img className="lg:w-full md:max-w-[7rem] " src="../images/logo-vector-graphics.png" alt="" />
      </div>

      <div className="text-center   pb-32 max-w-[38rem] mx-auto ">
        <h2 className="text-3xl font-medium text-Gray700 mb-3">Clipboard for iOS and Mac OS</h2>

        <p className="mb-9 text-base">Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you’re ready to start adding to your clipboard.</p>
        <div className="flex md:flex-row flex-col gap-5  justify-center">
          <Button>Download for iOS</Button>
          <Button type={"mac"}>Download for Mac</Button>
        </div>
      </div>

      </div>
        
      <Footer/>

    </section>
  );
}

/* 

  

  

  


  

 

  

  

  

  

  

  

  








*/
