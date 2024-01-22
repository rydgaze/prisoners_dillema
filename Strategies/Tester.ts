import { Strategy, StrategyData, Action } from "../Strategy"

export default class Tester implements Strategy {
    name() {
        return "Tester"
    }

    getAction(data: StrategyData):Action {
        // Be nice to start
        if (data.iteration === 0) {
            return Action.DEFECT
        }

        if (data.iteration === 1) {
            return Action.COOPERATE
        }

        let lastOpponentAction = data.opponentActions[data.opponentActions.length - 1]

        if (data.opponentActions[1] === Action.DEFECT) {
            if (data.iteration === 2) {
                return Action.COOPERATE
            } else {
                return lastOpponentAction
            }
        }  else {
            if (data.iteration % 3 === 0) {
                return Action.DEFECT
            }
        }  

        return Action.COOPERATE
    }
}