import { Action, Strategy, StrategyData } from "../Strategy"

export default class Cooperate implements Strategy {
    name() {
        return "Cooperate"
    }
    getAction(data: StrategyData):Action {
        return Action.COOPERATE
    }
}