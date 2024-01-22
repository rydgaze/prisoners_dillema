import { Action, Strategy, StrategyData } from "../Strategy"

export default class Sneaky implements Strategy {
    name() {
        return "Sneaky"
    }
    getAction(data: StrategyData):Action {
        // Be nice to start
        if (data.iteration === 0) {
            return Action.COOPERATE
        }

        // Defect every 10th time
        if (data.iteration % 10 === 0) {
            return Action.DEFECT
        }
        // Behave like Tit for tat returns whatever the opponent did
        return data.opponentActions[data.opponentActions.length - 1]
    }
}