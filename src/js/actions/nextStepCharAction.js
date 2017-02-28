export function saveLastStep(lastStepNumber) {
    return {
        type: 'SAVE_LAST_STEP',
        payload: lastStepNumber
    }
}
export function saveName(name) {
    return {
        type: 'SAVE_NAME',
        payload: name
    }
}
export function saveGender(gender) {
    return {
        type: 'SAVE_GENDER',
        payload: gender
    }
}
export function saveRace(race) {
    return {
        type: 'SAVE_RACE',
        payload: race
    }
}
export function saveClass(classOfACharacter) {
    return {
        type: 'SAVE_CLASS',
        payload: classOfACharacter
    }
}
export function saveAlignment(alignment) {
    return {
        type: 'SAVE_ALIGNMENT',
        payload: alignment
    }
}
export function saveAbilitiesPoints(abilitiesPoints) {
    return {
        type: 'SAVE_ABILITIES_POINTS',
        payload: abilitiesPoints
    }
}
export function saveSkillPoints(skillPoints) {
    return {
        type: 'SAVE_SKILL_POINTS',
        payload: skillPoints
    }
}
export function saveAbilities(abilities) {
    return {
        type: 'SAVE_ABILITIES',
        payload: abilities
    }
}
export function saveSkills(skills) {
    return {
        type: 'SAVE_SKILLS',
        payload: skills
    }
}
