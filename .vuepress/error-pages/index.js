const yamlToJs = require('js-yaml')
const fs = require('fs')

/*
 * Convert YAML string to Js object
 * Throw a precise error on parsing fail.
 */
function sampleYamlToJs(content) {
  try {
    return yamlToJs.safeLoad(content)
  } catch (e) {
    throw new Error(`Error file could not be parsed in JSON
    ${e.message}

    ${e.stack}`)
  }
}

module.exports = {
  async additionalPages() {
    // const rp = require('request-promise')
    // const content = await rp('https://raw.githubusercontent.com/vuejs/vuepress/master/CHANGELOG.md')
    const errorYaml = fs.readFileSync(`${__dirname}/errors.yaml`, 'utf-8')
    const errors = sampleYamlToJs(errorYaml).errors
    console.log({ errors: JSON.stringify(errors) })
    const errorsPages = errors.map(err => {
      console.log(' test')
      return {
        path: `/errors/${err.code}`,
        content: `## ${err.code} \n ${err.description}`,
      }
    })
    console.log(`## MeiliSearch Errors \n ${errors.map(err => `* [${err.code}](/errors/${err.code})\n`)}`);

    errorsPages.push({
      path: '/errors',
      content: `## MeiliSearch Errors \n ${errors.map(err => `* [${err.code}](/errors/${err.code})\n`).join('')}`,
    })
    return errorsPages
  },
}
