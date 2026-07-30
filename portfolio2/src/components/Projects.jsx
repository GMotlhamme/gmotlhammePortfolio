
function Projects() {

    return (
        <>
        <section
            id="projects"
            className="rounded-lg my-2 lg:my-0 h-fit flex overflow-x-scroll lg:overflow-x-hidden lg:col-span-full lg:grid lg:grid-cols-3 gap-2 "
          >
            <div
              id="first-project"
              className='bg-[url("/soft-performance.jpg")] backdrop-blur-2xl dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-bottom font-semibold flex flex-col lg:flex-row justify-around items-center rounded-lg lg:h-120  lg:col-span-2 p-5 py-16 gap-5'
            >
              <span className="lg:text-6xl text-5xl italic font-bold">
                SOUNDSCAPE
              </span>
              <div className="gap-8 flex flex-col ">
                <p className="text-2xl font-light">
                  A full-stack E-commerce application designed to provide users
                   with a seamless platform to purchase music and 
                   entertainment-related equipment. Products range 
                   from earphones and speakers to professional instruments.
                </p>
                
                  <a
                    href="https://github.com/GMotlhamme/SoundScape"
                    target="_blank"
                    className="border-2 flex justify-center dark:border-amber-200 dark:hover:text-amber-300 cursor-pointer rounded "
                  >
                    VIEW
                  </a>
              </div>
            </div>

            <div
              id="second-project"
              className='bg-[url("/soft-performance.jpg")] dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-left flex flex-col  lg:h-full justify-center gap-15 lg:col-span-1  items-center text-center rounded-lg p-5 py-16 '
            >
              <span className="text-5xl italic font-bold">CLARITY CAPITAL</span>
              <div className="gap-15 flex flex-col ">
                <p className="text-xl  font-light text-start">
                 A secure banking application built to demonstrate
                  secure software development principles and modern
                   web application security practices.
                </p>
                
                  <a
                    href="https://github.com/GMotlhamme/ClarityCapitalBankInc"
                    target="_blank"
                    className="border-2 dark:border-amber-200 dark:hover:text-amber-300 cursor-pointer rounded "
                  >
                    VIEW
                  </a>
              </div>
            </div>

            <div
              id="third-project"
              className='bg-[url("/soft-performance.jpg")] dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-left flex flex-col items-center lg:text-center p-3 justify-center gap-15 rounded-lg lg:h-120 h-fit py-16 lg:col-span-1 col-span-2'
            >
              <span className="text-5xl italic font-bold">FINANCE LAB</span>
              <div className="gap-15 flex flex-col px-11">
                <p className="text-xl font-light text-start">
                 Finance Lab is a modern web application designed to help
                  users manage their finances seamlessly. With secure
                  authentication, clean UI inspired by Dribbble, and
                  smart features like session handling and balance 
                  tracking, Finance Lab is a lightweight personal 
                  finance tracker built for growth.
                </p>
              
                  <a
                    href="https://github.com/GMotlhamme/Finance-Lab"
                    target="_blank"
                    className="border-2 dark:border-amber-200 dark:hover:text-amber-300 cursor-pointer rounded "
                  >
                    VIEW
                  </a>
              </div>
            </div>

            <div
              id="fourth-project"
              className='bg-[url("/soft-performance.jpg")] dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-bottom  flex flex-col lg:flex-row justify-center lg:justify-around items-center rounded-lg lg:py-6 py-16 col-span-2 gap-5 px-5'
            >
              <span className="text-6xl italic font-bold"> CHEF PADRE </span>
              <div className="gap-8 flex flex-col ">
                <p className="text-2xl font-light w-95">
                  AIChef is a smart recipe generator built with React.js, 
                  powered by Gemini AI, and styled using Tailwind CSS. 
                  Simply enter the ingredients you have, and AIChef will 
                  whip up a delicious recipe using AI-generated suggestions. 
                  The app also supports rich markdown rendering to 
                  beautifully display the AI's output.
                </p>
                  <a className="justify-center flex border-2 dark:border-amber-200 dark:hover:text-amber-300 cursor-pointer px-2 rounded " href="https://github.com/GMotlhamme/AiChef" target="_blank" >
                    VIEW
                  </a>
              </div>
            </div>
          </section>
        </>
    )
}

export default Projects;