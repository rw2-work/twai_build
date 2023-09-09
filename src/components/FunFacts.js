import dynamic from "next/dynamic";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const FunFacts = () => {
  return (
    <section id="fun_facts">
      <div className="container">
      <h3
          className="fn__title_counter"
          data-align="center"
        >
         Why "Twist" With AI
        </h3>
        <div className="fn_cs_counter_list">
          <ul>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={70} />
                  <span className="suffix">
                    %
                  </span>
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
                  <Counter end={144} />
                  <span className="suffix">k+</span>
                </h3>
                <p>Volume Traded (ETH)</p>
                <div className="divider" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default FunFacts;
