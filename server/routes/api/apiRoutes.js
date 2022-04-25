const router = require('express').Router();
const User = require('../../Models/User');
const Artwork = require('../../Models/Artwork');
const Artwork = require('../../Models/Artwork');

// create a new user
router.post('/users', async (req, res) => {
    try {
        const user = await User.find({ username: req.body.username, password: req.body.password });
        console.log({ user });
        if (user.length !== 0) {
            return res.status(400).send("User with the provided credentials already exist.");
        }
        await User.create({ username: req.body.username, password: req.body.password });
        res.status(201).send();
    } catch (err) {
        console.log(err);
        res.status(500).json("Something went wrong. Please try again");
    }
});

// get all users
router.get('/users', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

// authenticate a single user by their username and password 
router.post('/users/:username', async (req, res) => {
    try {
        const { password } = req.body;

        console.log({ password });
        const oneUser = await User.findOne({ username: req.params.username, password });
        console.log({ oneUser });
        if (oneUser) {
            res.status(200).json(oneUser);
        } else {
            res.status(500).json("Authentication failed");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



// update user by their id
router.put('/users/:_id', async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params._id }, { username: req.body.username, password: req.body.password });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a user by their id
router.delete('/users/:_id', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ _id: req.params._id });
        res.status(200).json(deletedUser);
    } catch(err) {
        res.status(500).json(err);
    }
});

// create a new artwork
router.create('/artwork', async (req,res) => {
    try {
        const Artwork = await Artwork.find({ artworkName: req.body.artSchema});
       console.log({ artworkName });
    if (artwwork.length !== 0) {
        return res.status(400).send("Artwork with this name already exists.");
    }

    await Artwork.create({ artworkName: req.bodyd.artworkName});
    res.status(201).send();
} catch (err) {
    console.log(err);
    res.status(500).json("Something went wrong. Please try again")
}
});

// delete an artwork by the name
router.delete('/artwork:_artworkName', async (req, res) => {
    try {
        const deleteArtwork = await Artwork.findOneAndDelete({ _artworkName: req.params._artworkName});
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all artwork
router.get('/artwork', async (req, res) => {
    try {
        const allArtwork = await Artwork.find();
        res.status(200).json(allArtwork);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update Artwork by name
router.put('/artwork/:_artworkName', async (req, res) => {
    try {
        const updatedArtwork = await Artwork.findOneAndUpdate({ _artworkName: req.params._artworkName }, { price: req.body.price, description: req.body.description, available: req.body.available });
        res.status(200).json(updatedArtwork);
    } catch (err) {
        res.status(500).json(err);
    }
});
