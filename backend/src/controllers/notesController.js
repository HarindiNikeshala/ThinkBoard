export function getAllNotes (req, res) {
    res.status(200).send("You just fetch the notes.")
};

// export const getAllNotes = (req, res) => {
//     res.status(200).send("You just fetch the notes.")
// }

export function createNote (req, res) {
    res.status(201).json({ message: "Created Successfully" })
};

export function updateNote (req, res) {
    res.status(200).json({ message: "Note Updated Successfully" })
};

export function deleteNote (req, res) {
    res.status(200).json({ message: "Note deleted Successfully" })
};