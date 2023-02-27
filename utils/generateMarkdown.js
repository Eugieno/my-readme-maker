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
  ${data.license[2]}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}
  
  ## Questions
  ${data.question}
`;
}

module.exports = generateMarkdown;


