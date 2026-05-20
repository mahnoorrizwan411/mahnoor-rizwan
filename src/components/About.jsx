import React from 'react'

const aboutPhotos = [
  {
    src: '/mahnoor.jpeg',
    alt: 'Mahnoor Rizwan - Product Engineer',
    className: 'left-1/2 top-1/2 z-20 h-60 w-60 -translate-x-1/2 -translate-y-1/2 sm:h-72 sm:w-72 md:h-80 md:w-80',
  },
  {
    src: '/mahnoor-karachi.jpg',
    alt: 'Mahnoor by the sea in Karachi',
    className: 'left-0 top-10 z-10 h-32 w-32 sm:h-40 sm:w-40',
  },
  {
    src: '/mahnoor-missouri.jpg',
    alt: 'Mahnoor at her Missouri campus',
    className: 'right-0 top-0 z-30 h-36 w-36 sm:h-44 sm:w-44',
  },
  {
    src: '/mahnoor-washington.jpg',
    alt: 'Mahnoor at the Embassy of Pakistan in Washington, D.C.',
    className: 'bottom-6 right-2 z-30 h-32 w-32 sm:h-40 sm:w-40',
  },
  {
    src: '/mahnoor-mehar.jpg',
    alt: 'Mahnoor with Mehar',
    className: 'bottom-0 left-8 z-30 h-36 w-36 sm:h-44 sm:w-44',
  },
]

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10 2xl:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-gray-800">Mahnoor Rizwan</h2>
              <h4 className="text-2xl md:text-2xl font-semibold text-[#1D9E75]">Product Engineer. Builder. Thinker.</h4>
              <h4 className="text-lg md:text-xl font-normal italic tracking-[-0.04em] text-gray-800">From Nowshera to Missouri. Back to Lahore. Building what I wish existed.</h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
            I grew up moving between cities across Pakistan, always the new kid, always learning to adapt. Then in 2010, a flood took our neighborhood in Nowshera. I lost my home, my friends, and for a while, myself.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            What came next was a slower rebuild, a scholarship to ITU in Lahore, a chance to study in the United States on the UGRAD program, and a growing conviction that technology could solve the kinds of problems I'd lived through.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            I came back from the US in 2020, graduated as an electrical engineer, and taught myself mobile development from scratch, because apps are the fastest way to reach people who need help. I did all of that while getting married and becoming a mom.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            Today I'm a product engineer, building Flutter and Django products for founders in emerging markets. My daughter reminds me every day that the best things take patience and intention. I bring both to everything I ship.
            </p>
            {/* <p className="text-lg text-gray-700 leading-relaxed italic text-gray-600">
              When I'm not engineering products, I'm exploring motherhood — it's my greatest challenge yet.
            </p> */}
 
          </div>

          {/* Photo collage */}
          <div className="flex justify-center items-center">
            <div className="relative mx-auto h-[30rem] w-full max-w-md sm:h-[34rem]">
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-peach via-lavender to-teal opacity-60 blur-3xl"></div>
              {aboutPhotos.map((photo) => (
                <div key={photo.src} className={`absolute ${photo.className}`}>
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-peach via-lavender to-teal p-1 shadow-2xl">
                    <div className="h-full w-full rounded-full overflow-hidden bg-white">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Decorative circles */}
              <div className="absolute right-10 top-24 h-24 w-24 rounded-full bg-lilac opacity-30 blur-xl"></div>
              <div className="absolute bottom-16 left-4 h-32 w-32 rounded-full bg-teal opacity-30 blur-xl"></div>
              <div className="absolute bottom-24 right-28 h-20 w-20 rounded-full bg-peach opacity-40 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

