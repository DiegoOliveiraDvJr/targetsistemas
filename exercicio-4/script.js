const monthlySales = {
  sp: 67836.43,
  rj: 36678.66,
  mg: 29229.88,
  es: 27165.48,
  others: 19849.53,
};

function calculateSalesPercentages(monthlySales) {
  const totalSales = Object.values(monthlySales).reduce((total, value) => total + value, 0);

  const salesPercentages = Object.entries(monthlySales).reduce((percentages, [state, sales]) => {
    percentages[state] = ((sales / totalSales) * 100).toFixed(2);
    return percentages;
  }, {});

  return salesPercentages;
}


document.addEventListener('DOMContentLoaded', () => {

  const btnExecute = document.getElementById('btn-execute');

  btnExecute.addEventListener('click', () => {

    salesPercentages = calculateSalesPercentages(monthlySales);

    document.getElementById('response-msg').classList.remove('hidden');

    document.getElementById('percent-sp').innerText = `${salesPercentages.sp}%`;
    document.getElementById('percent-rj').innerText = `${salesPercentages.rj}%`;
    document.getElementById('percent-mg').innerText = `${salesPercentages.mg}%`;
    document.getElementById('percent-es').innerText = `${salesPercentages.es}%`;
    document.getElementById('percent-others').innerText = `${salesPercentages.others}%`;

    btnExecute.remove();
  })

});





