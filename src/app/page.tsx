import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top navigation */}
      <div className="bg-cibc-red text-white">
        <div className="container-custom">
          <div className="flex justify-between py-2 text-sm">
            <Link
              href="/"
              className="text-white hover:underline text-lg font-medium"
            >
              Himanshu Gandhi
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-white hover:underline">
                Home
              </Link>
              <Link href="#contact-us" className="text-white hover:underline">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <section className="bg-cibc-light-gray py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile image */}
            <div className="md:w-1/4 lg:w-1/5 flex justify-center">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[3px] border-white bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
                <img
                  src="/profile-placeholder.svg"
                  alt="Himanshu Gandhi"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Profile details */}
            <div className="md:w-2/4 lg:w-2/5">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-cibc-dark-gray mb-2">
                  Himanshu Gandhi
                </h1>
                <p className="text-lg md:text-xl text-cibc-gray mb-6">
                  Mobile Mortgage Advisor
                </p>
              </div>

              {/* Contact information */}
              <div className="flex flex-col gap-4 mb-8" id="contact">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-cibc-red flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-cibc-dark-gray">
                    403-669-2166 (mobile)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-cibc-red flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:Himanshu.Gandhi@cibc.com"
                    className="text-cibc-dark-gray"
                  >
                    Himanshu.Gandhi@cibc.com
                  </a>
                </div>
                {/*  */}
                {/* Social Media Icons */}
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-cibc-red flex items-center justify-center hover:bg-cibc-dark-red transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-cibc-red flex items-center justify-center hover:bg-cibc-dark-red transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-cibc-red flex items-center justify-center hover:bg-cibc-dark-red transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-cibc-red flex items-center justify-center hover:bg-cibc-dark-red transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <button className="w-full md:w-auto bg-cibc-red text-white px-8 py-4 rounded text-lg font-medium hover:bg-cibc-dark-red transition-colors">
                Meet with me
              </button>
            </div>

            {/* Right side information */}
            <div className="md:w-1/4 lg:w-2/5 mt-8 md:mt-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-cibc-dark-gray mb-2">
                    Coverage area
                  </h2>
                  <p className="text-cibc-gray">Calgary</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-cibc-dark-gray mb-2">
                    Languages
                  </h2>
                  <p className="text-cibc-gray">
                    English, Hindi, Punjabi, Urdu
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-cibc-dark-gray mb-2">
                    Specialty
                  </h2>
                  <p className="text-cibc-gray">Newcomer to Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-base text-black/70
             leading-relaxed"
            >
              I&apos;m passionate about helping people achieve their
              home-ownership goals, no matter what they may be. Whether you want
              to buy your first home, access your home equity or move your
              mortgage over to CIBC, I can empower you to make smart mortgage
              and home-financing decisions. In my spare time, I enjoy spending
              time with my family and friends, my time at the cottage and home
              renovation projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl text-black/70 font-medium mb-8">
              Here are some things we can work on together
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
              <div>
                <div className="w-12 h-12 mb-4">
                  <svg
                    className="w-full h-full text-cibc-red"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                  </svg>
                </div>
                <p className="text-base text-black/70">
                  Buying your first or next home
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-4">
                  <svg
                    className="w-full h-full text-cibc-red"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                  </svg>
                </div>
                <p className="text-base text-black/70">
                  Investing in a property
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-4">
                  <svg
                    className="w-full h-full text-cibc-red"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                  </svg>
                </div>
                <p className="text-base text-black/70">
                  Moving your mortgage to CIBC
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-4">
                  <svg
                    className="w-full h-full text-cibc-red"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" />
                  </svg>
                </div>
                <p className="text-base text-black/70">
                  Using your home equity to renovate or consolidate debt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl text-black/70 font-medium mb-6">
              How I can help you
            </h2>
            <div className="space-y-6 text-base text-black/70">
              <p className="leading-relaxed">
                We&apos;ll meet when it&apos;s convenient for you, whether
                it&apos;s in person, by phone or e-mail. We&apos;ll chat about
                your mortgage and home-financing goals so I can get to know you,
                identify opportunities and provide personalized advice
                that&apos;s unique to your needs and will help set you up for
                success in your home-ownership journey.
              </p>
              <p className="leading-relaxed">
                Want to review your options? I want to make sure your mortgage
                is working for you, whether you&apos;re saving for a down
                payment or ready to buy, or would like to check if moving your
                existing mortgage to CIBC makes sense.
              </p>
              <p className="leading-relaxed">
                I look forward to meeting with you and helping you to reach
                those dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch Section */}
      <section
        id="contact-us"
        className="py-8 bg-white border-t border-gray-200"
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl text-black/70 font-medium mb-8">
              Get in touch
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-200">
                  <img
                    src="/profile-placeholder.svg"
                    alt="Himanshu Gandhi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                  <h3 className="text-lg font-medium text-black/70">
                    Himanshu Gandhi
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-cibc-red flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-black/70">
                        403-669-2166 (mobile)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-cibc-red flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <a
                        href="mailto:Himanshu.Gandhi@cibc.com"
                        className="text-cibc-dark-gray"
                      >
                        Himanshu.Gandhi@cibc.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto md:ml-auto">
                <button className="w-full md:w-auto bg-cibc-red text-white px-8 py-4 rounded text-lg font-medium hover:bg-cibc-dark-red transition-colors">
                  Meet with me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
