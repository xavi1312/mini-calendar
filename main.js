const lang = navigator.language;
const $colorPicker = document.getElementById('colorPicker');

const getActualDate = lang => {
  const date = new Date();

  const dayNumber = date.getDate();
  const month = date.getMonth();
  const dayName = date.toLocaleString(lang, { weekday: 'long' });
  const monthName = date.toLocaleString(lang, { month: 'long' });
  const year = date.getFullYear();

  return {
    dayNumber,
    month,
    dayName,
    monthName,
    year,
  };
};
const innerText = (el, text) => {
  document.querySelector(el).innerText = text;
};

const { dayNumber, month, dayName, monthName, year } = getActualDate(lang);
innerText('#monthName', monthName);
innerText('#dayName', dayName);
innerText('#dayNumber', dayNumber);
innerText('#year', year);

/* COLOR PICKER */
$colorPicker.addEventListener('input', event => {
  document.documentElement.style.setProperty(
    '--calendar-color',
    event.target.value
  );
});
