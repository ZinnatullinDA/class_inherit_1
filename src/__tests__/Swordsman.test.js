import { Swordsman } from '../Swordsman.js';

test('Правильно ли создаётся объект?', () => {
    const swordsman = new Swordsman('Hero')

    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Hero',
        type: 'Swordsman'
    }

    expect(swordsman).toEqual(correct)
})
