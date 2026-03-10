let contact = [];

exports.create = (data) => {
    const newConctact = { id: contact.length + 1, ...data};
    contact.push(newConctact);
    return;
};

exports.getAll = () => contact;