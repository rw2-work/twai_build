import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import Link from "next/link";

const TermsConditions = () => {
  return (
    <Layout pageTitle={"Terms & Conditions"}>
      <PageBanner pageName={"Terms & Conditions"} />

      <div className="metaportal_fn_privacy">
        <div className="container small">
          <h3
            className="fn__maintitle"
            data-text="Ownership of Site; Agreement to Terms of Use"
          >
            Ownership of Site; Agreement to Terms of Use
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Twisting with AI is owned and operated by TWAI Inc.. By accessing or
            using the Site, you agree to comply with and be bound by these Terms
            of Use. If you do not agree to these Terms of Use, please do not use
            the Site.
          </p>
          <h3 className="fn__maintitle" data-text="Content">
            Content
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            All content, including articles, images, graphics, and other
            materials on the Site, is owned by Twisting with AI or its content
            providers and is protected by copyright, trademark, and other
            intellectual property laws. You may access and use the content for
            personal, non-commercial purposes only. Any use of the content
            without prior written consent is strictly prohibited.
          </p>
          <h3 className="fn__maintitle" data-text="Your Use of the Site">
            Your Use of the Site
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            You agree to use the Site only for lawful purposes and in a way that
            does not infringe on the rights of others or inhibit their use of
            the Site. You further agree not to engage in any conduct that may
            disrupt or interfere with the Site&apos;s operation or compromise its
            security.
          </p>
          <h3
            className="fn__maintitle"
            data-text="Purchases; Other Terms and Conditions"
          >
            Purchases; Other Terms and Conditions
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Certain products or services may be offered for purchase through the
            Site. In such cases, additional terms and conditions may apply to
            those purchases. You agree to abide by these additional terms and
            conditions, including payment and delivery terms.
          </p>
          <h3
            className="fn__maintitle"
            data-text="Accounts, Passwords and Security"
          >
            Accounts, Passwords and Security
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            If you create an account on the Site, you are responsible for
            maintaining the confidentiality of your account information and
            password. You agree to notify us immediately of any unauthorized
            access to your account. Twisting with AI is not liable for any loss
            or damage arising from your failure to protect your account
            information.
          </p>
          <h3 className="fn__maintitle" data-text="Privacy">
            Privacy
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Your use of the Site is also governed by our Privacy Policy, which
            can be accessed <Link href="/policy">here</Link>. By using the Site, you
            consent to the practices described in the Privacy Policy.
          </p>
          <h3 className="fn__maintitle" data-text="Disclaimers">
            Disclaimers
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            The Site is provided on an &quot;as-is&quot; and
            &quot;as-available&quot; basis, without any warranties of any kind.
            Twisting with AI disclaims all warranties, express or implied,
            including but not limited to merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
          <h3
            className="fn__maintitle"
            data-text="Violation of These Terms of Use"
          >
            Violation of These Terms of Use
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Twisting with AI reserves the right to take appropriate legal action
            in response to violations of these Terms of Use, including but not
            limited to terminating or suspending access to the Site.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default TermsConditions;
