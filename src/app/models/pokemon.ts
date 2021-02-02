export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public height: number,
        public order: number,
        public weigth: number,
        public sprites: Sprites,
        public types: Type[],
        public abilities: Ability[]
    ) {}
}

class Type {
    constructor(
        public slot: number,
        public type: TypeDefinition
    ){}
}

class TypeDefinition {
    constructor(
        public name: string,
        public url: string
    ) {}
}

class Ability {
    constructor(
        public slot: number,
        public is_hidden: boolean,
        public ability: AbilityDefinition
    ) {}
}

class AbilityDefinition {
    constructor(
        public name: string,
        public url: string
    ) {}
}

class Sprites {
    constructor(
        public back_default: string,
        public front_default: string
    ) {}
}