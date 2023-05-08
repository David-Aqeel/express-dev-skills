const skills = [
    {id: 235152, skill: 'Fast', done: true},
    {id: 123442, skill: 'Efficient', done: true},
    {id: 123423, skill: 'Concise', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  
  function getAll() {
    return skills;
  }

  function getOne(id) {

	id = parseInt(id)
	return skills.find(skill => skill.id === id)
}