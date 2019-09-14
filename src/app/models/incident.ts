export class Incident {
    id: number;
    entity: string;
    entityList: any[];
    operator: string;
    operatorList: any[];
    value: string;
    operatorStatus: string;

    constructor(entity: string, entityList: any[], operator: string, operatorList: any[], value: string) {
        this.entity = entity;
        this.entityList = entityList;
        this.operator = operator;
        this.operatorList = operatorList;
        this.value = value;
    }
  }