export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public height: number,
        public order: number,
        public weight: number,
        public sprites: Sprites,
        public types: Type[],
        public abilities: Ability[],
        public moves: Move[],
        public items: Item[]
    ) {}
}

export class Move {
    constructor(public move: Definition, public version_group_details: LevelLearned[]) {}
}

export class Type {
    constructor(
        public slot: number,
        public type: Definition
    ){}
}

export class Ability {
    constructor(
        public slot: number,
        public is_hidden: boolean,
        public ability: Definition
    ) {}
}

export class Sprites {
    constructor(
        public back_default: string,
        public front_default: string
    ) {}
}

export class Definition {
    constructor(public name: string, public url: string) {}
}

export class LevelLearned {
    constructor(public level_learned_at: number, public move_learn_method: Definition, public version_group: Definition) {}
}

export class Item {
    constructor(public item: Definition, public version_details: VersionDetail[]) {}
}

export class VersionDetail {
    constructor(public rarity: number, public version: Definition) {}
}