import dynamic from "next/dynamic";

const CopyRight = ({ brandName, developerName }) => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed by {" "}                
                {/*<a href="https://themeforest.net/user/codeefly" target="_blank" rel="noreferrer">*/}
                {developerName && developerName}
                {/*</a>{" "}*/}
                {" "}
              </p>
              <p>            
              from {brandName && brandName} © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="#">{`Terms & Condition`}</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//export default CopyRight;
export default dynamic (()=> Promise.resolve(CopyRight), {ssr : false});
