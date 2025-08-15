import Image from "next/image";

export default function SignInCosmic() {
  return (
    <div className="min-h-screen max-w-[1440px] justify-center bg-[#0e0a24] text-white flex flex-col md:flex-row items-stretch">
      {/* Layout wrapper */}
      <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2">
        
        {/* Left side with background image (hidden on mobile) */}
        <div className="hidden md:block relative order-2 md:order-1 min-h-[calc(100vh-4rem)] overflow-hidden">
          <Image
            className="absolute top-14 inset-0 object-cover"
            src="/val.png"
            alt="Cosmic background"
            priority
            width={700}
            height={700}
          />
        </div>

        {/* Right auth panel */}
        <div className="order-1 md:order-2 flex items-center justify-center py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#0f0b2a]/60 min-h-screen md:min-h-auto">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-sm mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center md:text-left">SIGN IN</h1>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/70 text-center md:text-left">Sign in with email address</p>

            {/* Email field */}
            <form className="mt-5 sm:mt-6">
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus-within:ring-2 focus-within:ring-indigo-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                  <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Yourname@gmail.com"
                  className="w-full bg-transparent outline-none placeholder-white/50 text-white text-sm sm:text-base"
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="mt-4 sm:mt-5 w-full rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 hover:opacity-95 active:opacity-90 text-sm sm:text-base"
              >
                SIGN IN
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 sm:my-6 flex items-center gap-2 sm:gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] sm:text-xs text-white/60">Or continue with</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Social buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white/10 border border-white/10 px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.35 11.1H12v2.9h5.35c-.25 1.5-1.7 4.3-5.35 4.3a6.2 6.2 0 1 1 0-12.4c1.8 0 3 .7 3.7 1.3l2-1.9A9 9 0 1 0 12 21c4.9 0 8.1-3.5 8.1-8.5 0-.6-.05-1.1-.15-1.4Z" fill="currentColor" />
                </svg>
                Google
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white/10 border border-white/10 px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z" fill="currentColor" />
                </svg>
                Facebook
              </button>
            </div>

            <p className="mt-5 sm:mt-6 text-[10px] sm:text-[11px] text-white/60 leading-relaxed text-center md:text-left">
              By registering you agree to our <a className="underline decoration-dotted hover:text-white" href="#">Terms</a> and <a className="underline decoration-dotted hover:text-white" href="#">Conditions</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
