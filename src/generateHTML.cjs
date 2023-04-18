const generateCard = require("./generateCard.cjs");

function generateHTML(team) {
  const cards = team.map((employee) => generateCard(employee)).join("");
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <style>
          body {
            background-color: #f7f7f7;
            font-family: "Arial", sans-serif;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
          }
          .card {
            background-color: #fff;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            width: 300px;
            height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
          }
          .card-header {
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
          }
          .card-body {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
          }
          .card-footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #eee;
            padding-top: 20px;
          }
          .card-footer a {
            margin-top: 10px;
            display: inline-block;
            background-color: #007bff;
            color: #fff;
            border-radius: 5px;
            padding: 5px 10px;
            text-decoration: none;
          }
          .card-footer a:hover {
            background-color: #0069d9;
          }
        </style>
      </head>
      <body>
        <header>
          <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">My Team</span>
          </nav>
        </header>
        <main>
          <div class="container">
            ${cards}
          </div>
        </main>
      </body>
    </html>
  `;
}

module.exports = generateHTML;