interface Users {
  id: String
  name: String
  email: String
  createdAt: Date
  updatedAt: Date
}

interface Tasks {
  id: String
  name: String
  description: String
  completed: Boolean
  createdAt: Date
  updatedAt: Date
  userId: String
}

export { Users, Tasks }
