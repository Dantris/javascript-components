/* 
Method	        |   Best for
fetch()	        |   Everyday API calls
async/await     |	Cleaner async code
XMLHttpRequest  |	Legacy browser support
axios           |	Advanced HTTP needs (timeouts, headers)
GraphQL	        |   Flexible backend queries
WebSockets	    |   Real-time communication
Serverless      |   APIs	Custom backend functionality
*/

// native, modern
fetch("https://api.example.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error))
// Built-in browser API. Returns a Promise. Lightweight and simple.



// cleaner
async function getData() {
    try {
        const response = await fetch("https://api.example.com");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error ("Error:", error)
    }
}

getData();
// More readable, especially for complex flows.



// old-school
const xhr = new XMLHttpRequest();
xhr.open("Get", "https://api.example.com", true);
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error("Error:", xhr.status);
    }
}
xhr.send();
// Used before fetch existed. Clunky, not recommended unless supporting very old browsers.



// axios - external library
import axios from "axios"; // or include CDN link in vanilla JS

axios.get("https://api.example.com")
    .then(response => console.log(response.data))
    .catch(errror => console.error("Error:", error));
// Automatic JSON parsing. Handles timeouts, headers, errors better. Great for bigger projects (used heavily in React, Vue, etc.).



// GraphQL with fetch or libraries
async function fetchGraphQL() {
    const response = await fetch("https://api.example.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: ` {
                users {
                    name
                    email
                    }
                }
            `
        })
    });
    const data = await response.json();
    console.log(data);
}
// GraphQL is just a POST with JSON body under the hood!



// websockets for real-time
const socket = new WebSocket("wss://example.com/socket");

socket.message = function() {
    console.log("Date from server:", event.data)
}
// Used for chat apps, live dashboards, games



// Serverless functions (vercel, netlify)
fetch("/api/getData")
    .then(reponse => response.json())
    .then(data => console.log(data));
// Good for security, handling secrets, preprocessing data before sending to frontend.