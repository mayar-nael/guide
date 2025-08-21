// Definition of a function named searchCourses(). It will be called when the search button is pressed.
function searchCourses() {

  //It converts the text to lowercase to facilitate searching regardless of case.
  let input = document.getElementById('searchInput').value.toLowerCase(); 
  let courses = document.querySelectorAll('.course-card'); //It selects all elements that have class = course-card.
  let found = 0; //Define a counter and set its initial value to 0 for the number of courses that match the search.

  courses.forEach(course => {   //Repeat the examination process for each course.
    let title = course.getAttribute('data-title').toLowerCase();
    let desc = course.getAttribute('data-desc').toLowerCase();

    //check if the search text is present within the course.
    if (title.includes(input) || desc.includes(input)) {
      course.style.display = 'flex';   // displayed The course 
      found++; //Increases the number of matching results
    } else {
      //If the text does not exist Hides the course from the page
      course.style.display = 'none';
    }
  });

  //show the result of search
  document.getElementById('searchResultText').textContent =
    input === '' ? ''  //If the research text is empty, nothing is displayed 
      : `Results Number : ${found}`; //If there is text: it displays the number of matching courses.
}
