module.exports = function warmup(temperature) {
   return (temperature!=='undefined')? (temperature * 9/5) + 32 : 'undefined';
};
