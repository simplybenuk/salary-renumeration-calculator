const calculateBtn = document.getElementById('calculate-btn')
const grossSalaryInput = document.getElementById('gross-salary-input')
const grossSalaryValue = document.getElementById('gross-salary-value')
const weeklyHoursInput = document.getElementById('weekly-hours-input')
const hourlyWageValue = document.getElementById('hourly-wage-value')
const holidaysInput = document.getElementById('holidays-input')
const holidaysValue = document.getElementById('holidays-value')

const workingDays = 260



function holidayPay() {
    daySalary = grossSalary / workingDays
    let holidayDays = document.getElementById('holidays').value
    holidayDaysSalary = holidayDays * daySalary
    
}

const formatter = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'GBP',
  });



calculateBtn.addEventListener('click', function() {
    renderSalary()
    renderHolidayValue()
})

function renderSalary() {
    const weeklyWage = grossSalaryInput.value / 52
    const hourlyWage = weeklyWage / weeklyHoursInput.value
    grossSalaryValue.innerText = formatter.format(grossSalaryInput.value)
    hourlyWageValue.innerText = formatter.format(hourlyWage)
}

function renderHolidayValue() {
    const dailyWage = grossSalaryInput.value / workingDays
    const holidayWage = dailyWage *  holidaysInput.value
    holidaysValue.innerText = formatter.format(holidayWage)
}

// function renderPaternityValue() {

// }








