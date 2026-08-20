const songModel = require("../models/song.model")
const id3 = require("node-id3")
const storageService = require("../services/storage.service")

async function uploadSong(req, res) {
    const { mood } = req.body
    const songBuffer = req.file.buffer

    const tag = id3.read(songBuffer)

    const [songFile, posterFile] = await Promise.all([
        storageService.uploadFile({
            buffer: songBuffer,
            filename: tag.title + ".mp3",
            folder: "cohort-2/moodify/songs"
        }),
        storageService.uploadFile({
            buffer: tag.image.imageBuffer,
            filename: tag.title + ".jpeg",
            folder: "cohort-2/moodify/posters"
        })
    ])

    const song = await songModel.create({
        title: tag.title,
        url: songFile.url,
        posterFile: posterFile.url,
        mood
    })

    res.status(201).json({
        message: "song created sucessfully",
        song
    })
}

module.exports = {
    uploadSong
}