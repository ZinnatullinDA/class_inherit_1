export class Character {
    constructor(name, type) {
        const allowedTypes = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ];
        if (typeof name !== 'string' || name.length < 2 || name.length > 10 ) {
            throw new Error('Имя введено не правильно, оно должно быть строкой и иметь длину от 2 - 10 символов')
        }
        if (!allowedTypes.includes(type)) {
            throw new Error(`Неправильный тип: ${type}`)
        }
        this.name = name
        this.type = type
        this.health = 100
        this.level = 1
        this.attack = undefined
        this.defence = undefined
    }
}
