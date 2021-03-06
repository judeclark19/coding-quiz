# Coding Quiz Time Trial
Try to answer the questions about JavaScript within the given time limit. Note: incorrect answers will take 10 seconds off the clock!

Live site: [judeclark19.github.io/codingquiz](https://judeclark19.github.io/coding-quiz/)

Repo: [github.com/judeclark19/coding-quiz](https://github.com/judeclark19/coding-quiz)

***

## Screenshots
#### Welcome screen
![Welcome screen](./Assets/screenshots/welcome_screen.png)

#### An unanswered quiz question with game timer counting down
![Question prompt](./Assets/screenshots/question_prompt.png)

#### After the user makes their guess, the answers change color to reveal which was correct
![Answered question](./Assets/screenshots/answered_question.png)

#### The Game Over modal
![Game over](./Assets/screenshots/game_over_modal.png)

#### Scoreboard showing some example scores
![Scoreboard](./Assets/screenshots/scoreboard.png)

***

## Sources
* All quiz questions were either provided by Trilogy Education, or copied/inspired by questions from the JavasScript course on [codecademy.com](https://www.codecademy.com/).

* YouTube tutorials I used for guidance:
   * [Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k)
   * [How To Create A Modal In JavaScript and CSS](https://www.youtube.com/watch?v=KjQ8uvAt9kQ)
   * [Hexidecimal color code for transparency](https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
   * [Simple Countdown Timer with JavaScript](https://www.youtube.com/watch?v=x7WJEmxNlEs)

***

## Answer Key
<details>
  <summary>Spoiler alert! Click to reveal question and answer key.</summary>

  1. Commonly used data types DO NOT include:
     * strings
     * booleans
     * __alerts (correct)__
     * numbers
  2. The condition in an if/else statement is enclosed within:
     * __parentheses (correct)__
     * curly brackets
     * quotes
     * square brackets
  3. Arrays in JavaScript can be used to store:
     * numbers and strings
     * other arrays
     * booleans
     * __all of the above (correct)__
  4. String values must be enclosed within ______ when being assigned to variables.
     * commas
     * __quotes (correct)__
     * curly brackets
     *  parentheses
  5. A very useful tool used during development and debugging for printing content to the debugger is:
     * JavaScript
     * terminal / bash
     * for loops
     * __console.log (correct)__
  6. What is the correct way to call the random method on the Math global object?
     * math.random()
     * __Math.random() (correct)__
     * Math(random)
     * random.Math()
  7. What is string interpolation?
     * Printing a string to the console.
     * Changing the value of a variable.
     * __Using template literals to embed variables into string. (correct)__
     * Joining multiple strings together using the + operator.
  8. What is the correct syntax for a single-line comment in JavaScript?
     *  "Put your comment in quotes"
     * console.log("Your comment");
     * __// Your comment (correct)__
     * !--Your comment-->
  9. Which of the following options correctly declares a variable that can be changed later in the code?
     * __let myName = 'Sam'; (correct)__
     * let myName: 'Sam';
     * myName = 'Sam';
     * const myName = 'Sam';
  10. Which of the following is not a way to declare a variable?
     * let
     * __temp (correct)__
     * const
     * var

</details>

***

## Known Issues
Scoreboard shows a negative number for time left if the user gets the last answer wrong with fewer than 10 seconds on the clock. I'd prefer it to display 0 instead.

*** 

## Feature wishlist (to maybe implement someday)
* Easy, Medium, and Hard modes
* Questions appear in a shuffled order
* Validation on whether the user enters their name for the scoreboard or leaves it blank

***

## License
MIT License

Copyright (c) 2020 Jude Clark

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.