export default function formatDate(date){
    var dateStr = date.toString()

// Create a Date object
var date = new Date(dateStr);

// Options for formatting the date
var options = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the date
var formattedDate = date.toLocaleDateString('en-US', options);

return formattedDate
}