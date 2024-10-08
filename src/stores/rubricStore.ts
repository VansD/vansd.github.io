import { makeAutoObservable } from "mobx"
import { Rubric } from "../interfaces/rubric";

class RubricStore {
    rubrics: Rubric[] = [];
    activeRubrics: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setRubrics = (rubrics: Rubric[]) => {
        this.rubrics = rubrics;
    }

    addActiveRubric = (rubricId: string) => {
        this.activeRubrics.push(rubricId);
    }

    removeActiveRubric = (rubricId: string) => {
        if (this.activeRubrics.length > 0)
            this.activeRubrics = this.activeRubrics.filter(rId => rubricId !== rId);
    }
}

export default new RubricStore;