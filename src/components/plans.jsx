export const Plans = (props) => {
  const DisplayIconAlternate = (count) => {
    if (count % 2 === 0) return "fa fa-cloud-download";
    else return "fa fa-cart-arrow-down";
  };

  const SplitValue = (data) => {
    return data.split("|");
  };

  const SplitText = (data, index, padStartLength) => {
    var returnText = data.split(" - ")[index];
    var newReturnText = returnText.padStart(padStartLength, " ");
    return newReturnText;
  };

  return (
    <div id="plans" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Plans</h2>
          <p>Explore our wide range of plans to suit to all your requirement</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={DisplayIconAlternate(i)}></i>
                  <div className="plan-desc">
                    <h3>{d.name.padStart(8, " ")}</h3>
                    <p>
                      <div className="list-style">
                        <ul>
                          {SplitValue(d.text).map((rate) => (
                            <li key={rate}>
                              {SplitText(rate, 0, 8)} &#8377;{" "}
                              {SplitText(rate, 1, 7)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
