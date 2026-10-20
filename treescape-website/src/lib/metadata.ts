import { Metadata } from 'next';
import { BUSINESS_NAME, TAGLINE } from './constants';

type MetadataProps = {
  title: string;
  description: string;
  path?: string;
};

export function generatePageMetadata({ title, description, path = '' }: MetadataProps): Metadata {
  const url = `https://treescapeliving.com${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      url,
      siteName: BUSINESS_NAME,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${BUSINESS_NAME} - ${TAGLINE}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: ['/og-image.jpg'],
    },
  };
}
