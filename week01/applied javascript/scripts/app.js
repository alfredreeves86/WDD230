// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		month: "short",
		day: "numeric",
		year: "numeric"
	};

// Question #4
//In your forked Pen, change the given date output to this format: mon dd, year (for example, Apr 04, 2024)

today1.innerHTML = new Date().toLocaleDateString("en-us", options);
// Question #5
//Replace this concatenated string using a template literal
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;
// Question #6
//Declare a variable named quantity and assign it the value of the HTML input element with an id of q using the querySelector method.
let quantity = document.querySelector('#q').value;
// Question #7
//Output this string, "Welcome to <mark>our</mark> neighborhood!", to the first <aside> in the document.
document.querySelector('aside').innerHTML = 'Welcome to <mark>our</mark> neighborhood!';
// Question #8
//Output the returned value of a function named getCelsius to an HTML input element with an id of temp. Feed the getCelsius literal value of 33 (which represents 33°F). The getCelsius function is already included in the provided CodePen code.
//Stretch: Format the output to include only one decimal place and label it with the Celsius symbol, e.g., "0.6°C".

document.querySelector('#temp').value = getCelsius(33);
// Question #9
//Select all the div elements in a document and assign the result to a const variable named divs using querySelectorAll. Output to the provided div element with an id of divs in the CodePen.
//Stretch:Format the output like this (assuming the result was 10): "There are 10 div elements on the page."
const divs = document.querySelectorAll('div');document.querySelector('#divs').textContent = `${divs.length} divs in document.`;

// Question #10
//Filter an array named citynames to return only city names in the array that start with the letter "C" and store the resulting array into a variable named filterC. Output to the provided div element with an id of c-names in the CodePen
let filterC = citynames.filter(city => city.charAt(0) === 'C');
document.querySelector('#c-names').textContent = filterC