function convertDates(breakdown) {

    var breakdown_dates;
    breakdown_dates = breakdown.map(({time, ...rest}) => {
      return {
        time: new Date(time),
        ...rest
      };
    });

    return breakdown_dates

}

export function createStack(breakdown) {

    const stackArray = [];
    const tickers = ["BTC",
                     "ETH",
                     "LINK"];

    const names = ["bitcoin",
                   "ethereum",
                   "chainlink"];
    
    for (const obj of convertDates(breakdown)) {

        for (let i = 0; i < tickers.length; i++) {
            const newObj = {
                name: tickers[i],
                value: obj[names[i]],
                time: obj.time
              };
              stackArray.push(newObj);
        }
    }

    return stackArray

}

export function createClubbedStack(breakdown) {

    const clubbedArray = [];
    const breakdown_dates = convertDates(breakdown);

    for (const obj of breakdown_dates) {
      const newObj1 = {
        name: "BTC",
        value: obj.bitcoin,
        time: obj.time
      };
      clubbedArray.push(newObj1);
    }

    for (const obj of breakdown_dates) {
        const newObj2 = {
          name: "ETH",
          value: obj.ethereum,
          time: obj.time
        };
        clubbedArray.push(newObj2);
    }

    for (const obj of breakdown_dates) {
        const newObj3 = {
          name: "LINK",
          value: obj.chainlink,
          time: obj.time
        };
          clubbedArray.push(newObj3);
    }
    
    return clubbedArray

}