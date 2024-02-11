const entries = require('../entries')

test('check whether entries are being stored', () => {
    entry = {
        name: 'Anujeet Swain',
        email: 'anujeet@gmail.com',
        message: 'I would love to work with you',
    }
    entries.putEntry(entry)
    fetchedEntries = entries.getEntries()
    console.log(fetchedEntries)
    expect(fetchedEntries.pop()).toBe(entry)
})
