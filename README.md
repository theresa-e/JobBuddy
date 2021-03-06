# JobBuddy
## Synopsis
JobBuddy allows users to create accounts, share job postings, organize study groups, and communicate in a real-time chatroom. Users are also able to favorite positions they're interested in and view them to their dashboard. JobBuddy is a solo project.

## Technologies Used
JavaScript, Angular, Express.js, MongoDB, Node.js, Socket.IO, Bulma.io, HTML5. 

## Features
#### Login and registration with validations.
![landing page gif](/gifs/landingpg.gif)

### 
#### Users are able to post/share jobs for others to see. They can also like/favorite select postings.
![jobs component](/gifs/jobs-component.gif)

#### Users are able to connect in a chatroom using web sockets. Previous messages are stored so users can catch-up on anything they missed. When a user logges out, they are removed from the active user list.
![jobs component](/gifs/discuss.gif)

#### Users are able to create new study groups and sign up as attendees for existing groups. 
![jobs component](/gifs/study-groups.gif)

## To Do List:
- Allow user to edit items (study groups and job postings) they have posted.
- Users will be able to edit their account details in their dashboard (add edit component).
- Study group form will show error messages from backend. 
- Refactor socket.io code
- Make fully mobile responsive.

## Resources:
Landing page illustration from the wonderful [undraw.co](https://undraw.co/).