import { generateResponse } from '../../lib/responseFormate.js';
import {
  submitCertificationService, getMyCertificationsService,
  getAllCertificationsService, approveCertificationService
} from './certification.service.js';

export const submitCertification = async (req, res, next) => {
  try {
    const data = await submitCertificationService(req.user.id, req.body);
    generateResponse(res, 201, true, 'Certification submitted', data);
  } catch (error) {
    if (error.message === 'Vendor profile not found') return generateResponse(res, 400, false, error.message, null);
    next(error);
  }
};

export const getMyCertifications = async (req, res, next) => {
  try {
    const data = await getMyCertificationsService(req.user.id);
    generateResponse(res, 200, true, 'Certifications fetched', data);
  } catch (error) { next(error); }
};

export const getAllCertifications = async (req, res, next) => {
  try {
    const data = await getAllCertificationsService(req.query);
    generateResponse(res, 200, true, 'All certifications fetched', data);
  } catch (error) { next(error); }
};

export const approveCertification = async (req, res, next) => {
  try {
    const { status } = req.body; // APPROVED or REJECTED
    const data = await approveCertificationService(req.params.id, status);
    generateResponse(res, 200, true, `Certification ${status.toLowerCase()}`, data);
  } catch (error) { next(error); }
};
