import { Strategy, StrategyData, Action } from "../Strategy"

export default class Friedman implements Strategy {
    name() {
        return "Friedman"
    }
    getAction(data: StrategyData):Action {
        // Be nice to start
        if (data.iteration === 0) {
            return Action.COOPERATE
        }

        let myLastAction = data.myActions[data.myActions.length - 1]
        let lastOpponentAction = data.opponentActions[data.opponentActions.length - 1]

        // If opponent defected, we start to defect 
        if (myLastAction === Action.COOPERATE && 
            lastOpponentAction === Action.DEFECT) {
                return Action.DEFECT
        }

        if (myLastAction === Action.DEFECT) {
            return Action.DEFECT
        }

        return Action.COOPERATE
    }
}