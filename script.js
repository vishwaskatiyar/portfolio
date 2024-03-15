const skillButton = document.querySelectorAll('.skill_item');
const skillsDetail = document.querySelectorAll('.skills_right');
// console.log(skillButton);

const getService = (category) => {
    const detail = skillData.find(item => item.category === category);
    skillsDetail.forEach(detailElement => {
        const paragraphs = detail.description.split('\n');
        let descriptionHTML = '';
        paragraphs.forEach(paragraph => {
            descriptionHTML += `<p>${paragraph}</p>`;
        });
        detailElement.innerHTML = `
        <h3>${detail.title}</h3>
        ${descriptionHTML}
        `;
    });
}
const removeaActiveclass = () => {
    skillButton.forEach(item => {
        item.classList.remove(`active`);
    });
}

skillButton.forEach(item => {
    item.addEventListener('click', () => {
        removeaActiveclass();
        const skillClass = item.classList[1];
        getService(skillClass);
        item.classList.add(`active`);
    });
});

getService(`java`);
