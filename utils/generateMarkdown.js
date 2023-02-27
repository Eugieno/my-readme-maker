// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![${data.license[0]}](${data.license[1]}) 
  
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Table of Contents](#table-of-contents)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  Copyright &copy 2023 ${data.name}
  ${data.license[2]}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Feel free to contact me for additional questions and I will get back to you  return
  Email: (${data.email})[#]   return
  Github profile: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;


