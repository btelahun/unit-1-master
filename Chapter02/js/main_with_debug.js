// Add all scripts to the JS folder
//initialize function called when script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    };

    //add the table to the div in index.html
    document.querySelector("#mydiv").appendChild(table);
	addColumns(cityPop);
	addEvents();
};

//call the initialize function when the DOM has loaded
document.addEventListener('DOMContentLoaded',initialize)



var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
		
    });
};

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){
			
			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";

			} else {
				color += ")";

			} //added bracket to close the else block
		};

		document.querySelector("table").style.color = color;
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

