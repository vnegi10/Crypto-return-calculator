export function convertDates(breakdown) {

    var breakdown_dates;
    breakdown_dates = breakdown.map(({time, ...rest}) => {
      return {
        time: new Date(time),
        ...rest
      };
    });

    return breakdown_dates

}

const tickers = ["BTC",
                 "ETH",
                 "LINK",
                 "DASH",
                 "LTC"];

const names = ["bitcoin",
                "ethereum",
                "chainlink",
                "dash",
                "litecoin"];

export function createStack(breakdown) {

    const stackArray = [];

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

    for (let i = 0; i < tickers.length; i++) {

        for (const obj of breakdown_dates) {
            const newObj = {
              name: tickers[i],
              value: obj[names[i]],
              time: obj.time
            };
            clubbedArray.push(newObj);
          }
    }

    return clubbedArray

}

export function getPertChange(breakdown, num_days) {

    const change = (breakdown[breakdown.length - 1].value -
                    breakdown[breakdown.length - 1 - num_days].value)
                    / breakdown[breakdown.length - 1- num_days].value
    
    // Change %
    const pert_change = change * 100;

    // Round off to first digit after decimal
    return Math.round(pert_change * 10) / 10

}