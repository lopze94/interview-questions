const solution = input => {
  //Convert data to an easier to read structure and sort it
  const edits = input
    .map(e => ({
      timestamp: e[0],
      action: e[1].toLowerCase(),
      params: e.slice(2).length > 0 ? e.slice(2) : null
    }))
    .sort((a, b) => a.timestamp - b.timestamp)

  //Initialize helper variables
  let textEditor = {
    state: [],
    redo: [],
    select: null,
    output: ''
  }

  //Execute edits for each action in the actions array
  for (let i = 0; i < edits.length; i++) {
    const edit = edits[i];
    textEditor = actions[edit.action](edit, textEditor)
  }

  return textEditor.output
}

const actions = {
  insert: (edit, textEditor) => {
    const original = textEditor.output
    textEditor.output += edit.params[0]
    textEditor.state.push({...edit, original, output: textEditor.output})
    return textEditor

  },
  delete: (edit, textEditor) => {
    const original = textEditor.output
    if (textEditor.select) {
      let {output, select} = textEditor
      output = output.substring(0,select.start) + output.substring(select.end, output.length)
      textEditor.output = output
      textEditor.state.push({...edit, params: textEditor.select, original, output: textEditor.output})
      textEditor.select = null
      return textEditor
    }

    textEditor.output = textEditor.output.substring(0, textEditor.output.length - 1)
    textEditor.state.push({...edit, original, output: textEditor.output})
    return textEditor
  },
  bold: (edit, textEditor) => {
    const original = textEditor.output

    if(textEditor.select){
      let {output, select} = textEditor
      output = 
        output.substring(0,select.start) + '*' +
        output.substring(select.start, select.end) + '*' +
        output.substring(select.end, output.length)

      textEditor.output = output
      textEditor.state.push({...edit, original, output: textEditor.output})
      return textEditor
    }

    const output = `*${textEditor.output}*`
    textEditor.output = output
    return textEditor
  },
  select: (edit, textEditor) => {
    const {params} = edit
    const {output} = textEditor

    if(params[0] < 1) params[0] = 0
    if(params[1] > output.length) params[1] = output.length

    textEditor.select = {
      start: params[0],
      end: params[1]
    }

    return textEditor
  },
  undo: (edit, textEditor) =>{
    const lastAction = textEditor.state.pop()

    if(!lastAction) return textEditor

    textEditor.redo.push(lastAction)
    textEditor.output = lastAction.original
    return textEditor
  },
  redo: (edit, textEditor) =>{
    const redoResult = textEditor.redo.pop()

    if(!redoResult) return textEditor

    textEditor.output = redoResult.output
    textEditor.state.push(redoResult)
    return textEditor

  }
}

const input = [
  ['0', 'INSERT', 'a'],
  ['1', 'INSERT', 'b'],
  ['7', 'REDO'],
  ['2', 'INSERT', 'c'],
  ['4', 'DELETE'],
  ['5', 'DELETE'],
  ['6', 'UNDO'],
  ['8', 'UNDO'],
  ['9', 'UNDO'],
  ['3', 'SELECT', 0, 2],
  ['11', 'BOLD']
]

console.log(solution(input))
