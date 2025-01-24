import React, { useState, useEffect } from "react";

const Details = () => {
  const [top1Percent, setTop1Percent] = useState(0);
  const [sales, setSales] = useState(0);
  const [recordSale, setRecordSale] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      setTimeout(() => {
        const targetTop1Percent = 1; // Top 1% (1 is static, for visual purpose we use this)
        const targetSales = 500000000; // $500M+
        const targetRecordSale = 20000000; // $20M

        let intervalTop1Percent = setInterval(() => {
          setTop1Percent((prev) => {
            if (prev < targetTop1Percent) return prev + 0.01;
            clearInterval(intervalTop1Percent);
            return targetTop1Percent;
          });
        }, 100);

        let intervalSales = setInterval(() => {
          setSales((prev) => {
            if (prev < targetSales) return prev + 5000000; // Increment by $5M for smoother animation
            clearInterval(intervalSales);
            return targetSales;
          });
        }, 200);

        let intervalRecordSale = setInterval(() => {
          setRecordSale((prev) => {
            if (prev < targetRecordSale) return prev + 1000000; // Increment by $1M for smoother animation
            clearInterval(intervalRecordSale);
            return targetRecordSale;
          });
        }, 200);
      }, 300);
    };

    animateNumbers();
  }, []);

  return (
    <div className=" bg-black py-20 px-6 text-center text-white">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
        Mohit & Team Services
      </h2>

      {/* Section Content */}
      <p className="text-xl mb-12 font-semibold max-w-4xl mx-auto">
        Acres, led by Mohit, services an organically growing client base consisting of homeowners, prospective purchasers, landlords, investors, and developers. The team is adamant in delivering data-driven, transparent, empathetic real estate advisory. By incorporating an incomparable approach of unparalleled marketing, real-market data, white-glove service, and exceptional client dedication, it’s easy to see why the Philip Scheinfeld team outperforms its competitors.
      </p>

      {/* Statistics Section - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Top {top1Percent.toFixed(2)}%
          </h3>
          <p className="text-lg text-gray-600">of Agents Nationwide</p>
          <p className="text-sm text-gray-600">per the Wall Street Journal Real Trends</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            <span className="text-4xl text-white">
              {sales.toLocaleString()}
            </span>
            +
          </h3>
          <p className="text-lg text-gray-600">in Closed Sales</p>
          <p className="text-sm text-gray-600">since the Inception of the Philip Scheinfeld Team</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
            <span className="text-4xl text-white">
              {recordSale.toLocaleString()}
            </span>
          </h3>
          <p className="text-lg text-gray-600">Record-breaking Sale</p>
          <p className="text-sm text-gray-600">of Greenwich Lane Complex</p>
        </div>
      </div>
      
    </div>

  );
};

export default Details;
