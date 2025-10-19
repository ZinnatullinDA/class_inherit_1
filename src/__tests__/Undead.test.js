import { Undead } from '../Undead.js';

test('Правильно ли создаётся объект?', () => {
    const undead = new Undead('Skull')

    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Skull',
        type: 'Undead'
    }

    expect(undead).toEqual(correct)
})