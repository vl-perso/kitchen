// Stolen from https://stackoverflow.com/a/31615643


module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  
  return `${dateObject.getUTCDate()} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};
