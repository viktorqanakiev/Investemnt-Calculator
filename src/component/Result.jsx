import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestmentc = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
 
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invest Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestmentc;
            const totalAmountInvest  = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
