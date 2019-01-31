function produceDrivingRange(blockRange) {
  return function(start, end) {
    const distance = Number(end.slice(0,2)) - Number(start.slice(0,2));
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`;
    } else {
      return `${distance - blockRange} blocks out of range`;
    }

    // let start = parseInt( startingBlock );
    //  let end = parseInt( endingBlock );
    //  let distanceToTravel = Math.abs( end - start );
    //  let difference = blockRange - distanceToTravel;
    //
    //  if ( difference > 0 ) {
    //    return `within range by ${difference}`
    //  } else {
    //    return `${Math.abs(difference)} blocks out of range`
    //  }
  };
};

function produceTipCalculator(percentage) {
  return function(bill) {
    return percentage * bill;
  };
};

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    };
  };
};
