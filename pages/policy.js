import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Policy = () => {
  return (
    <Layout pageTitle={"Privacy Policy"}>
      <PageBanner pageName={"Privacy Policy"} />
      <div className="metaportal_fn_privacy">
        <div className="container small">
          <h3 className="fn__maintitle" data-text="Who we are">
            Who we are
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            At <strong>Twisting with AI,</strong> we are dedicated to exploring
            the captivating realm of artificial intelligence. Our blog is a
            platform for sharing knowledge, insights, and discussions related to
            AI and its diverse applications. We strive to foster a community of
            AI enthusiasts and learners, providing valuable content and engaging
            experiences.
          </p>
          <h3 className="fn__maintitle" data-text="Comments">
            Comments
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            When visitors leave comments on our blog, we collect the data shown
            in the comments form, along with the visitor&apos;s IP address and
            browser user agent string to help with spam detection. This
            information is crucial for maintaining the integrity of our
            discussions and ensuring a safe and respectful environment for all
            participants.
          </p>
          <h3 className="fn__maintitle" data-text="Media">
            Media
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            If you upload images to our blog, you should avoid uploading images
            with embedded location data (EXIF GPS) included. Visitors to the
            website can download and extract any location data from images on
            the blog. We recommend being mindful of the information contained in
            media files to protect your privacy.
          </p>
          <h3 className="fn__maintitle" data-text="Cookies">
            Cookies
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Our website may use cookies to enhance your browsing experience.
            These cookies are small text files stored on your computer that help
            us analyze web traffic, improve user experience, and tailor content
            to your preferences. You have the option to accept or decline
            cookies through your browser settings.
          </p>
          <h3
            className="fn__maintitle"
            data-text="Embedded content from other websites"
          >
            Embedded content from other websites
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Articles on this blog may include embedded content (e.g., videos,
            images, articles) from other websites. Embedded content behaves in
            the same way as if you visited the other website. These websites may
            collect data about you, use cookies, embed additional third-party
            tracking, and monitor your interaction with the embedded content. We
            encourage you to review the privacy policies of these websites.
          </p>
          <h3 className="fn__maintitle" data-text="Who we share your data with">
            Who we share your data with
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            We do not share your personal data with third parties unless
            required by law or for essential functions of the website, such as
            analytics or comment moderation. Your privacy is important to us,
            and we take measures to protect your information.
          </p>
          <h3
            className="fn__maintitle"
            data-text="How long we retain your data"
          >
            How long we retain your data
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This allows us to recognize and approve any follow-up
            comments automatically, providing a smoother user experience. For
            users who register on our website (if any), we also store the
            personal information they provide in their user profile. All users
            can see, edit, or delete their personal information at any time.
          </p>
          <h3
            className="fn__maintitle"
            data-text="What rights you have over your data"
          >
            What rights you have over your data
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            If you have an account on this
            site, or have left comments, you can request to receive an exported
            file of the personal data we hold about you, including any data you
            have provided to us. You can also request that we erase any personal
            data we hold about you. This does not include any data we are
            obliged to keep for administrative, legal, or security purposes.
          </p>
          <h3 className="fn__maintitle" data-text="Where we send your data">
            Where we send your data
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Visitor comments may be checked
            through an automated spam detection service.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Policy;
