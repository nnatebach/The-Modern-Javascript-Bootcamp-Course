let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

// splice(startIdx, deleteCount, itemsToInsert)

// ===================
// INSERTING w/ SPLICE
// ===================

// ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']
animals.splice(1, 0, 'octopus')
// at index 1, delete 0 items and insert 'octopus'

// ===================
// DELETING w/ SPLICE
// ===================

// ['shark', 'octopus', 'bear', 'lizard', 'tortoise']
animals.splice(2, 2)
// at index 2, delete 2 items

// ===================
// REPLACING w/ SPLICE
// ===================

// ['shark', 'octopus', 'dolphin', 'rabbit', 'tortoise']
animals.splice(2, 2, 'dolphin', 'rabbit')
// at index 2, delete 2 items and replace them with 'dolphin' and 'rabbit'