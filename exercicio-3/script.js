const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
};

const getBillingSummary = (data) => {
  const billingSum = data.reduce((total, day) => total + day.valor, 0);
  const mediaBilling = billingSum / data.length;
  const minBilling = Math.min(...data.map((day) => day.valor));
  const maxBilling = Math.max(...data.map((day) => day.valor));
  const daysAboveAverage = data.filter((day) => day.valor > mediaBilling).length;

  return { minBilling, maxBilling, daysAboveAverage };
};

const updateResults = (results) => {
  const { minBilling, maxBilling, daysAboveAverage } = results;
  document.getElementById('min-billing-daily').innerText = `R$ ${minBilling.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  document.getElementById('max-billing-daily').innerText = `R$ ${maxBilling.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  document.getElementById('count-daily-average').innerText = daysAboveAverage;
};

const getData = async () => {
  const data = await fetchData('./dados.json');
  const dataOffValorNotZero =  data.filter((day) => {
    return day.valor > 0 ;
  });
  const billingSummary = getBillingSummary(dataOffValorNotZero);
  updateResults(billingSummary);
};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-get');
  btn.addEventListener('click', () => {
    getData();
    document.getElementById('response-msg').classList.remove('hidden');
    btn.remove();
  });
});
