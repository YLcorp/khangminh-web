import React from "react";
import Slider from "react-slick";
import Link from "next/link";

const Hero2 = (props) => {
  var settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  return (
    <section className="wpo-box-style">
      <div className={`wpo-hero-slider wpo-hero-style-2 ${props.heroClass}`}>
        <div className="hero-container">
          <div className="hero-wrapper">
            <Slider {...settings}>
              <div className="hero-slide">
                <div
                  className="slide-inner"
                  style={{
                    backgroundImage: `url(${"/images/slider/slide-1.jpg"})`,
                  }}
                >
                  <div className="container-fluid">
                    <div className="slide-content">
                      <div className="slide-title">
                        <h2>Vì tổ ấm của bạn</h2>
                      </div>
                      <div className="slide-title-sub">
                        <p>
                          Khang Minh sẵn sàng đồng hành bạn trong việc xây dựng
                          những công trình của tương lai
                        </p>
                      </div>
                      <div className="clearfix"></div>
                      <div className="slide-btns">
                        <Link href="/about" className="theme-btn">
                          Khám phá
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-slide">
                <div
                  className="slide-inner"
                  style={{
                    backgroundImage: `url(${"/images/slider/slide-2.jpg"})`,
                  }}
                >
                  <div className="container-fluid">
                    <div className="slide-content">
                      <div className="slide-title">
                        <h2>Vì tổ ấm của bạn</h2>
                      </div>
                      <div className="slide-title-sub">
                        <p>
                          Khang Minh sẵn sàng đồng hành bạn trong việc xây dựng
                          những công trình của tương lai
                        </p>
                      </div>
                      <div className="clearfix"></div>
                      <div className="slide-btns">
                        <Link href="/about" className="theme-btn">
                          Khám phá
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-slide">
                <div
                  className="slide-inner"
                  style={{
                    backgroundImage: `url(${"/images/slider/slide-3.jpg"})`,
                  }}
                >
                  <div className="container-fluid">
                    <div className="slide-content">
                      <div className="slide-title">
                        <h2>Vì tổ ấm của bạn</h2>
                      </div>
                      <div className="slide-title-sub">
                        <p>
                          Khang Minh sẵn sàng đồng hành bạn trong việc xây dựng
                          những công trình của tương lai
                        </p>
                      </div>
                      <div className="clearfix"></div>
                      <div className="slide-btns">
                        <Link href="/about" className="theme-btn">
                          Khám phá
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
