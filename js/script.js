/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//Global Variables
const studentList = document.querySelector('.student-list');
const studentSearchBar = document.querySelector('.header');
const studentData = data;

//This function will create and insert/append the elements needed to display a "page" of nine students
function showPage (list, page)  {

   const startIndex = page * 9 - 9;
   const endIndex = page * 9;
   studentList.innerHTML = '';

   for(let i = 0; i < list.length; i ++ ) {
      if (i >= startIndex && i < endIndex) {
          let studentItem = `<li class="student-item cf">
          <div class="student-details">
          <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">${list[i].registered.date}{</span>
        </div>
      </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
};

function addPagination(list) {
   // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length/ 9);
 
   // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('.link-list');
   // set the innerHTML property of the variable you just created to an empty string
    linkList.innerHTML = '';
   // loop over the number of pages needed
      for(let i = 1; i < numOfPages; i++){
        let button = `
        <li>
        <button type="button">${i}</button>
      </li>`;
        linkList.insertAdjacentHTML('beforeend', button);
        let buttonClass = document.querySelector('button');
        buttonClass.className = 'active';
        linkList.addEventListener('click', (e) => {
          if ( e.target.getAttribute('type') === 'button') {
             document.querySelector('.active').className = '';
             e.target.className = 'active';
             let text = e.target.textContent;
             showPage(data, text);
          }
         });
      }
     
}


// Call functions
showPage(data, 1);
addPagination(data);

//Function that creates a search bar to filter through the students.
function studentSearch () {
  const searchBar = `<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;
  studentSearchBar.insertAdjacentHTML('beforeend', studentSearchBar);
  studentSearchBar.addEventListner('keyUp', (e) => {
    console.log(e);

  });
};
studentSearch();


