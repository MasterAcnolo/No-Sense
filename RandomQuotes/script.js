    function getRandomQuotes(){  // C'est cool de faire une fonction ça permet de rendre la page WEB Dynamique, on actualise avec le bouton en fait 

    
        const citation = quotes[Math.floor(Math.random() * quotes.length)];
        
    
        
        document.getElementById("quotesbox").innerHTML = `
        <p style="font-style: italic;">"${citation.quotes}"</p>
        `
        document.getElementById("authorbox").innerHTML = `
        <p style="text-align: right;">- ${citation.author}</p>
        `;

    }
const quotes = [
{ quotes: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
{ quotes: "Most good programmers do programming not because they expect to get paid, but because it is fun.", author: "Linus Torvalds" },
{ quotes: "One of my most productive days was throwing away 1,000 lines of code.", author: "Ken Thompson" },
{ quotes: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
{ quotes: "Beware of bugs in the above code; I have only proved it correct, not tried it.", author: "Donald Knuth" },
{ quotes: "The most dangerous phrase in the language is: We've always done it this way.", author: "Grace Hopper" },
{ quotes: "The best way to predict the future is to invent it.", author: "Alan Kay" },
{ quotes: "UNIX is basically a simple OS, but you have to be a genius to understand the simplicity.", author: "Dennis Ritchie" },
{ quotes: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan" },
{ quotes: "C makes it easy to shoot yourself in the foot.", author: "Bjarne Stroustrup" },
{ quotes: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
{ quotes: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
{ quotes: "Good programmers write code that humans can understand.", author: "Martin Fowler" },
{ quotes: "Never trust a computer you can’t throw out a window.", author: "Steve Wozniak" },
{ quotes: "Everybody should learn how to program… because it teaches you how to think.", author: "Steve Jobs" },
{ quotes: "Measuring progress by lines of code is like measuring aircraft by weight.", author: "Bill Gates" },
{ quotes: "If you're not progressing, you're regressing.", author: "Elon Musk" },
{ quotes: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
{ quotes: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan" },
{ quotes: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "Doug Linder" },
{ quotes: "Software testing proves the presence, not the absence of bugs.", author: "Edsger W. Dijkstra" },
{ quotes: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
{ quotes: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
{ quotes: "It’s not a bug – it’s an undocumented feature.", author: "Anonymous" },
{ quotes: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics.", author: "Norman Augustine" },
{ quotes: "The most powerful tool we have as programmers is our ability to keep learning.", author: "Margaret Hamilton" },
{ quotes: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
{ quotes: "The problem with software is that it is always too complicated to handle.", author: "Bjarne Stroustrup" },
{ quotes: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
{ quotes: "You’re not a great programmer if you can’t write clear code.", author: "Sandi Metz" },
{ quotes: "Programmers are constantly making the same mistakes, just at a higher level.", author: "Anonymous" },
{ quotes: "It’s not a bug; it’s an undocumented feature.", author: "Anonymous" },
{ quotes: "People always fear change. That’s why they only change when they have no choice.", author: "Bill Gates" },
{ quotes: "In programming, the hard part isn't solving problems, but deciding what problems to solve.", author: "Paul Graham" },
{ quotes: "When you write code, the most important thing is that you communicate clearly.", author: "Jeff Atwood" },
{ quotes: "Programs should be written in such a way that their behavior is obvious from reading them.", author: "Robert C. Martin" },
{ quotes: "A programming language is low-level when its programs require attention to the irrelevant.", author: "Alan Perlis" },
{ quotes: "The quality of a program is measured by how easily you can modify it.", author: "Robert C. Martin" },
{ quotes: "Good code is its own best documentation.", author: "Steve McConnell" },
{ quotes: "The greatest mistake you can make in life is to be continually fearing you will make one.", author: "Elbert Hubbard" },
{ quotes: "Good code is its own best documentation.", author: "Steve McConnell" },
{ quotes: "Programmers do not create bugs. They create code, and the bugs are created by users.", author: "Anonymous" },
{ quotes: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
{ quotes: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
{ quotes: "To iterate is human, to recurse divine.", author: "L. Peter Deutsch" },
{ quotes: "It’s not that we use technology, we live technology.", author: "Godfrey Reggio" },
{ quotes: "The only way to go fast, is to go well.", author: "Robert C. Martin" },
{ quotes: "The problem of concurrency is one of the most challenging ones in software.", author: "Bill Joy" },
{ quotes: "We need to stop optimizing for efficiency and start optimizing for effectiveness.", author: "Martin Fowler" },
{ quotes: "There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors.", author: "Martin Fowler" },
{ quotes: "The best way to learn programming is to write code, and then fix all the mistakes.", author: "Steve McConnell" },
{ quotes: "It’s hard to write a good program when you’re running away from one mistake after another.", author: "Robert C. Martin" },
{ quotes: "Computers are good at following instructions, but not at reading your mind.", author: "Donald Knuth" },
{ quotes: "The biggest difference between a good programmer and a bad one is not their technical skills, but their ability to communicate effectively.", author: "Martin Fowler" },
{ quotes: "Software is the best thing that can happen to hardware.", author: "William S. Burroughs" },
{ quotes: "There is always one more bug.", author: "Anonymous" },
{ quotes: "It’s not enough to write software. It has to be good software.", author: "Robert C. Martin" },
{ quotes: "Software development is a journey, not a destination.", author: "Anonymous" },
{ quotes: "Software engineers are not simply problem solvers, they are problem makers, thinkers, and creators.", author: "Anonymous" },
{ quotes: "Don’t write code that you don’t understand.", author: "Kent Beck" },
{ quotes: "There are two ways to write error-free programs; only the third one works.", author: "Alan Perlis" },
{ quotes: "Life is too short to write bad code.", author: "Anonymous" },
{ quotes: "Any programmer who has not encountered an unmanageable bug is either inexperienced or incredibly lucky.", author: "Mark Zuckerberg" },
{ quotes: "We’re all just a few good abstractions away from solving the problem.", author: "Eric S. Raymond" },
{ quotes: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
{ quotes: "Learning to program is like learning to play an instrument – it’s something you improve through practice.", author: "Anonymous" },
{ quotes: "Code should be as simple as possible, but no simpler.", author: "Albert Einstein" },
{ quotes: "If you don’t write good code, the customers will write it for you.", author: "Anonymous" },
{ quotes: "Programming is the art of thinking clearly.", author: "Robert C. Martin" },
{ quotes: "The function of software is to turn data into information.", author: "Anonymous" },
{ quotes: "Writing code is like writing a good book: the harder you work, the better the outcome.", author: "Anonymous" },
{ quotes: "A good developer is someone who can manage the complexity of a software system.", author: "Martin Fowler" },
{ quotes: "There's a simple rule: Don't write code that someone else could write.", author: "Robert C. Martin" },
{ quotes: "When your program is working, don’t touch it.", author: "Mark Zuckerberg" },
{ quotes: "If debugging is the process of removing bugs, then programming must be the process of putting them in.", author: "Edsger W. Dijkstra" },
{ quotes: "I’m not a great programmer, I’m just a great debugger.", author: "Anonymous" },
{ quotes: "When you stop learning, you stop growing.", author: "Anonymous" },
{quotes: "J'aime les Pommes", author: "Jacques Chirac"},
{quotes: "Get better i guess", author: "UNDEFINED"}

];


window.onload = function(){

    getRandomQuotes();
}