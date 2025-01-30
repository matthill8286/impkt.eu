import React from 'react';

export default function Reviews() {
  return (
    <section className="impkt-soft-bg">
      <div className="container impkt-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="impkt-subtitle impkt-subtitle-right impkt-subtitle-dark impkt-up">
              Customer reviews are a valuable source <br />
              of information for both businesses and consumers.
            </span>
          </div>
        </div>

        <h2 className="impkt-center impkt-up impkt-mb-60">
          Customer <span className="impkt-thin">Voices:</span> <br />
          Hear What <span className="impkt-thin">They Say!</span>
        </h2>

        <div className="impkt-revi-pagination impkt-up impkt-mb-60"></div>

        <div className="row impkt-relative justify-content-center">
          <div className="col-lg-8">
            <div className="impkt-slider-nav impkt-soft impkt-reviews-nav impkt-up">
              <div className="impkt-slider-arrow impkt-prev impkt-revi-prev "></div>
              <div className="impkt-slider-arrow impkt-revi-next "></div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="impkt-quote-icon impkt-up"
            >
              <path
                d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z"
                fill="#000000"
              />
            </svg>

            <div className="swiper-container impkt-reviews-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    className="impkt-review-frame impkt-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="impkt-up impkt-mb-10">Sarah E.</h5>
                    <p className="impkt-mb-5 impkt-upper impkt-up impkt-mb-30">
                      HSBC Creative
                    </p>
                    <p className="impkt-text-xl impkt-up">
                      This creative agency stands out with their exceptional
                      talent and expertise. Their ability to think outside the
                      box and bring unique ideas to life is truly impressive.
                      With meticulous attention to detail, they consistently
                      deliver visually stunning and impktful work.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="impkt-review-frame impkt-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="impkt-up impkt-mb-10">Emma T.</h5>
                    <p className="impkt-mb-5 impkt-upper impkt-up impkt-mb-30">
                      LinkedIn
                    </p>
                    <p className="impkt-text-xl impkt-up">
                      I had the pleasure of working with this creative agency,
                      and I must say, they truly impressed me. They consistently
                      think outside the box, resulting in impressive and
                      impktful work. I highly recommend this agency for their
                      consistent delivery of exceptional creative solutions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="impkt-review-frame impkt-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="impkt-up impkt-mb-10">Rebecca P.</h5>
                    <p className="impkt-mb-5 impkt-upper impkt-up impkt-mb-30">
                      Novato
                    </p>
                    <p className="impkt-text-xl impkt-up">
                      This creative agency stands out with their exceptional
                      talent and expertise. Their ability to think outside the
                      box and bring unique ideas to life is truly impressive.
                      With meticulous attention to detail, they consistently
                      deliver visually stunning and impktful work.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="impkt-review-frame impkt-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="impkt-up impkt-mb-10">Melissa E.</h5>
                    <p className="impkt-mb-5 impkt-upper impkt-up impkt-mb-30">
                      Orange
                    </p>
                    <p className="impkt-text-xl impkt-up">
                      I had the pleasure of working with this creative agency,
                      and I must say, they truly impressed me. They consistently
                      think outside the box, resulting in impressive and
                      impktful work. I highly recommend this agency for their
                      consistent delivery of exceptional creative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
