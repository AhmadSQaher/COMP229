import express from 'express';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

// Route imports
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import contactRoutes from './routes/contact.routes.js';
import projectRoutes from './routes/project.routes.js';
import qualificationsRoutes from './routes/qualifications.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationsRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test route is working!' });
});

// Error handler
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ': ' + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ': ' + err.message });
    console.error(err);
  }
});

export default app;