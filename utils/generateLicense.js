// function to generate licences 
// MIT
const mitLicense = {
    label: 'MIT',
    badgeUrl: 'https://img.shields.io/github/license/Eugieno/my-readme-maker',
    notice: "../assets/license-notice/MIT.md"
}

// Apache 2.0
const apacheLicense = {
    label: 'Apache 2.0',
    badgeUrl: 'https://img.shields.io/badge/License-Apache%202.0-blue',
    notice: "../assets/license-notice/apache.md"
}




// GPL 3.0
const GPLLicense = {
    label: 'GPL 3.0',
    badgeUrl: 'https://img.shields.io/badge/License-GPL%203.0-red',
    notice: "`../assets/license-notice/GLP.md`"
}

// https://img.shields.io/badge/License-GPL%203.0-red

// BSD 3
const BSDLicense = {
    label: 'BSD 3',
    badgeUrl: 'https://img.shields.io/badge/License-BSD%203-yellow',
    notice: "../assets/license-notice/BSD.md"
}
// https://img.shields.io/badge/License-BSD%203-yellow


// module.exports is an object we use to store variables or methods
module.exports = {
    mitLicense,
    apacheLicense,
    GPLLicense,
    BSDLicense
  };




function generateLicense (typeOfLicense) {
    // 'MIT', 'Apache 2.0','GPL 3.0','BSD 3'

    if (typeOfLicense == "MIT") {
        return ['MIT-badge-URL', 'MIT-notice']
    } else if (typeOfLicense == "Apache 2.0") {
        return ['Apache-badge-URL','Apache-notice']
    } else if (typeOfLicense == "GPL 3.0") {
        return ['GPL-badge-URL', 'GPL-notice']
    } else {
        return ['BSD-badge-URL', BSD-notice]
    } 
}

generateLicense("MIT")