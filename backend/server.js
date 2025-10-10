  import express from 'express';

  const app = express();

  app.get("/api/notes", (req,res) => {
    // Send the notes
    res.status(200).send("Got 10 notes")
  });

  app.listen(5001, () => {
    console.log('Server is running on port 5001');
  });