import dataEntry from 'readline-sync';

console.log("Choose only one of the following options: ");
console.log("1 - show the average wages in Germany between 2010 and 2022: ");
console.log("2 - show the inflation rate in Germany between the years 2010 and 2022: ");
console.log("3 - Compare the wage variation with the inflation rate in Germany: ");

let choose_one = dataEntry.question("press 1, 2, or 3: ");
choose_one = Number(choose_one) 

let average_wage = [
    {year: 2010, avg_wage: 40.808},
    {year: 2011, avg_wage: 41.631},
    {year: 2012, avg_wage: 42.186},
    {year: 2013, avg_wage: 42.584},
    {year: 2014, avg_wage: 43.298},
    {year: 2015, avg_wage: 44.293},
    {year: 2016, avg_wage: 44.972},
    {year: 2017, avg_wage: 45.445},
    {year: 2018, avg_wage: 46.082},
    {year: 2019, avg_wage: 46.839},
    {year: 2020, avg_wage: 46.513},
    {year: 2021, avg_wage: 46.449},
    {year: 2022, avg_wage: 45.457}
];

let inflation = [
    {year: 2010, inflation_rate: 1.10},
    {year: 2011, inflation_rate: 2.08},
    {year: 2012, inflation_rate: 2.01},
    {year: 2013, inflation_rate: 1.50},
    {year: 2014, inflation_rate: 0.91},
    {year: 2015, inflation_rate: 0.51},
    {year: 2016, inflation_rate: 0.49},
    {year: 2017, inflation_rate: 1.51},
    {year: 2018, inflation_rate: 1.73},
    {year: 2019, inflation_rate: 1.45},
    {year: 2020, inflation_rate: 0.14},
    {year: 2021, inflation_rate: 3.07},
    {year: 2022, inflation_rate: 6.87}
];

let year_label = "Year: ";
let wage_label = "Average Wage: ";
let growing_label = "Wage Growing/Decreasing: ";
let inflation_label = "Inflation Rate: ";
year_label = year_label.padEnd(30, '.');
wage_label = wage_label.padEnd(30, '.');
growing_label = growing_label.padEnd(30, '.');
inflation_label = inflation_label.padEnd(30, '.');

if (choose_one === 1) {
    for (let i = 0; i <= average_wage.length - 1; i++) {
        let year = average_wage[i].year;
        let wage_average = average_wage[i].avg_wage;
        let wage_fixed = wage_average.toFixed(2).replace(".", ",");

        console.log("\n");
        console.log(year_label + year);
        console.log(wage_label + "€" + wage_fixed);
    }
} else if (choose_one === 2) {
    for (let i = 0; i <= inflation.length - 1; i++) {
        let year = inflation[i].year;
        let inflation_growth = inflation[i].inflation_rate;

        let inflation_fixed = inflation_growth.toFixed(2).replace(".", ",");

        console.log("\n");
        console.log(year_label + year);
        console.log(inflation_label + inflation_fixed + "%");
    }
} else if (choose_one === 3) {
    for (let i = 0; i <= average_wage.length - 1; i++) {
        let year = average_wage[i].year;
        let wage_in_avg = average_wage[i].avg_wage;
        let growth_percentage;
        let growth_percentage_fixed;

        if (i > 0) {
            let former_wage = average_wage[i - 1].avg_wage;
            let diference = wage_in_avg - former_wage;

            growth_percentage = (diference / former_wage) * 100;

            growth_percentage_fixed = growth_percentage.toFixed(2).replace(".", ",") + "%";
        } else {
            growth_percentage_fixed = "-";
        }

        let inflation_percentage = inflation[i].inflation_rate;

        let wage_fixed = wage_in_avg.toFixed(2).replace(".", ",");
        let inflation_fixed = inflation_percentage.toFixed(2).replace(".", ",");

        console.log("\n");
        console.log(year_label + year);
        console.log(wage_label + "€" + wage_fixed);
        console.log(growth_percentage + growth_percentage_fixed);
        console.log(inflation_label + inflation_fixed + "%");
    }
} else {
    console.log("Invalid Option! Please run the program again and choose 1,2 or 3");
}