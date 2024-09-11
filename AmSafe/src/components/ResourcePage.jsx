import React, { useState } from "react";

const ResourcePage = () => {
  const [resources, setResources] = useState(true);
  return (
    <div className="h-auto mt-36 w-full flex flex-col justify-start items-center  pt-16">
      <h1 className="text-7xl text-red-500 font-bold">Resources</h1>
      <div className=" w-full p-4">
        <div className="text-xl m-auto flex w-1/5 px-0 py-2 rounded-lg bg-black/20  justify-around">
          <p
            className={`cursor-pointer px-2 transition-all duration-300 ease-in-out  ${resources ? "bg-white rounded-lg " : ""
              }`}
            onClick={() => setResources(true)}
          >
            News
          </p>
          <p
            className={`cursor-pointer px-2 transition-all duration-300 ease-in-out  ${!resources ? "bg-white rounded-lg " : ""
              }`}
            onClick={() => setResources(false)}
          >
            Statistics
          </p>
        </div>
        {resources ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 w-full">
            <a
              href="https://timesofindia.indiatimes.com/india/india-records-51-cases-of-crime-against-women-every-hour-over-4-4-lakh-cases-in-2022-ncrb-report/articleshow/105731269.cms"
              className="hover:-translate-y-2 duration-200"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto">
                <img
                  className="w-full h-48 object-cover"
                  src="https://static.toiimg.com/thumb/msid-105731301,imgsize-5400,width-400,resizemode-4/105731301.jpg"
                  alt="123"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    India records 51 cases of crime against women every hour;
                    over 4.4 lakh cases in 2022: NCRB report
                  </h2>
                  <p className="mt-2 text-gray-600">
                    The data disclosed a staggering 4,45,256 cases of crime
                    against women in 2022, translating to approximately 51 FIRs
                    every hour. This marked a notable increase from 2021, which
                    recorded 4,28,278 cases, and 2020, which reported 3,71,503
                    cases.The NCRB's findings unveiled a crime rate of 66.4 per
                    lakh population, with a charge sheeting rate of 75.8 in such
                    cases.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.financialexpress.com/india-news/bengaluru-auto-woes-driver-who-slapped-woman-arrested-police-crackdown-on-5000-others-for-violations/3604657/"
              className="hover:-translate-y-2 duration-200"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto">
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.herzindagi.info/image/2024/Sep/bengaluru-ola-slap-case.jpg"
                  alt="123"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Woman Slapped by Ola Auto Driver In Bengaluru For Ride
                    Cancellation
                  </h2>
                  <p className="mt-2 text-gray-600">
                    A woman in Bengaluru was allegedly harassed and slapped by
                    an Ola driver for cancelling the ride. The woman reportedly
                    cancelled the ride and booked another one to travel with her
                    friend. The furious auto driver followed the two women and
                    then started shouting and abusing them. He even tried to
                    snatch the phone out of the woman’s hand and slapped her in
                    front of the passersby and the auto driver who didn’t bother
                    to help.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://theprint.in/india/court-sentences-man-to-1-year-imprisonment-for-sexually-harassing-minor/2261309/"
              className="hover:-translate-y-2 duration-200"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto">
                <img
                  className="w-full h-48 object-cover"
                  src="https://www.thestatesman.com/wp-content/uploads/2024/04/Untitled-design-2024-04-24T194045.187.jpg"
                  alt="123"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Court sentences man to 1-year imprisonment for sexually
                    harassing minor
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Around nine years after a man sexually harassed a
                    four-year-old girl by exposing his private parts to the
                    child, a court here has sentenced him to one-year rigorous
                    imprisonment. Additional Sessions Judge Preeti Parewa held
                    the man, 45, guilty of wrongful confinement and under
                    section 12 (sexual harassment) of the Protection of Children
                    from Sexual Offences (POCSO) Act.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.hindustantimes.com/business/workplace-sexual-harassment-cases-in-700-nse-listed-firms-increased-29-pending-complaints-rose-67-report-101724509941314.html"
              className="hover:-translate-y-2 duration-200"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto">
                <img
                  className="w-full h-48 object-cover"
                  src="https://rainmaker.co.in/assets/blogs/d4b16e50-f3fa-11ee-b7ea-001122334455.png"
                  alt="123"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Workplace sexual harassment cases in 700 NSE-listed firms
                    increased 29%, pending complaints rose 67%: Report
                  </h2>
                  <p className="mt-2 text-gray-600">
                    43% of women experienced non-inclusive behaviours like
                    harassment or microaggressions, and nearly half had concerns
                    about their safety at work or safety while travelling to
                    work, according to an Economic Times article which cited
                    Deloitte’s 2024 Women @ Work report. This also comes at a
                    time when total POSH (Prevention of Sexual Harassment)
                    complaints reported by 700 NSE-listed firms analysed by The
                    Udaiti Foundation increased from 1,807 during the financial
                    year 2022-23 to 2,325 in 2023-24, or a 29% increase
                  </p>
                </div>
              </div>
            </a>
          </div>
        ) : (
          <div>
            {" "}
            <div class="text-center max-w-2xl mx-auto mb-12">
              <p class="text-lg">
                The latest crime data reveals the challenges women face in
                India. These statistics highlight key insights from the National
                Crime Records Bureau (NCRB) and other reliable sources to
                understand the current state of women's safety.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
              <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 class="text-xl font-semibold mb-4">Crimes Against Women</h3>
                <p class="text-3xl font-bold">4,28,278</p>
                <p class="text-gray-500">Total reported cases in 2022 (NCRB)</p>
              </div>

              <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 class="text-xl font-semibold mb-4">Domestic Violence</h3>
                <p class="text-3xl font-bold">1,36,962</p>
                <p class="text-gray-500">
                  Cases under Cruelty by Husband/Relatives
                </p>
              </div>

              <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 class="text-xl font-semibold mb-4">Rape Cases</h3>
                <p class="text-3xl font-bold">31,677</p>
                <p class="text-gray-500">Reported cases in 2022</p>
              </div>
            </div>
            <div class="text-center py-12">
              <h3 class="text-2xl font-bold mb-4">Key Insights</h3>
              <p class="max-w-2xl mx-auto mb-8">
                - Uttar Pradesh reported the highest number of crimes against
                women, followed by Rajasthan and Maharashtra.
                <br />
                - Crimes under cruelty by husband or relatives account for a
                significant proportion of reported cases.
                <br />- The conviction rate for crimes against women remains a
                concern, with efforts underway to address it.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcePage;
