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
            if (action.payload) {
                return {...state, abilities: action.payload}
            }
            return reRollAbilities(state);
        }
        case "SAVE_SKILLS": {
            if (action.payload) {
                return {...state, skills: action.payload}
            }
            return reRollSkills(state);
        }
        case "SAVE_SKILL_POINTS": {
            return {...state, skillPoints: action.payload}
        }
    }

    return state;
}

const reRollSkills = (state) => {
    for(let key in state.skills) {
        if(state.skills.hasOwnProperty(key)) {
            state.skills[key] = getRandomInt(0, 3);
        }
    }
    return {...state, skills: state.skills}
};

const reRollAbilities = (state) => {
    for (let key in state.abilities) {
        if (state.abilities.hasOwnProperty(key)) {
            state.abilities[key] = getRandomInt(9, 19);
        }
    }
    return {...state, abilities: state.abilities}
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
