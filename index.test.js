const sceneryTest = ['X', 'O', '', '', 'O', 'X', '', '', '']


const test = (script) => {
  try {
    const scriptReturn = script(sceneryTest, "X")

    if (typeof scriptReturn !== 'number') return console.error("\x1b[31m%s\x1b[0m", "\x1b[31m%s\x1b[0m", 'ERROR: The return is not a number')
    if (scriptReturn > 8) return console.error("\x1b[31m%s\x1b[0m", 'ERROR: Number is too big')
    if (scriptReturn < 0) return console.error("\x1b[31m%s\x1b[0m", 'ERROR: Number is too small')
    if (scriptReturn % 1 !== 0) return console.error("\x1b[31m%s\x1b[0m", 'ERROR: The number is not an integer')

    console.log("\x1b[32m%s\x1b[0m", "passed")
  } catch {
    console.error("\x1b[31m%s\x1b[0m", 'The script broke')
  }
}

export default test