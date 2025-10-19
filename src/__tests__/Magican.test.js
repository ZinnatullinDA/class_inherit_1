import { Magician } from '../Magician.js';

test('Правильно ли создаётся объект?', () => {
    const magic = new Magician('Gandalf')

    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Gandalf',
        type: 'Magician'
    }

    expect(magic).toEqual(correct)
})