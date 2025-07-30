import Contact from '../models/contact.model.js'

export const create = async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    res.status(201).json(contact)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const list = async (req, res) => {
      console.log('list() controller hit')
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const read = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ error: 'Contact not found' })
    res.json(contact)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const update = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!contact) return res.status(404).json({ error: 'Contact not found' })
    res.json(contact)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const remove = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) return res.status(404).json({ error: 'Contact not found' })
    res.json({ message: 'Contact deleted successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const removeAll = async (req, res) => {
  try {
    await Contact.deleteMany({})
    res.json({ message: 'All contacts deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}