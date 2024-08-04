//write a js function
//to formart number
//10000=>10,000

const properNumber = (num) => {
  return Number(num).toLocaleString();
};

module.exports = { properNumber };
