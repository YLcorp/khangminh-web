import React from "react";
import Link from "next/link";
import abimg from "/public/images/about2.jpg";
import abimg2 from "/public/images/about3.jpg";
import Image from "next/image";
import VideoModal from "../ModalVideo/VideoModal";

const About2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="wpo-about-area-s2 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="wpo-about-img">
              <div className="wpo-about-img-left">
                <Image src={abimg} alt="" />
                <div className="wpo-about-img-text">
                  <h2>15+</h2>
                  <p>năm trên mọi công trường</p>
                </div>
              </div>
              <div className="wpo-about-img-right">
                <Image src={abimg2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 colsm-12">
            <div className="wpo-about-text">
              <div className="wpo-about-title">
                <span>Về Khang Minh</span>
                <h2>
                  Chúng tôi mang khát khao làm đẹp trong gió bụi công trường
                </h2>
              </div>
              <p>
                Với mong muốn tạo nên những tổ ấm đích thực, biến cát đá thành
                giá trị, chúng tôi đã có kinh nghiệm 15 năm làm các nghiệp trong
                lĩnh vực xây dựng
              </p>
              <ul className="ab-list">
                <li>
                  Sẵn sàng tư vấn giải pháp phù hợp trong lĩnh vực xây dựng,
                  thiết kế
                </li>
                <li>
                  Đội ngũ kỹ sư, thợ thuyền lành nghề, kinh nghiệm, dễ mến
                </li>
                <li>
                  Kinh nghiệm nhiều năm hợp tác với các chủ đầu tư lớn như
                  Geleximco, Him Lam, Vinhomes, Hoàng Huy ...
                </li>
              </ul>
              <div className="btns">
                <Link
                  href="/about"
                  onClick={ClickHandler}
                  className="theme-btn"
                >
                  Khám phá
                </Link>
                <ul>
                  <li className="video-holder">
                    <VideoModal />
                  </li>
                  <li className="video-text">Watch Our Video</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
