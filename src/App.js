

import { Typewriter } from 'react-simple-typewriter'


function App() {
  return (
    <div className="bg-bgb">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex justify-center items-center p-6 lg:px-8" aria-label="Global">
          <div className="flex justify-center items-center lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-16 w-auto"
                src="/img/logo-small.png"
              />
            </a>
          </div>
        </nav>
      </header>

      <div className="w-full h-screen bg-cover bg-center">
        <div className="flex justify-center backdrop-blur-sm items-center h-screen">
          <div className="max-xl:w-[90%] w-[45%]">
            <h1 className="text-center text-4xl font-bold tracking-tight text-[#ECEFF4] sm:text-6xl" data-aos="zoom-in">
              coming soon 👀 ...
            </h1>
            <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                <li>
                  <a
                    href="https://www.instagram.com/habllyoff"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <span className="sr-only">Instagram</span>
                    <i class="fa-brands fa-instagram fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/habllyoff"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <span className="sr-only">X</span>
                    <i class="fa-brands fa-x-twitter fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com/@habllyoff"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <span className="sr-only">TikTok</span>
                    <i class="fa-brands fa-tiktok fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.net/@habllyoff"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <span className="sr-only">Threads</span>
                    <i class="fa-brands fa-threads fa-2xl"></i>
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;