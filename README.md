# scratch


1. What is the problem you’re solving?
(Frame this as if you’re writing it on your resume)
Current chat app has little purpose/organization -- very open-ended foundation, making it both fun and also difficult to use at times


2. What is the solution?
(Frame this as if you’re writing it on your resume
To reorganize the app such that posts can be upvoted and downvoted and a user’s history of likes/dislikes can be viewed. App itself will be organized into different channels. 


3. What is the project you’re iterating on?
Yack Yack Yack (Chat Room)


4. What is the MVP scope? (core features you’ll be adding to the scratch project you pick up)
-upvoting / downvoting feature
-user profile showing lifetime likes/dislikes
-websockets  /  live reloading [backend]
-post length limit / clear chat box upon post
-testing suite


5. What are the tough technical challenges involved with solving this problem?
-writing tests
-learning about websockets
-security/banning users (may need to grab access tokens or IP address)


6. What are the stretch goals?
-#1 stretch = organization of chat channels (by topic, location, or some other metric)
    -individual channels? Moderators for     
     channels? 
     -talking only to users near your location    
     [frontend and backend]
-Adding photos to a chat/post
-Adding emojis to chat options
-reporting a user (ban for bad behavior?)
-link FB profile (instills some sense of accountability) 
-filtering out profanity, addresses, or any other content we don’t want to be postable


7. What is the technology stack?
React/Redux
Node/Express
SQL database


8. Team Responsibility breakdown: Who’s working on which part?
Dave: Front-end(frontend aspects of user profile, contribute to testing suite)
Kushal: Front-end(upvote/downvote feature, contribute to testing suite)
Ryan: Backend(websockets/live reloading functionality, lifetime like/dislike storage in db, contribute to testing suite)
Stacy: Backend(websockets/live reloading functionality, contribute to testing suite)

