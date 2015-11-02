var programsData = [
  {
    title: 'Google',
    url: 'http://google.com'
  }, 
  {
    title: 'Twitter',
    url: 'http://twitter.com'
  }, 
  {
    title: 'Heroku',
    url: 'http://heroku.com'
  }
];
Template.programsList.helpers({
  programs: programsData
});