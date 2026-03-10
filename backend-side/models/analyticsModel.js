let projectViews = [
    { projectId: 1, views: 0 },
    { projectId: 2, views: 0 }
];

exports.getAll = () => projectViews;

exports.increment = (projectId) => {
    const project = projectViews.find(p => p.projectId == projectId);
    if (!project) return null;
    project.views += 1;
    return project;
};