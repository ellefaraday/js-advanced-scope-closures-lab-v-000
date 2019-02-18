const produceDrivingRange = (range) => {
  return function (startBlock, endBlock) {
    const blockRange = Math.abs(parseInt(startBlock.slice(0, -2)) - parseInt(endBlock.slice(0, -2)))
    if(blockRange <= range){
      return `within range by ${range - blockRange}`;
    } else {
      return `${blockRange - range} blocks out of range`;
    }
  };
}

const produceTipCalculator = (percentage) => {
  return function (fare){
    return fare * percentage
  }
}

const createDriver = () => {
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name
    }
  }
}
