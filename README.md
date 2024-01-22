# prisoners_dillema
A simple JS based implementation of Gametheory - Prisoners Dillema for school project.  
More details can be seen in this video (https://www.youtube.com/watch?v=mScpHTIi-kM).   
This program is to implement the discussion in that video for a middleschool project.


# execution
Install node (to execute js) and tsc (convert ts to js)
```
    // install dependencies
    npm install 
    // convert ts to js and store in ./dist
    tsc 
    // execute
    node ./dist/gameorchestrator.js
```
# Adding new strategies
Simple to add by implementing "Strategy" interface defined in Strategy.ts  
The strategies are stored in ./Strategies folder.   
It is probably easier to copy something like TitForTat.ts to create an new one.  

Once the new strategy is created and stored in ./Strategies folder, add it to the "strategies" key in ./config/default.json  
