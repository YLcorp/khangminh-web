import React from "react";

const FunFact = (props) => {
  const funfact = [
    {
      title: "15",
      subTitle: "Năm chinh chiến",
    },
    {
      title: "115",
      subTitle: "Kỹ sư, Thợ lành nghề",
    },
    {
      title: "321+",
      subTitle: "Dự án hoàn thiện",
    },
    {
      title: "135+",
      subTitle: "Chủ đầu tư hài lòng",
    },
  ];

  return (
    <section className={`wpo-fun-fact-section pb-120 ${props.fnClass}`}>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-fun-fact-grids clearfix">
              {funfact.map((funfact, fitem) => (
                <div className="grid" key={fitem}>
                  <div className="info">
                    <h3>{funfact.title}</h3>
                    <p>{funfact.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
