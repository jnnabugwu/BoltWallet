var events = [
  {'Date': new Date(2018, 0, 17), 'Title': 'Doctor appointment at 3:25pm.'},
  { 'Date': new Date(2018, 0, 8), 'Title': 'Check out bolt wallet', 'Link': 'https://boltwallet.firebaseapp.com/'},
  { 'Date': new Date(2018, 0, 22), 'Title': 'First day of school', 'Link': 'C:\Users\jorda\Documents\Winter 2018\NSBE Website\index.html'},
              ];
var settings = {
                };
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
