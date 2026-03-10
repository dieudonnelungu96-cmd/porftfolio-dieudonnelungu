let projects = [
    { id: 1, name: "PAO Website", description: "Official website of Minister of Labour and Employment, DR Congo" },
    { id: 2, name: "Portfolio-dieudonnelungu", description: "A Full Stack portfolio" }
];
exports.getAll = () => projects;
exports.getById = (id) => projects.find(p => p.id == id);
exports.create = (data) => {
    const newProject = { id: projects.length + 1, ...data };
    projects.push(newProject);
    return newProject;
}