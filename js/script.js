/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page)  {
   const startIndex = page * 9 - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector(".student-list");
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
showPage(data, 2);
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // create a variable to calculate the number of pages needed
   const totalPages = data.length || 9;
 
   // select the element with a class of `link-list` and assign it to a variable
    const linkList = document.querySelector('.link-list');
   // set the innerHTML property of the variable you just created to an empty string
    linkList.innerHTML = '';
   // loop over the number of pages needed
     // create the elements needed to display the pagination button
     // insert the above elements
 
   // give the first pagination button a class of "active"
 
   // create an event listener on the `link-list` element
     // if the click target is a button:
       // remove the "active" class from the previous button
       // add the active class to the clicked button
       // call the showPage function passing the `list` parameter and page to display as arguments
}

// Call functions
