export class Action {
    static COOPERATE = "COOPERATE";
    static DEFECT = "DEFECT";
}

export class Result {
    leftStrategyScore: number;
    rightStrategyScore: number;
}

export class StrategyData {
    iteration: number;
    opponentActions: Action[];
    myActions:Action[];
}

export interface Strategy {
    name():string;
    getAction(data: StrategyData):Action;
}