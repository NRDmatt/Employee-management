function generateCard(employee) {
  let extraInfo = "";
  if (employee.getRole() === "Engineer") {
    extraInfo = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
  } else if (employee.getRole() === "Intern") {
    extraInfo = `School: ${employee.getSchool()}`;
  } else {
    extraInfo = `Office number: ${employee.getOfficeNumber()}`;
  }

  return `
    <div class="card">
      <div class="card-header">
        <h2>${employee.getName()}</h2>
        <h3>${employee.getRole()}</h3>
      </div>
      <div class="card-body">
        <p>ID: ${employee.getId()}</p>
        <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
        <p>${extraInfo}</p>
      </div>
    </div>
  `;
}

module.exports = generateCard;