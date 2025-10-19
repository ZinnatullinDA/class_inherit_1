import { Zombie } from '../Zombie.js'

test('Правильно ли создаётся объект?', () => {
    const zomb = new Zombie('Rot')

    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Rot',
        type: 'Zombie'
    }

    expect(zomb).toEqual(correct)
})
