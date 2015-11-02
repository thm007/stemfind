if (Programs.find().count() === 0) {
  Programs.insert({
    title: 'Coded by Kids',
    url: 'http://codedbykids.com'
  });

  Programs.insert({
    title: 'Code for Philly',
    url: 'https://codeforphilly.org'
  });

  Programs.insert({
    title: 'Department of Making and Doing',
    url: 'http://dmdphilly.org/'
  });
}