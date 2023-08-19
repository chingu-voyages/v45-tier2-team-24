const Team = () => {
  return (
    <div>
      <div className="m-22">
        <dh-component>
          <div className="container flex justify-center mx-auto pt-60">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                BUILDING TEAM
              </p>
              <h1 className="team-container xl:text-4xl text-3xl text-center text-gray-800 pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Development of Fireball
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 p-4"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                          alt="Display Picture of Yodae Lim"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1 hover:text-red-500">
                        Yodae Lim
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Developer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium doloribus voluptates unde sint ipsam,
                        excepturi nisi corrupti tenetur deserunt eaque cum? Quo
                        in dignissimos sed, placeat perspiciatis mollitia vitae
                        tenetur?
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="https://github.com/limyod" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://twitter.com/" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://instagram.com/" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                          alt="Display Picture of Carlos"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1 hover:text-red-500">
                        Carlos
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Developer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugit tempora minus est illo repellat. Maxime est
                        vitae harum aliquam doloribus nemo quisquam. Quae quasi
                        in corporis dolores laborum minus consectetur.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="https://github.com/clue355" className="mx-5 ">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://twitter.com/" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://instagram.com/" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                          alt="Display Picture of Johnson Stone"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1 hover:text-red-500">
                        Christopher Conway
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Developer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti nemo obcaecati excepturi perferendis. Non aut
                        numquam soluta facilis est id perspiciatis architecto
                        itaque distinctio, a porro ipsam labore eum vitae.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="https:/github.com/conwaycj" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://twitter.com/" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://instagram.com/" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                          alt="Display Picture of Lindsey Howard"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1 hover:text-red-500">
                        Lindsey Howard
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Developer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Modi, voluptatibus impedit. Reiciendis,
                        dignissimos non laudantium odit totam provident eaque?
                        Et est non repellat quas voluptatibus magni ipsa illo
                        suscipit id?
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a
                          href="https://github.com/codelikeagirl29"
                          className="mx-5"
                        >
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://twitter.com/dev_lindseyk"
                          className="mx-5"
                        >
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://instagram.com/fiercely.lindseyy"
                          className="mx-5"
                        >
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                          alt="Display Picture of Rachel Adams"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Rachel VanHorn
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Developer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Unde fuga dignissimos nemo optio aspernatur nam
                        animi. Error, illo repudiandae, laboriosam iure omnis
                        aut aperiam magni adipisci voluptas est eos mollitia!
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="https://github.com/rkvanhorn" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://twitter.com/" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://instagram.com/" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dh-component>
      </div>
    </div>
  );
};

export default Team;
