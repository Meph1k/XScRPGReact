export default function reducer(state={
    lastStep: 0,
    alignment: null,
    class: null,
    gender: null,
    race: null,
    abilitiesPoints: 0,
    skillPoints: 0,
    abilities: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
    },
    skills: {
        oneHandedSwords: 0,
        twoHandedSwords: 0,
        Scimitars: 0,
        Hammers: 0
    },
    name: null
}, action) {

    switch (action.type) {
        case "SAVE_LAST_STEP": {
            return {...state, lastStep: action.payload}
        }
        case "SAVE_GENDER": {
            return {...state, gender: action.payload}
        }
        case "SAVE_NAME": {
            return {...state, name: action.payload}
        }
        case "SAVE_RACE": {
            return {...state, race: action.payload}
        }
        case "SAVE_CLASS": {
            return {...state, class: action.payload}
        }
        case "SAVE_ALIGNMENT": {
            return {...state, alignment: action.payload}
        }
        case "SAVE_ABILITIES_POINTS": {
            return {...state, abilitiesPoints: action.payload}
        }
        case "SAVE_ABILITIES": {
            return {...state, abilities: action.payload}
        }
        case "SAVE_SKILLS": {
            return {...state, skills: action.payload}
        }
        case "SAVE_SKILL_POINTS": {
            return {...state, skillPoints: action.payload}
        }
    }

    return state;
}
