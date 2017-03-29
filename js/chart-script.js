const CHART1 = document.getElementById("lineChart");
const CHART2 = document.getElementById("barChart");
const CHART3 = document.getElementById("doughnutChart");

const hourly = document.getElementById("time-span-hourly");
const daily = document.getElementById("time-span-daily");
const weekly = document.getElementById("time-span-weekly");
const monthly = document.getElementById("time-span-monthly");



const monthlyFunc = (function() {

	let lineChart = new Chart(CHART1, {
		type: 'line',
		data:  {
		    labels: ["September", "October", "November", "December", "January", "February", "March"],
		    datasets: [
			        {
			            label: "Users per month",
			            fill: false,
			            lineTension: 0.1,
			            backgroundColor: "rgba(75,192,192,0.4)",
			            borderColor: "rgba(75,192,192,1)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(75,192,192,1)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(75,192,192,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [650, 590, 708, 711, 760, 753, 794],
			            spanGaps: false,
			        }
		    	]
			}
		});

})();


$(hourly).click(function() {
	$(hourly).addClass('highlighted');
	$(daily).removeClass('highlighted');
	$(weekly).removeClass('highlighted');
	$(monthly).removeClass('highlighted');

	let lineChart = new Chart(CHART1, {
	type: 'line',
	data:  {
	    labels: ["4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"],
	    datasets: [
		        {
		            label: "Users per hour",
		            fill: false,
		            lineTension: 0.1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(75,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: [4, 5, 3, 6, 4, 8, 5],
		            spanGaps: false,
		        }
	    	]
		}
	});	
});


$(daily).click(function() {
	$(hourly).removeClass('highlighted');
	$(daily).addClass('highlighted');
	$(weekly).removeClass('highlighted');
	$(monthly).removeClass('highlighted');

	let lineChart = new Chart(CHART1, {
	type: 'line',
	data:  {
	    labels: ["3-20", "3-21", "3-22", "3-23", "3-24", "3-25", "3-26"],
	    datasets: [
		        {
		            label: "Users per day",
		            fill: false,
		            lineTension: 0.1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(75,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: [65, 59, 80, 81, 56, 55, 56],
		            spanGaps: false,
		        }
	    	]
		}
	});	

});

$(weekly).click(function() {
	$(hourly).removeClass('highlighted');
	$(daily).removeClass('highlighted');
	$(weekly).addClass('highlighted');
	$(monthly).removeClass('highlighted');

	let lineChart = new Chart(CHART1, {
	type: 'line',
	data:  {
	    labels: ["2-12", "2-19", "2-26", "3-5", "3-12", "3-19", "3-26"],
	    datasets: [
		        {
		            label: "Users per week",
		            fill: false,
		            lineTension: 0.1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(75,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: [204, 210, 187, 197, 198, 201, 205],
		            spanGaps: false,
		        }
	    	]
		}
	});	

});


$(monthly).click(function() {
	$(hourly).removeClass('highlighted');
	$(daily).removeClass('highlighted');
	$(weekly).removeClass('highlighted');
	$(monthly).addClass('highlighted');

	let lineChart = new Chart(CHART1, {
	type: 'line',
	data:  {
	    labels: ["September", "October", "November", "December", "January", "February", "March"],
	    datasets: [
		        {
		            label: "Users per month",
		            fill: false,
		            lineTension: 0.1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(75,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: [650, 590, 708, 711, 760, 753, 794],
		            spanGaps: false,
		        }
	    	]
		}
	});	
});



let barChart = new Chart(CHART2, {
	type: 'bar',
	data: {
	    labels: ["3-20", "3-21", "3-22", "3-23", "3-24", "3-25", "3-26"],
	    datasets: [
	        {
	            label: "Users per day",
	            backgroundColor: [
	                "#a2d891",
                	"#7CB4B8",
                	"#7779b5",
                	"#a2d891",
                	"#7CB4B8",
                	"#7779b5",
                	"#a2d891"
	              
	            ],
	            borderColor: [
	                "#a2d891",
	                "#7CB4B8",
	                "#7779b5",
	                "#a2d891",
                	"#7CB4B8",
                	"#7779b5",
                	"#a2d891"
	            ],
	            borderWidth: 1,
	            data: [65, 59, 80, 81, 56, 55, 56],
       		}
    	]
	}
});


let barChart2 = new Chart(CHART3, {
	type: 'doughnut',
	data: {
	    labels: ["Smart phones",
        "Tablets",
        "Desktop"
        ],
	    datasets: [
        {
            data: [33, 33, 33],
            backgroundColor: [
                "#a2d891",
                "#7CB4B8",
                "#7779b5"
            ],
            hoverBackgroundColor: [
                "#a2d891",
                "#7CB4B8",
                "#7779b5"
            ],


       		}
    	]
	},
	options: {

          legend: {display: true,
                   position: 'left',
                   fullWidth: true,
                   labels: {boxWidth:  15,}
                 },
          // circumference: 2.5 * Math.PI,
          cutoutPercentage:  60,
          responsive: true,
          mainAspectRatio:true,
      }
  });
