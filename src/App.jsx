function App() {
  return (
    <>
      <header className="">
        {/* header part 1 */}
        <div className="xs:hidden lg:flex justify-between items-center bg-[#080D41] text-white px-4 h-16  text-lg   ">
          <div className="">
            <p className="text-center">
              We're Leading consutancy in Bangladesh
            </p>
          </div>

          <div className="">
            <ul className="flex gap-12 items-center  ">
              <li className="px-4 border-r border-white/30">
                Office Hours: 10:00AM-07:00PM
              </li>
              <li className="nav1-list-item">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="nav1-list-item">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="nav1-list-item">
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li className="nav1-list-item">
                <i className="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
        {/* header part 1 end */}
        {/* header part 2 */}
        <div className="xs:hidden  lg:w-full lg:grid lg:grid-cols-4 lg:items-center lg:gap-6">
          {/* Logo */}
          <div className="">
            <img src="/assets/Dream.png" alt="dreams" className="w-64 h-36" />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-phone text-2xl text-[#1B9FCB] "></i>
            <p>
              <span className="font-semibold">Call Us:</span> <br />
              +880 14066 99551-4
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-envelope text-3xl text-[#1B9FCB]"></i>
            <p>
              <span className="font-semibold">Email Us:</span> <br />
              dreamstudyinternational@gmail.com
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-location-arrow text-4xl text-[#1B9FCB] "></i>
            <p>
              <span className="font-semibold">Location:</span> <br />
              Gulshan 02
            </p>
          </div>
        </div>
        {/* header part 2 end */}
        {/* header part 3 */}
        <div className="hidden lg:sticky lg:top-0 lg:z-50 lg:flex lg:justify-between lg:items-center lg:bg-[#080D41] lg:text-white px-4 lg:h-16  lg:text-lg lg:rounded-lg">
          <div className="">
            <ul className="flex justify-between items-center gap-6 font-semibold ">
              <li className="nav2-list-item">Home </li>
              <li className="nav2-list-item">About </li>
              <li className="nav2-list-item">Sevice </li>

              <li className="relative group cursor-pointer flex flex-col items-center">
                <div className="flex gap-2 items-center">
                  <span className="block nav2-list-item">Country</span>
                  <i className="fa-solid fa-chevron-down mt-1 text-sm transition-transform duration-300 hover:text-[#c6c4c4] cursor-pointer"></i>
                </div>

                <div
                  className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-32 bg-white shadow-lg rounded-md 
              opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
              invisible group-hover:visible transition-all duration-300 ease-in-out z-10 origin-top"
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li className="country-list-item">Canada</li>
                    <li className="country-list-item">Australia</li>
                    <li className="country-list-item">New Zealand</li>
                    <li className="country-list-item">Sweden</li>
                    <li className="country-list-item">UK</li>
                    <li className="country-list-item">USA</li>
                    <li className="country-list-item">Denmark</li>
                    <li className="country-list-item">Netherlands</li>
                  </ul>
                </div>
              </li>

              <li className="nav2-list-item">Contact</li>
              <li className="nav2-list-item">Privent Policy</li>
            </ul>
          </div>

          <button className=" btn">Apply Now</button>
        </div>
        {/* header part 3 end */}

        {/* hearder part 4  Start */}
        <div className=" sticky top-0 z-50 flex justify-between items-center bg-[#080D41] text-white px-4 h-16  text-lg lg:hidden">
          <div className="">
            <img src="/assets/Dream3.png" alt="dreams" className="w-28 h-16" />
          </div>

          <button className=" btn">Apply Now</button>
        </div>

        {/* hearder part 4  End */}
      </header>

      {/* Apply Section Start  */}

      <div className="flex justify-center  ">
        <img src="/assets/Dream.png" alt="dreams" className="w-64 h-36 " />
      </div>

      <div className=" flex justify-evenly items-center flex-wrap bg-[#F1F4F9] ">
        <div className="">
          <img
            src="/assets/salman.png"
            alt="dreams"
            className="w-[39rem] h-96"
          />
        </div>

        <div className=" flex justify-center items-center min-h-screen ">
          <div className="apply-card">
            <div className="apply-card-header">
              <h2 className="apply-card-title">Apply Now!</h2>
            </div>

            <form className="space-y-4 p-6">
              {/* <!-- Name --> */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <select className="form-select" required>
                  <option value="">Select education</option>
                  <option value="HSC">HSC</option>
                  <option value="Bachelor">Bachelor</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Preferred Country"
                  className="form-input"
                  required
                />
              </div>

              <div className="">
                <button type="submit" className="gradient-btn">
                  Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Apply Section End   */}

      {/* Offer section start  */}
      <section className=" bg-[#F1F4F9]  mt-20 p-10">
        <div className="">
          <div className="text-2xl font-bold text-center mb-16">
            <h1 className="">What Offer One Stop Solution</h1>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid lg:grid-cols-4 lg:gap-8 lg:items-center">
            <div
              className="relative flex flex-col items-center justify-center gap-3 
                    transition-transform duration-300 ease-out 
                    hover:scale-105 active:scale-105 focus:scale-105
                    hover:shadow-2xl hover:cursor-pointer
                    active:shadow-2xl focus:shadow-2xl
                    gradient-bottom-border-hover gradient-bottom-border-focus gradient-bottom-border-active"
            >
              <img src="/assets/img1.png" alt="img1" className="w-16" />
              <p className="font-semibold text-lg">Eligibility Assessment</p>
            </div>
            <div
              className="relative flex flex-col items-center justify-center gap-3 
                     transition-transform duration-300 ease-out 
                     hover:scale-105 active:scale-105 focus:scale-105
                     hover:shadow-2xl hover:cursor-pointer
                     active:shadow-2xl focus:shadow-2xl
                     gradient-bottom-border-hover gradient-bottom-border-focus gradient-bottom-border-active"
            >
              <img src="/assets/img2.png" alt="img2" className="w-16" />
              <p className="font-semibold text-lg">
                University & Program SElection{" "}
              </p>
            </div>
            <div
              className="relative flex flex-col items-center justify-center gap-3 
                  transition-transform duration-300 ease-out 
                  hover:scale-105 active:scale-105 focus:scale-105
                  hover:shadow-2xl hover:cursor-pointer
                  active:shadow-2xl focus:shadow-2xl
                  gradient-bottom-border-hover gradient-bottom-border-focus gradient-bottom-border-active"
            >
              <img src="/assets/img3.png" alt="img3" className="w-16" />
              <p className="font-semibold text-lg">Scholarship Application</p>
            </div>

            <div
              className=" w-50 h-24 relative flex flex-col items-center justify-center gap-3 
                      transition-transform duration-300 ease-out 
                      hover:scale-105 active:scale-105 focus:scale-105
                      hover:shadow-2xl hover:cursor-pointer
                      active:shadow-2xl focus:shadow-2xl
                      gradient-bottom-border-hover gradient-bottom-border-focus gradient-bottom-border-active"
            >
              <img src="" alt="" className="" />
              <p className="font-semibold text-lg">Sponsor Document Support </p>
            </div>
            <div
              className="relative flex flex-col items-center justify-center gap-3 
                   transition-transform duration-300 ease-out 
                   hover:scale-105 active:scale-105 focus:scale-105
                   hover:shadow-2xl hover:cursor-pointer
                   active:shadow-2xl focus:shadow-2xl
                   gradient-bottom-border-hover gradient-bottom-border-focus gradient-bottom-border-active"
            >
              <img src="/assets/img4.png" alt="img5" className="w-16" />
              <p className="font-semibold text-lg">Bank Statement Support </p>
            </div>
            <div
              className="w-50 h-24 relative flex flex-col items-center justify-center gap-3 
                    transition-transform duration-300 ease-out 
                    hover:scale-105 active:scale-105 focus:scale-105
                    hover:shadow-2xl hover:cursor-pointer
                    active:shadow-2xl focus:shadow-2xl
                    gradient-bottom-border-hover gradient-bottom-border-focus gradient-bottom-border-active"
            >
              <p className="font-semibold text-lg">SOP Letter Writing </p>
            </div>
            <div
              className="relative flex flex-col items-center justify-center gap-3 
                     transition-transform duration-300 ease-out 
                     hover:scale-105 active:scale-105 focus:scale-105
                     hover:shadow-2xl hover:cursor-pointer
                     active:shadow-2xl focus:shadow-2xl
                     gradient-bottom-border-hover gradient-bottom-border-focus gradient-bottom-border-active"
            >
              <img src="/assets/img5.png" alt="img7" className="w-16" />
              <p className="font-semibold text-lg">
                {" "}
                Visa Application Support{" "}
              </p>
            </div>
            <div
              className="relative flex flex-col items-center justify-center gap-3 
                      transition-transform duration-300 ease-out 
                      hover:scale-105 active:scale-105 focus:scale-105
                      hover:shadow-2xl hover:cursor-pointer
                      active:shadow-2xl focus:shadow-2xl
                      gradient-bottom-border-hover gradient-bottom-border-focus gradient-bottom-border-active"
            >
              <img src="/assets/img6.png" alt="img8" className="w-16" />
              <p className="font-semibold text-lg">
                Pre-Departure Information{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer section end  */}

      {/* Footer Start  */}

      <footer className="mt-20">
        {/* part 1 start */}
        <div className="outsideparent flex flex-wrap justify-between items-center w-full px-8 py-10 gap-5 bg-[#F1F4F9] dark:bg-[#1c1c1e]">
          <div className="Parent flex flex-col gap-6">
            <div className="">
              <div className="bg-[#656567] dark:bg-gray-700">
                <img
                  src="/assets/Dream2.png"
                  alt="dreams"
                  className="w-64 h-36"
                />
              </div>
            </div>

            <div className="">
              <p className="text-[#656567] dark:text-gray-300">
                We are renowned education <br /> consultancy for prospective{" "}
                <br />
                students who would like to study in <br /> CANADA, UK, USA,
                Australia, <br />
                Sweden, Netherlands, Denmark & <br /> other European Countries.
              </p>
            </div>

            <div className="flex justify-start items-center gap-6 text-[#656567] dark:text-white">
              <div className="social-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="social-icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="social-icon">
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-10 text-[#080D41] dark:text-[#c9b6b6]">
              <span>S</span>itemap
            </h1>

            <ul className="list-disc pl-5 flex flex-col gap-4 marker:text-blue-500 dark:marker:text-blue-300 text-[#3A3A3A] dark:text-[#ab8787]">
              <li className="footer-item-hover">Home</li>
              <li className="footer-item-hover">About</li>
              <li className="footer-item-hover">Service</li>
              <li className="footer-item-hover">Countries</li>
              <li className="footer-item-hover">Contact</li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-10 text-[#080D41] dark:text-[#c9b6b6]">
              Countries
            </h1>

            <ul className="list-disc pl-5 flex flex-col gap-4 marker:text-blue-500 dark:marker:text-blue-300 text-[#3A3A3A] dark:text-[#ab8787]">
              <li className="footer-item-hover">Australia</li>
              <li className="footer-item-hover">Canada</li>
              <li className="footer-item-hover">New Zealand</li>
              <li className="footer-item-hover">USA</li>
              <li className="footer-item-hover">UK</li>
            </ul>
          </div>

          <div className="border rounded-lg p-10 bg-white dark:bg-[#2c2c2e]">
            <div className="mb-12">
              <img src="/assets/Location.png" alt="" className="w-24 h-24" />
            </div>

            <div className="flex items-center gap-4 mb-5">
              <i className="fa-solid fa-location-dot text-blue-500"></i>
              <p className="text-[#656567] dark:text-gray-300">
                <span className="font-bold">Gulshan-02:</span> House-12B,
                Lift-04, Flat-4A,
                <br /> Kamal Attaturk Avenue, Gulshan-02, Dhaka- <br /> 1212.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <i className="fa-brands fa-whatsapp text-green-400"></i>
              <p className="text-[#656567] dark:text-gray-300">
                <span className="font-bold">WhatsApp :</span> +880 14066 99551-4
              </p>
            </div>
          </div>
        </div>
        {/* part 1 end */}

        {/* part 2 start */}
        <div className="flex flex-wrap justify-between items-center bg-[#080D41] dark:bg-[#0a0a0a] text-white px-4 h-16 text-lg">
          <div>
            <p className="text-center">
              © 2023 Dream Study Int.. Designed By *hirebirds Team.
            </p>
          </div>

          <div>
            <ul className="footer-list flex gap-4">
              <li className="footer-item-full hover:text-blue-300">About</li>
              <li className="footer-item hover:text-blue-300">FAQ</li>
              <li className="footer-item hover:text-blue-300">Contact</li>
            </ul>
          </div>
        </div>
        {/* part 2 end */}
      </footer>

      {/* Footer End  */}
    </>
  );
}

export default App;
