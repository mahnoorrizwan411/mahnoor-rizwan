import React from 'react'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.69H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.48v6.26zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z"
    />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .5A12 12 0 000 12.7c0 5.38 3.44 9.95 8.2 11.56.6.12.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.75-4.04-1.64-4.04-1.64-.55-1.42-1.33-1.8-1.33-1.8-1.08-.76.08-.74.08-.74 1.2.09 1.83 1.26 1.83 1.26 1.06 1.86 2.78 1.32 3.45 1.01.11-.79.42-1.32.75-1.62-2.67-.31-5.47-1.37-5.47-6.07 0-1.34.46-2.43 1.22-3.28-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.25a11.2 11.2 0 016 0c2.3-1.58 3.3-1.25 3.3-1.25.65 1.69.24 2.94.12 3.25.76.85 1.22 1.94 1.22 3.28 0 4.72-2.8 5.76-5.48 6.06.43.38.81 1.11.81 2.24 0 1.62-.02 2.92-.02 3.32 0 .32.22.71.83.58A12.22 12.22 0 0024 12.7 12 12 0 0012 .5z"
    />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true">
    <path
      fill="currentColor"
      d="M3 5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v13.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V5.25zm1.8.75l7.2 5.4 7.2-5.4H4.8zm14.4 2.25l-6.53 4.9a1.13 1.13 0 01-1.34 0L4.8 8.25v10.5c0 .25.2.45.45.45h13.5c.25 0 .45-.2.45-.45V8.25z"
    />
  </svg>
)

const Contact = () => {
  return (
    <footer id="contact" className="py-20 px-6 bg-gradient-to-br from-peach via-lavender to-teal opacity-80">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Let's build something meaningful together.
        </h2>
        
        <div className="space-y-6 mb-12">
          <div>
            <a
              href="mailto:mahnoorrizwan411@gmail.com"
              className="text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300 inline-block"
            >
              mahnoorrizwan411@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">

            <a
              href="https://www.linkedin.com/in/mahnoor-rizwan-pe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center text-gray-800 transition-all duration-300 hover:scale-150 hover:text-gray-950"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/mahnoor-rizwan-pe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center text-gray-800 transition-all duration-300 hover:scale-150 hover:text-gray-950"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:mahnoorrizwan411@gmail.com"
              aria-label="Email"
              className="inline-flex items-center text-gray-800 transition-all duration-300 hover:scale-150 hover:text-gray-950"
            >
              <EmailIcon />
            </a>     
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Mahnoor Rizwan. Built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Contact

