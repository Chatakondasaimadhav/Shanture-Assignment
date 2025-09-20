import express from 'express';
import {
  generateReport,
  getReport,
  getReportHistory,
} from '../controllers/reportController.js';

const router = express.Router();

// Generate a new report
router.post('/', generateReport);

// Get a report by date range
router.get('/', getReport);

// Get all historical reports
router.get('/history', getReportHistory);

export default router;
