import User from '../models/user.model.js'

export const create = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const list = async (req, res) => {
  try {
    const users = await User.find().select('name email created updated')
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const read = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('name email created updated')
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const update = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json({ message: 'User updated successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const remove = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json({ message: 'User deleted successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const removeAll = async (req, res) => {
  try {
    await User.deleteMany({})
    res.json({ message: 'All users deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    req.profile = user
    next()
  } catch (err) {
    return res.status(400).json({ error: 'Could not retrieve user' })
  }
}