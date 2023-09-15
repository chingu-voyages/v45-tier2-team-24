import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'




export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Team', href: '#team' },
    { name: 'Map', href: '#map' },
  ]

  return (
    <>
      <div className="bg-white h-screen flex">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8 border-t-4 border-indigo-500" aria-label="Global">
            <div className="flex lg:flex-1">
          
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open navbar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>

          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            <div className="fixed inset-0 z-1" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-1 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <div></div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-5 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        {/* END NAVIGATION*/}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#003e5c] to-[#007bb8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-md pt-8 sm:pt-12 lg:pt-14">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl" data-aos="flip-left">
                Fireball
              </h1>
              <img
                className="w-full flex justify-between items-center"
                src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1692319729/undraw_outer_space_re_u9vd_xrxxbn.svg"
                alt="image of rocket"
                data-aos="zoom-in"
              />
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your Interactive Guide to Meteorite Landings on Earth, Powered by NASA
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-4">
                
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#003e5c] to-[#007bb8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
