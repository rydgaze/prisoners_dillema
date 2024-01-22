import { Strategy, StrategyData, Action } from "../Strategy"

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Random implements Strategy {
    name() {
        return "Random"
    }
    getAction(data: StrategyData): Action {
        let r = randomInteger(0, 1);        // Be nice to start
        if (r == 1) {
            return Action.COOPERATE
        }

        return Action.DEFECT
    }
}