# Week # 4: Reflection

## Accomplishments:

1. Finished the Chat UI.
2. Rendered data from the session object to the Chat component.
3. Implemented sockets functionality so matched users can send/receive messages

## Challenges

1. When trying to delete documents from the database after a match, a time delay between the two users caused the objects to get deleted before both users found a match. I decided to transition to working on sockets to make sure both users are connected before deleting the objects.
2. Went through plenty of bugs and errors trying to get sockets to work. Initially I was broadcasting a message to all users in the app. However, I fixed that by using unique room ids.

## Goals for Next Week

1. Delete match objects after both users have successfully connected to the chat session. (Complete By: Tuesday)
2. Create a session object in the database that contains information regarding the match. (Complete By: Tuesday)
3. Attach the session object to users' active session field and auto-redirect them if they have an active chat session. (Complete By: Tuesday)
4. Add functionality for ending the chat session. (Complete By: Wednesday)
5. Notify users if someone disconnects from the chat room. (Complete By: Wednesday)
6. Create a UI for the Leave Feedback screen. (Complete By: Friday)

## Resources for Next Week

1. Will not require any resources for this week's goals.
