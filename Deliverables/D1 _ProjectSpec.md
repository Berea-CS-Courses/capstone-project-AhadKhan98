# Overview

This software will help developers find solutions to their problems in a matter of seconds. Gone are the days where you have to post your problem to an online forum and wait a few days to get a response back. The software will match users who need help with a certain topic, to more experienced developers in the field. The experience is quite similar to the Uber app where riders get matched to drivers instantaneously.

# Concept

Scope:

The scope of the project is creating a software that matches users who need help with certain programming topics such as Data Mining in Python to other developers with more experience in that field. The two matched users would be placed in a chat room where they can discuss the problem statement, share screenshots, audio/video files, and work out a solution. Once the problem has been solved, the helpee will be asked to leave feedback for the helper before they can ask for more help. This is to ensure that each helper gets a score that reflects their contributions.

Out of Scope:

What's considered out of scope for the project is the ability to store all of the problems with their respective solutions in a database that can be viewed by the public. The objective of this software is to provide immediate help to users. Therefore, this feature would mimic other online forums such as StackOverflow and falls outside of the scope for this project.

Major features:

- A sign up page where users can create a helper or a helpee account.
- Different user interfaces for helpers and helpees.
- Point system to track how credible a helper is.
- An individual chat room that can be accessed with a link for each matched pair.

Anticipated Features:

- The ability to add helpers to a user's friend list so that they can seek their help later on.
- An incentive system for helpers to provide accurate solutions.

# Requirements

Functional Requirements:

- Should keep track of state to auto render components that need updating.
- Should automatically log the user in if they already have an account.
- Should provide users with the option to switch between two modes, 'helper' and 'helpee'.
- Should provide a wide range of technologies to choose from.
- Should store all pending users that need to be matched in a queue.
- Should create a chat room that only the matched pair can access.
- Should have the functionality to share images, videos and audio files in chat rooms.
- Should keep track of all previous questions for the helpee.
- Should keep track of all previous solutions for the helper.
- Should store all the data in a database.

Non-Functional Requirements:

- Should run on all modern browsers that support JavaScript.
- Should have a responsive mobile design.
- Should ensure only authorized users can access certain pages.
- Should have a minimalistic and easy-to-use user interface.
