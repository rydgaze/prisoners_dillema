import { Action, Strategy, StrategyData } from "../Strategy"

export default class Defect implements Strategy {
    name() {
        return "Defect"
    }
    getAction(data: StrategyData):Action {
        return Action.DEFECT
    }
}