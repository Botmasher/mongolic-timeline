# Timeline Generator

A basic chronological timeline maker that visualizes stored content in connected nodes along a line.

## Motivation

This project started as a way to visualize chronological content for a Mongolic linguistics animation I worked on. While studying up on the language of the early days of the Mongol Empire, I ran into a variety of sources that layered many concepts and terms atop each other. That first timeline aimed to give an overview of Mongolian linguistic history, with a focus on the position of the language during the rise of the empire.

Along the way, my main efforts on the project focused on solving a more basic problem: getting chronological data to display in a custom web app timeline. That problem split the tool away from the source material that motivated it and focused my development on populating and laying out the timeline separately from considering its content.

Since the animation was completed, I went away from this project and left it in an early state. (Outline future TODOs and ideas if someone wants to take this further.)

## Getting Started

The current project is entirely a React frontend app. Here's one way to start tinkering:
- get a copy of this repo on your local machine
- use your shell to navigate to the project root directory
- run `npm start` or `yarn start`

## Contributing

If you'd like to pick up where I left off, feel free to open an issue or PR.

Here are ideas that surfaced during my days playing with this timeline:
- add wire connectors between any two timeline nodes
- add one-to-many connectors between a node and any others
- options for spacing out nodes along the timeline
- toggle between horizontal and vertical layout
- style for different resolutions and `@media` sizes
- accept user input to take in timeline entries, then generate timeline for user
