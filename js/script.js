
//Global Variables
const studentList = document.querySelector('.student-list');
const studentSearchBar = document.querySelector('.header');
const studentData = data;

//This function will create and insert/append the elements needed to display a "page" of nine students
function showPage (list, page)  {
   const startIndex = page * 9 - 9;
   const endIndex = page * 9;
   studentList.innerHTML = '';

  //For loop that loops through the array of students and creates an element for each student
  for(let i = 0; i < list.length; i ++ ) {
    if (i >= startIndex && i < endIndex) {
      
      let studentItem = `
        <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture" />
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">${list[i].registered.date}</span>
        </div>
        </li>
      `;

      studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
};
// This function creates and apppends the elements needed for the pagination buttons
function addPagination(list) {
  // This variable calculates the number of pages needed
  const numOfPages = Math.ceil(list.length/ 9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

   // For loop that loops over the number of pages needed
   for(let i = 1; i <= numOfPages; i++){
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
//Function that creates a search bar to filter through the students.
function studentSearch () {
    const searchBar = `
      <label for="search" class="student-search">
        <span>Search by name</span>
        <input id="search" placeholder="Search by name...">
        <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
      `;

      studentSearchBar.insertAdjacentHTML('beforeend', searchBar);
      const searchingStudents = document.querySelector('#search');
      studentSearchBar.addEventListener('keyup', (e) => {
        let matches = []
          for (const student of studentData) {
            const fullName = `${student.name.first} ${student.name.last}`.toLowerCase()
             if (fullName.includes(searchingStudents.value.toLowerCase() )) {
             matches.push(student)
           }
          }
          showPage(matches, 1);
          addPagination(matches);
          // if statement for showing "no results'
          if (matches.length === 0) {
            studentList.insertAdjacentHTML('beforeend', `<h1>No Results</h1>`)
          }
      });
    };
// Invoking functions
showPage(data, 1);
addPagination(data);
studentSearch(data);