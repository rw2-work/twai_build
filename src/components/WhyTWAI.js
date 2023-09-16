import dynamic from "next/dynamic";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const WhyTWAI = () => {
  return (
    <section id="why_twai">
      <div className="container">
        <h3 className="fn__title_counter" data-align="center">
          Why Are We &quot;Twisting&quot; With AI?
        </h3>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>Profound Influence of AI on Contemporary World</span>
            </div>
            <div className="desc">
              <p>
                The need to discuss AI in &quot;Twisting with AI&quot; arises
                from the profound influence of artificial intelligence on our
                contemporary world. AI is no longer a niche field but a
                pervasive force impacting industries, economies, creativity, and
                even our psychological experiences.
              </p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div className="img">
                <img src="./img/about/1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>Potential and Ethical Challenges Associated with AI</span>
            </div>
            <div className="desc">
              <p>
                By exploring AI&apos;s far-reaching implications, this blog aims
                to empower readers with knowledge and insights to navigate the
                AI-driven era. It sheds light on the transformative potential
                and ethical challenges associated with AI, offering a platform
                for informed discussions and responsible development.
              </p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div className="img">
                <img src="./img/about/1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>AI&apos;s Role in Shaping our Present and Future</span>
            </div>
            <div className="desc">
              <p>
                &quot;Twisting with AI&quot; serves as a vital resource for
                those seeking to understand AI&apos;s role in shaping our present and
                future, fostering a space for critical thinking, exploration,
                and engagement in the dynamic landscape of artificial
                intelligence.
              </p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div className="img">
                <img src="./img/about/1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="fn_cs_counter_list">
          <ul>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={70} />
                  <span className="suffix">%</span>
                </h3>
                <p>Global Economic Impact</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix">$</span>
                  <Counter end={137.5} decimals={1} />
                  <span className="suffix">B</span>
                </h3>
                <p>Worth of AI Market</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix">$</span>
                  <Counter end={15.7} decimals={1} />
                  <span className="suffix">T</span>
                </h3>
                <p>Expected Contribution by 2030</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={91.5} decimals={1} />
                  <span className="suffix">%</span>
                </h3>
                <p>Leading Businesses invest in AI</p>
                <div className="divider" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default WhyTWAI;
