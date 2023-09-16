import Layout from "../src/layout/Layout";
const ComingSoon = () => {
  return (
    <Layout pageTitle={"Coming Soon"}>
      <div className="metaportal_fn_coming_soon">
        <div className="container">
          <div className="soon_countdown">
            <h3
              className="metaportal_fn_countdown boxed"
              data-type="ever"
              data-date="October 13, 2022 12:30:00"
              data-days={34}
              data-hours={9}
              data-minutes={20}
              data-seconds={10}
            >
              0d: 0h: 0m: 0s
            </h3>
          </div>
          <div className="soon_title">
            <h3
              className="fn__maintitle"
              data-text="Public Minting is Coming Soon"
              data-align="center"
            >
              Public Minting is Coming Soon
            </h3>
            <p>
              Our Blog Will be Out Soon. Keep Updated By Subscribing Us.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ComingSoon;
