import prisma from '../../lib/prisma.js';
import { getPaginationParams, createPaginationInfo } from '../../lib/pagination.js';

export const submitCertificationService = async (userId, data) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor profile not found');

  return prisma.sustainabilityCert.create({
    data: {
      vendorId: vendor.id,
      certifyingAgency: data.certifyingAgency,
      certificationDate: new Date(data.certificationDate),
      documentUrl: data.documentUrl || null
    }
  });
};

export const getMyCertificationsService = async (userId) => {
  const vendor = await prisma.vendorProfile.findUnique({ where: { userId } });
  if (!vendor) throw new Error('Vendor profile not found');

  return prisma.sustainabilityCert.findMany({
    where: { vendorId: vendor.id },
    orderBy: { createdAt: 'desc' }
  });
};

export const getAllCertificationsService = async (query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = query.status ? { status: query.status } : {};

  const [certs, total] = await Promise.all([
    prisma.sustainabilityCert.findMany({
      where, skip, take: limit,
      include: { vendor: { select: { farmName: true, user: { select: { email: true } } } } },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.sustainabilityCert.count({ where })
  ]);

  return { certs, pagination: createPaginationInfo(page, limit, total) };
};

export const approveCertificationService = async (certId, status) => {
  const cert = await prisma.sustainabilityCert.findUnique({ where: { id: certId } });
  if (!cert) throw new Error('Certification not found');

  const updated = await prisma.sustainabilityCert.update({
    where: { id: certId },
    data: { status }
  });

  // If approved, also approve the vendor's certification status
  if (status === 'APPROVED') {
    await prisma.vendorProfile.update({
      where: { id: cert.vendorId },
      data: { certificationStatus: 'APPROVED' }
    });
  }

  return updated;
};
