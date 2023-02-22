$(document).ready(function() {

    // Load the Google Spreadsheet
    var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1waWDtnICSNIqL3sY5Z9iuhrBmCRY4GXiw1tDL20knPk/pubhtml';
    var options = {
      callback: showInfo,
      simpleSheet: true
    };
    Tabletop.init(options);
  
    // Function to display the data
    function showInfo(data) {
  
      // Get the latest non-empty data from the columns
      var col1Data = '';
      var col2Data = '';
      var col3Data = '';
      for (var i = data.length - 1; i >= 0; i--) {
        if (data[i]['Column 1'] !== '') {
          col1Data = data[i]['Column 1'];
          break;
        }
      }
      for (var i = data.length - 1; i >= 0; i--) {
        if (data[i]['Column 2'] !== '') {
          col2Data = data[i]['Column 2'];
          break;
        }
      }
      for (var i = data.length - 1; i >= 0; i--) {
        if (data[i]['Column 3'] !== '') {
          col3Data = data[i]['Column 3'];
          break;
        }
      }
  
      // Update the text on the HTML page
      $('#col1').text(col1Data);
      $('#col2').text(col2Data);
      $('#col3').text(col3Data);
  
      // Set a timeout to refresh the data every 10 seconds
      setTimeout(function() {
        Tabletop.init(options);
      }, 10000);
    }
  });
