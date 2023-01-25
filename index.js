let netSalary = 100000
const workingDays = 260
let daySalary = 0
let holidayDaysSalary = 0
// const daySalary = netSalary / workingDays
// let holidayDays = 25
// const holidayDaysSalary = holidayDays * daySalary
let paternityDays = 0
const paternityDaysSalary = paternityDays * daySalary

const calculateBtn = document.getElementById('calculate-btn')
const packageValue = document.getElementById('package-value')
const netSalaryInput = document.getElementById('net-salary-input')


function holidayPay() {
    daySalary = netSalary / workingDays
    let holidayDays = document.getElementById('holidays').value
    holidayDaysSalary = holidayDays * daySalary
    
}

const formatter = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'GBP',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });



calculateBtn.addEventListener('click', function() {
    //get salary input and update netsalary
    netSalary = Number(netSalaryInput.value)

    //get holidays and update holidat salary
    holidayPay()
    let totalPackageSum = netSalary + holidayDaysSalary
    packageValue.innerHTML = formatter.format(totalPackageSum)
})










