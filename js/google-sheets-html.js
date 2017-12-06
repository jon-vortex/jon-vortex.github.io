/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

/* https://docs.google.com/spreadsheets/d/1RQq636q0nL9opVjmaHCwX0qmcLizohdKTtrMhYldZUs/edit?usp=sharing
*/

function drawVisualization() {
/*    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1y8QRGUT0bb0Wx6lAHbMjNxU7Zs96WDJE9SXRiuQQfJc&output=html&usp=sharing'); original */ 
	var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1RQq636q0nL9opVjmaHCwX0qmcLizohdKTtrMhYldZUs&output=html&usp=sharing');
	/*query.setQuery('SELECT A, B, C, D label A "Duration", B "Song", C "Requested By", D "URL"'); */
	query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J, K, L label A "Device", B "Heart Rate", C "Waterproof", D "Sleep tracker", E "GPS", F "Watch", G "Battery Life", H "Cell (LTE)", I "Phone Calls", J "Rating", K "Price", L "Comments"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
		allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
