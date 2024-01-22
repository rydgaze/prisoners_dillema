import { Action, Strategy, StrategyData } from "../Strategy"

export default class TitForTat implements Strategy {
    name() {
        return "TitForTat"
    }
    getAction(data: StrategyData):Action {
        // Be nice to start
        if (data.iteration === 0) {
            return Action.COOPERATE
        }
        // Tit for tat returns whatever the opponent did last time
        return data.opponentActions[data.opponentActions.length - 1]
    }
}
