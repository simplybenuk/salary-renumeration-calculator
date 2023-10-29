// Function to calculate the effective salary and other benefits
function calculateEffectiveSalary() {
  // Get values for Job 1
  const basicSalary1 = parseFloat(document.getElementById('basicSalary1').value);
  const employerPension1 = parseFloat(document.getElementById('employerPension1').value);
  const annualLeave1 = parseFloat(document.getElementById('annualLeave1').value);
  const parentalLeave1 = parseFloat(document.getElementById('parentalLeave1').value);
  // const fourDayWeek1 = document.getElementById('fourDayWeek1').checked;

  // Get values for Job 2
  const basicSalary2 = parseFloat(document.getElementById('basicSalary2').value);
  const employerPension2 = parseFloat(document.getElementById('employerPension2').value);
  const annualLeave2 = parseFloat(document.getElementById('annualLeave2').value);
  const parentalLeave2 = parseFloat(document.getElementById('parentalLeave2').value);
  // const fourDayWeek2 = document.getElementById('fourDayWeek2').checked;

  // // Calculate the value of a 4-day week (assuming 260 workdays a year)
  // const fourDayWeekValue1 = fourDayWeek1 ? (basicSalary1 / 260) * 52 : 0;
  // const fourDayWeekValue2 = fourDayWeek2 ? (basicSalary2 / 260) * 52 : 0;

  // Calculate pension contributions for both jobs
  const pensionContribution1 = basicSalary1 * (employerPension1 / 100);
  const pensionContribution2 = basicSalary2 * (employerPension2 / 100);

  // Calculate annual leave value for both jobs (assuming 260 workdays a year)
  const annualLeaveValue1 = (basicSalary1 / 260) * annualLeave1;
  const annualLeaveValue2 = (basicSalary2 / 260) * annualLeave2;

  // Calculate parental leave value for both jobs (converted to days, assuming 260 workdays a year)
  const parentalLeaveValue1 = (basicSalary1 / 260) * (parentalLeave1 * 5);  // 5 days in a workweek
  const parentalLeaveValue2 = (basicSalary2 / 260) * (parentalLeave2 * 5);  // 5 days in a workweek

  // Calculate the effective salary for both jobs (excluding parental leave)
  const effectiveSalary1 = basicSalary1 + pensionContribution1 + annualLeaveValue1;
  const effectiveSalary2 = basicSalary2 + pensionContribution2 + annualLeaveValue2;

  // Display the results with breakdown
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <h2 class="govuk-heading-l">Results</h2>
    <div class="container">
      <section class="govuk-section">
        <h3>Effective Salary for Job 1: £${Number(effectiveSalary1.toFixed(2)).toLocaleString()}</h3>
        <ul>
          <li>Basic Salary: £${Number(basicSalary1.toFixed(2)).toLocaleString()}</li>
          <li>Employer Pension Contribution: £${Number(pensionContribution1.toFixed(2)).toLocaleString()}</li>
          <li>Annual Leave Value: £${Number(annualLeaveValue1.toFixed(2)).toLocaleString()}</li>
        </ul>
        <h3>Other Benefits</h3>
        <ul>
          <li>Parental Leave Value for Job 1 (in days): £${Number(parentalLeaveValue1.toFixed(2)).toLocaleString()}</li>
        </ul>
      </section>
      <section class="govuk-section">
        <h3>Effective Salary for Job 2: £${Number(effectiveSalary2.toFixed(2)).toLocaleString()}</h3>
        <ul>
          <li>Basic Salary: £${Number(basicSalary2.toFixed(2)).toLocaleString()}</li>
          <li>Employer Pension Contribution: £${Number(pensionContribution2.toFixed(2)).toLocaleString()}</li>
          <li>Annual Leave Value: £${Number(annualLeaveValue2.toFixed(2)).toLocaleString()}</li>
        </ul>
        <h3>Other Benefits</h3>
        <ul>
          <li>Parental Leave Value for Job 2 (in days): £${Number(parentalLeaveValue2.toFixed(2)).toLocaleString()}</li>
        </ul>
      </section>
    </div>
  `;
}

// Add event listener to the "Calculate" button
document.getElementById('calculate').addEventListener('click', calculateEffectiveSalary);
