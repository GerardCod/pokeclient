export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public height: number,
        public order: number,
        public weight: number,
        public sprites: Sprites,
        public types: Type[],
        public abilities: Ability[]
    ) {}
}

export class Type {
    constructor(
        public slot: number,
        public type: TypeDefinition
    ){}
}

export class TypeDefinition {
    constructor(
        public name: string,
        public url: string
    ) {}
}

export class Ability {
    constructor(
        public slot: number,
        public is_hidden: boolean,
        public ability: AbilityDefinition
    ) {}
}

export class AbilityDefinition {
    constructor(
        public name: string,
        public url: string
    ) {}
}

export class Sprites {
    constructor(
        public back_default: string,
        public front_default: string
    ) {}
}