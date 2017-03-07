export const saveLastStep = lastStepNumber => ({
    type: 'SAVE_LAST_STEP',
    payload: lastStepNumber
});
export const saveName = name => ({
    type: 'SAVE_NAME',
    payload: name
});
export const saveGender = gender => ({
    type: 'SAVE_GENDER',
    payload: gender
});
export const saveRace = race => ({
    type: 'SAVE_RACE',
    payload: race
});
export const saveClass = classOfACharacter => ({
    type: 'SAVE_CLASS',
    payload: classOfACharacter
});
export const saveAlignment = alignment => ({
    type: 'SAVE_ALIGNMENT',
    payload: alignment
});
export const saveAbilitiesPoints = abilitiesPoints => ({
    type: 'SAVE_ABILITIES_POINTS',
    payload: abilitiesPoints
});
export const saveSkillPoints = skillPoints => ({
    type: 'SAVE_SKILL_POINTS',
    payload: skillPoints
});
export const saveAbilities = abilities => ({
    type: 'SAVE_ABILITIES',
    payload: abilities
});
export const saveSkills = skills => ({
    type: 'SAVE_SKILLS',
    payload: skills
});
