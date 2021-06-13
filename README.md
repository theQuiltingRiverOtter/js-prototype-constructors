# js-prototype-constructors

MOTIVATION: 
This project was created to store personal prototype methods for built-in objects in javascript. I originally built these as a personal challenge. I wanted to add functionality to javascript that is similar to python. Particulary a count method for arrays that will return the total count for a given argument. I also included a title case method for strings that will return a string that is title cased similar to titles in books, movies, etc. It does not title a, an, the, or similiar words unless they begin or end the sentence/phrase.

DESIGN FEATURES: 
array.count(param1-required, param2); This method will return the amount of times that param1 occurs in an array. Default (without param2) will follow strict equality, while passing 'false' into param2 will count both number and string, as well as upper and lower case versions. I had a difficult time getting the upper and lower case matching working because I used the .toLowerCase() method, forgetting that it would try to apply it to numbers as well. I threw in a check for typeof to fix it. However, I  hope to clean this code up. 

string.title(); This method returns a string with each word capitalized except for articles, conjunctions, and most prepositions, unless they occur at the beginning or end of a sentence. I struggled to get this working with strings that are several sentences long. For some reason, the .split() method I used to put the string into an array would add a 'undefined' item when splitting it into separate sentences. I fixed it with a .pop() method, but still have no understanding of what is happening behind the code. I would like to better understand what is happening and fix the code to not need an arbitray .pop() method. I also struggled to get the first and last word capitalized even when they were articles. I ended up using a for...of loop with the [index, value] list.entries() to get the index out. From reading about it, this is not the most optimized way of doing this. I would like to figure out better code to optimize it.

FUTURE: 
I would like to optimize and clean up both codes to make them run faster and be more readable. I will edit as I learn the foundations better. 

I would also like to continue adding on methods to the built-in objects to practice building code logic, as well have a source for commonly used methods that are not built into javascript.
