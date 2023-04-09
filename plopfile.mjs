const plopConfig = (plop) => {
  plop.setGenerator('npc', {
    description: 'Generate a template for a new npc data file.',
    prompts: [
      {
        type: 'input',
        name: 'id',
        message: 'Npc ID',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/data/{{camelCase id}}.ts',
        templateFile: 'templates/npc.hbs',
      },
    ],
  })
}

export default plopConfig
