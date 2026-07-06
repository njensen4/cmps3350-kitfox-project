# Final Product Package

## Kit Fox Finder

## Problem Statement
The applications intention is to give people a place to share their sightings of the local kit foxes that can be found at the CSUB campus.

## Target Users
Target users would be students, staff, faculty, etc. who are interested in the wildlife on campus and would want to share their experiences specifically with kit foxes.

## Final Implemented Features
A home page with navigation to the other pages, a way to submit sightings along with who, where, and when they were sighted and posted, a sightings page showing all the sightings that have been posted currently along with where the kit fox was sighted, when it was sighted, and who saw it.

## Known Limitations
Currently there is no way for the user to edit or remove a submission, there is also no way for a user to upload a picture they took of the kit fox.

## Tech Stack
Frontend: React and Vite  
Backend: Node.js and Express  
Database: MySQL  
Server: Nginx on bender.cs.csubak.edu  
Process manager: PM2  
Version control: GitHub  

## Production URLs

Frontend URL: https://bender.cs.csubak.edu/team-3-s26

Backend API URL: https://bender.cs.csubak.edu/moreno

## API Routes
GET /heatlh  
GET /sightings  
POST /sightings  
GET /sightings/:id  

## Database Summary
Main table: sightings

Important vectors include:
- ID
- Observer_name
- Sighting_date
- Location_name
- Health_status
- Notes

## Requirements Trace Table

| Planned Feature or User Story | Status | Evidence | Notes |
| --- | --- | --- | --- |
| Planned Feature  or User story | Yes | Lab F | Frontend form posts to backend API |
| User can view sighting records | Yes | Lab D/F | Navigate to sightings page |
| Sighting data persists to database | Yes | M3 Backend | Data will persist after refresh |

## How to Run or Redeploy
Git pull origin main

### Frontend
Cd frontend  
Npm install  
Npm runbuild  

### Backend
Cd ../backend  
Npm install  

### Check running processes
Npx pm2 list  

### Restarts the processes
Npx pm2 restart lab-i-moreno  

## Team Contribution Summary
Solomon: Added the original Map, and refactored it in Lab H as well as added the CORS deployment  
Moreno: Developed the base page view, and what our plan for the other pages to look like. Made some final polishing UI refactors to the about and sightings page.  
Nikolas: Polished frontend for Submit Sightings page, contribution to testing functions with jest, refactoring submit sightings page.  

## Final Reflection
The features that our final application has are, a public team-3-s26 URL, a home page with proper navigation to the other pages, a submit sighting page that is linked to our backend, a sightings page that will show the submissions that have been posted to the backend, and a simple about page to inform what the purpose of the application is. One thing that currently doesn’t work is that the home page has some example posts that were meant to send you to that post specifically but currently it just takes you to all the sightings. Another thing would be the map we had in our frontend skeleton which when we implemented the backend it got clobbered and we haven't gotten around to adding it back. I feel that at the start we had problems with deploying our work to the server and it properly showing up when we went to the URL, as we did more and more work we had learned to get used to the process and it made it a whole lot easier. The next feature I think we would add would be a way for the user to edit or remove a submission. Currently if we wanted to do so we would manually have to remove/edit it in the backend which is just a hassle. Given more time we definitely could implement a feature like that but as of now it just wasn’t a main priority. A thing that we all can take away from this project is how to communicate what you will be working on with team members in order to prevent merge conflicts as well as clearly communicating availability so we are able to plan accordingly. Us being able to keep our project organized and free of merge conflicts resulted in a much easier time when adding more features or working on individual portions of the project which is something we can easily take into our next team project.
