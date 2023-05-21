//Page Variables
const itemsPerPage = 10;
let currentPage = 1;

// Calculate the total number of users
var totalUsers = users.length;

// Update the totaProfiles element's text to the total number of users
var totalUsersElement = document.getElementById('totalProfiles');
totalUsersElement.textContent = totalUsers;

// Initially show the first page
showPage(1);

// Function to show contacts for a specific page
function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const profiles = users.slice(startIndex, endIndex);

  generateProfiles(profiles);
  currentPage = pageNumber;
  generatePagination();
}

// FUnction to generate the contact list in div with class of "contact-list"
function generateProfiles(profiles) {
  const contactList = document.querySelector('.contact-list');

  // Clear existing content
  contactList.innerHTML = '';

  // Generate HTML for each contact
  profiles.forEach((contact) => {
    const listItem = document.createElement('li');
    listItem.className = 'contact-item cf';

    // Create div element
    const contactDetails = document.createElement('div');
    contactDetails.className = 'contact-details';

    // Get thumbnail picture from data.js
    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = contact.picture.thumbnail;

    // Get name information from data.js
    const name = document.createElement('h3');
    name.textContent = contact.name.first + " " + contact.name.last;

    // Get email from data.js
    const email = document.createElement('span');
    email.className = 'email';
    email.textContent = contact.email;

    // Adds avatar, name and email to contactDetails div element
    contactDetails.appendChild(avatar);
    contactDetails.appendChild(name);
    contactDetails.appendChild(email);

    //Create div for date joined display
    const joinedDetails = document.createElement('div');
    joinedDetails.className = 'joined-details';

    // Get date joined from data.js
    const joinedDate = document.createElement('span');
    joinedDate.className = 'date';
    joinedDate.textContent = `Joined ${contact.registered.date}`;

    joinedDetails.appendChild(joinedDate);

    listItem.appendChild(contactDetails);
    listItem.appendChild(joinedDetails);

    contactList.appendChild(listItem);
  });
}

// Function to generate the pagination links in the div with class of "pagination"
function generatePagination() {
  const paginationContainer = document.querySelector('.pagination');

  // Clear existing content
  paginationContainer.innerHTML = '';

  // Calculate the number of pages
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Generate HTML for each pagination link
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.className = i === currentPage ? 'page active' : 'page';
    link.textContent = i;

    paginationContainer.appendChild(link);
  }

  // Add event listeners to the pagination links in the div with class of "page"
  const pageLinks = paginationContainer.querySelectorAll('.page');

  // Each click of pagination will generate a new page
  pageLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const pageNumber = parseInt(link.textContent);
      showPage(pageNumber);
    });
  });
}



