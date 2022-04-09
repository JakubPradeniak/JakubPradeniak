const skillDot = (activeP) => {
    const skillDotElement = document.createElement("span")
    skillDotElement.classList.add("skill-level-dot")
    if(activeP) skillDotElement.classList.add("skill-level-dot--active")
    return skillDotElement
}

const skillLevelContainers = [...document.getElementsByClassName("skill__level")]

skillLevelContainers.forEach(element => {
    const level = element.dataset.level
    const maxSkillLevel = 10
    for(let i = 0; i < maxSkillLevel; i++) {
        const child = skillDot(i < level)
        element.appendChild(child)
    }
});