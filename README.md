# Getting Ready - With Promises

## Assignment Overview
This assignment reinforces the use of promises by using a simple sequence for getting ready in the morning. 

Your task is as follows: 
1. Follow the instructions under "Getting Started" to clone this repository and set up a dev branch.
2. Starting in the `index.js` file, import the promises from the `promises.js` file. 
3. Write a line of code that invokes the first imported promise.
4. Use `.then()` to chain the other two promises in the appropriate order. 
_NOTE: Remember to pass the result of the promise as an argument into the next chained promise. Here's the pattern:_
```
myPromise1()
.then((result) => {
   return myPromise2(result);
	})
.then(//and so on)
```
5. Add another `.then()` to provide a function that console.logs the returned result from the last chained promise.
6. Add a `.catch()` to handle any reject scenarios and console.log the failure message.
7. Add a `.finally()` that console.logs the phrase, “See you tomorrow!”
8. Save code and view your browser output to confirm successful resolve for all promises. 
9. Access the Change one or more of the following variables to false: `isAfter6AM`, `haveSoap`, `haveClothes`
10. Save code and view your browser output to confirm successful handling of the reject scenario. 
11. Follow the instructions below for _Submitting Your Code via GitHub_.

Upon submittal, the instructor will do the following: 
- Review your code and make any comments on your pull request
- Merge the accepted code into the "main" branch of the remote repo on GitHub
- Close the pull request 

## Getting Started — 1x Time Repo Configuration

   *NOTE: To execute these steps, you can use the terminal window in VSCode, the standard terminal app (Mac) or command prompt (Windows), or a popular third-party terminal emulator (e.g., iTerm2 for Mac, PuTTy or PowerShell for Windows).*

1. Make sure you have Git installed on your local machine. You can check by typing this command in the terminal window:
    ```
    git status
    ```
2. If the git command is not recognized, then download and install Git for your respective operating system (Mac, Windows, etc.):
    [link to Git download page](https://git-scm.com/downloads)

3. Create a project dev folder called "GetReady".

    *NOTE: This is where the code project will be housed. If you're on a Mac, then you should create this folder within the 🔨 Developer folder. If you're on Windows, you might want to create your dev folder somewhere within your Documents directory. You can create this folder by using the File Explorer (Windows) or the Finder (Mac). Alternatively, you can create it from the terminal window (like a boss) as follows.*  
    - Run `pwd` to reveal the current folder path. *Move to the desired directory/folder within the terminal shell, as needed.* 
    - Run `mkdir GetReady`. *The folder is created.*
    - Run `cd GetReady`. *You are now in the new folder.* 

4. Clone the GitHub assignment repo into your new project dev folder:
    ```
    git clone --single-branch --branch main [assignment repo url] .
    ```
    *NOTE: Be certain to replace this — `[assignment repo URL]` — with your actual GitHub repo URL for this assignment, and **do not forget the trailing space and period**, which tells Git to use the current folder. For example:* 
    > `git clone --single-branch --branch main https://github.com/CS122J/get-ready-promises-John-Doe .`

5. Create a new branch called "dev-promises" and perform a check-out with the following one-line command:
    ```
    git checkout -b dev-promises
    ```
**Conclusion:** You are now ready to work in the "dev-promises" branch of your local repository. When you have finished making code changes and are ready to submit this assignment, then proceed to *Submitting Your Code via GitHub* below.

## Submitting Your Code via GitHub

1. Confirm that you're on the "dev-promises" branch. If you're not sure, then use the following commands to a) see what branch you're on, and b) switch to "dev-promises": 
    ```
    git branch
    git checkout dev-promises
    ```
2. Make sure any new files have been added to the local repo. Use `git add`... to add files/folders selectively, or use the global command (trailing dot):
   ```
   git add .
   ```
3. Commit any recent changes within your local repo — Do this *before* pushing your code:
   ```
   git commit -a -m "[your custom message]"
   ```
    *NOTE: Remember to replace this `[your custom message]` with your own message, such as, "Adding new code for get-ready-promises."*

4. Push your code to the "dev-promises" branch on the remote GitHub repository.

    *NOTE: If this is a first-time push, this action results in creation of the branch at the remote repo (GitHub) level; otherwise, this updates the existing "dev-promises" branch on the remote repo.*
    ```
    git push origin dev-promises
    ```
5. Log in at [https://github.com](https://github.com) and access this repo. 

    *NOTE: Your repo should appear in the left column when you log in. For more direct access, just follow the URL for this repo.* 
    
6. Perform the following steps to target your pull request: 
    - Click the "Pull requests" top menu link. *The Pull Requests panel appears.* 
    - Click the "New pull request" button. *The Compare Changes panel appears.*
    - Click the "compare" drop down-menu button. *A list of active branches appears.*
    - Click the "dev-promises" branch name. *GitHub automatically evaluates the selected branch against the main branch for any conflicts. If there are no conflicts, then a green "able to merge" message is displayed.*
    - Click the "Create pull request" button. *The "Open a pull request" input panel appears.*
7. Perform the following steps to finalize and submit your pull request:
    - Type a brief 1-line description for the request, such as, "Submitting code for get-ready-promises."
    - Use the "Write" textbox to leave any comments or questions about this exercise.
    - Click the "Submit" button.

**Conclusion:** You have completed the steps necessary to submit your code. Be sure to follow the steps for *Marking Assignment Complete on Canvas*.

## Marking Assignment Complete on Canvas
1. Go to Canvas and open this [assignment](https://masters.instructure.com/courses/15683/assignments/360572).
2. Paste the URL of the GitHub repository (either "main" or "dev-promises" branch is fine) into the Website URL field. 
3. Click the Submit Assignment button.
