# Kalaam-core
Interpretor for Kalaam, the programming language in Hindi

Summary

1. Kalaam interpretor
2. Only changes to be made here are backend ( interpreter )
3. This is essentially a development of npm package 
4. Testcases and testcases



## Contributions

- You can work on either Frontend, Backend or Documentation, whatever you think you can be best at with your current level of experience.
- This is a complete Kalaam.io application. The compiler will be made available as a standalone npm package called Kalaam-core.
- Fork the repo and create PR's on current dev branch. For now, it is #`v1.2.0-dev`#.
- Feel free to play with project. Creative ideas are most welcome.

`NOTE: MAKE SURE TO CREATE A PULL REQUEST ON 'v1.2.0-dev' and NOT DIRECTLY ON THE MASTER BRANCH.`


## Steps to follow 

1. Fork the repo
2. Create a issue. Add relevant label - mention following things 

a) What is the issue 
b) What problems is it causing 
c) how to recreate the issue 
d) which part of code is causing the issue

4. Create branch with the name of issue you want to fix. for e.g ```fixes whitespace issue while cleaning sourcecode```
4.1. Always pull from ```v2.0.0-dev`` before making changes to codebase.
5. Run necessary tests using ```npm run test```. ( check below on how to test for specific language). Add more test cases if you need to.
6. Make sure your code is not breaking anything.
7. Comment each line of your code. Write down why you are doing it instead of how you are doing it. Tell a story!
8. Once you are ready, create a PR on ```v2.0.0-dev``` branch. DO NOT CREATE PR'S DIRECTLY ON MASTER BRANCH.
9. Your code will be reviewed and if all good, PR will be merged.
10. Happy Contributing ⚙️


## Running Testcases


We have added seggregated testcases languages wise. If you want to test bengali, run
```npm run test tests/Hindi```
tests/Hindi is the folder where testcases are present for Hindi language.

Make sure to change ```ActiveLanguage = 'your-lang-to-test';``` at lini no 5 inn constants.js to the language you want to test.





## Debugging any issue in Kalaam:

Step 1: check cleanedSourcedata() output, here we take raw source code and split into tokens
Step 2: check tokens array, here we give meaning to tokens like type, value etc of token.
Step 3: check memory object, here we map values to variables in a given program
Step 4: Majority of the issues will be fixed till Step 3 itself, if not raise a red flag, we might have issue in Compile() (  function itself.
