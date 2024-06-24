export class PostService {
  getUserPosts() {
    return [
      {title: "HTML Love!", body: "Today, im discussing html and the new frameworks that inter....", publishDate: "2014-06-05"}, 
      {title: "CSS Study Process", body: "Today, im discussing css! One of my fav...", publishDate: "2014-08-05"}, 
      {title: "JavaScript!", body: "Today, im discussing javascript! I currently use it for angular and....", publishDate: "2015-09-03"},  
      {title: "Angular! Not math related btw!", body: "Omg I so excited to finally begin discussing angularjs and all its main fea....", publishDate: "2018-03-04"},   
      {title: "REACT to this! ", body: "Oh man im in love with React right now.. Why you may ask? Well because i dont even know blah blah blah", publishDate: "2019-01-10"},   
    ];
  }
}

// Purpose of Service

// To catch the data from the API calls
// Acquire data then import data to components
// using services.