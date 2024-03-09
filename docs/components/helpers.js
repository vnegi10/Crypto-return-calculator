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
    
    for (const obj of convertDates(breakdown)) {
      const newObj1 = {
        name: "BTC",
        value: obj.bitcoin,
        time: obj.time
      };
      stackArray.push(newObj1);
    
      const newObj2 = {
        name: "ETH",
        value: obj.ethereum,
        time: obj.time
      };
      stackArray.push(newObj2);
    
      const newObj3 = {
        name: "LINK",
        value: obj.chainlink,
        time: obj.time
      };
      stackArray.push(newObj3);
      }

      return stackArray

}