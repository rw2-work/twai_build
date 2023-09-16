import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Cookies = () => {
  return (
    <Layout pageTitle={"Cookies"}>
      <PageBanner pageName={"Cookies"} />

      <div className="metaportal_fn_privacy">
        <div className="container small">
          <h3 className="fn__maintitle" data-text="What is a Cookies Policy?">
            What is a Cookies Policy?
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            A Cookies Policy is a legal document that explains to visitors how a
            website or online platform uses cookies and similar tracking
            technologies. It outlines the types of cookies used, their purposes,
            and provides information on how users can manage their cookie
            preferences.
          </p>
          <h3
            className="fn__maintitle"
            data-text="Do You Legally Need a Cookies Policy?"
          >
            Do You Legally Need a Cookies Policy?
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Yes, in many jurisdictions, including the European Union and various
            other countries, it is a legal requirement to have a Cookies Policy
            if your website or platform uses cookies. Even if not legally
            mandated, having a Cookies Policy is considered a best practice for
            transparency and compliance with privacy regulations.
          </p>
          <h3
            className="fn__maintitle"
            data-text="What Should be Included in Your Cookies Policy?"
          >
            What Should be Included in Your Cookies Policy?
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>Your Cookies Policy should include the following:</p>
          <h3 className="fn__maintitle" data-text="Definition of Cookies">
            Definition of Cookies
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Provide a clear definition of what cookies are and how they
            function.
          </p>
          <h3
            className="fn__maintitle"
            data-text="What You Use the Cookies For"
          >
            What You Use the Cookies For
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Explain the purposes for which you use cookies. This can include
            analytics, personalization, advertising, and essential site
            functions.
          </p>
          <h3
            className="fn__maintitle"
            data-text="How Users can Opt Out or Adjust Settings"
          >
            How Users can Opt Out or Adjust Settings
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Inform users how they can manage their cookie preferences, including
            how to opt out or adjust their browser settings to control cookie
            acceptance.
          </p>
          <h3
            className="fn__maintitle"
            data-text="Cookies Notice When Asking for Consent"
          >
            Cookies Notice When Asking for Consent
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Describe how you notify users and obtain their consent before
            placing cookies, especially those that are not strictly necessary
            for the site to function.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Cookies;
