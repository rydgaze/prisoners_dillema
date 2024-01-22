export class Action {
    static COOPERATE = "COOPERATE";
    static DEFECT = "DEFECT";
}

export class Result {
    leftStrategyScore: number;
    rightStrategyScore: number;
}

// Data to send to getAction method in Strategy class
export class StrategyData {
    // Current iteration
    iteration: number; 
    // All historical opponent actions 
    opponentActions: Action[]; 
    // All my historical actions 
    myActions:Action[]; 
}

// New strategies must implement this and store the file in ./Strategies/ folder
// Add the new Strategy name to ./config/default.json under "strategies"
export interface Strategy {
    name():string;
    getAction(data: StrategyData):Action;
}
