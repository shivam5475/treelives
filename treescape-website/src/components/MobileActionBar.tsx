'use client';

import { PHONE, getWhatsAppUrl } from '@/lib/constants';

export default function MobileActionBar() {
  const whatsappUrl = getWhatsAppUrl('Hello! I would like to know more about your furniture and interior design services.');
  // Google Maps link encoded for the address
  const directionsUrl = 'https://maps.google.com/?q=Treescape+Living+Sarjapur+Road+Anekal+Bengaluru';

  return (
    <>
      {/* Spacer to prevent content from hiding behind the fixed bar */}
      <div className="h-16 md:hidden w-full shrink-0" />
      
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/80 backdrop-blur-lg border-t border-gray-200 pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          
          <a 
            href={`tel:${PHONE}`}
            className="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-600 hover:text-green-700 active:text-green-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[10px] font-medium uppercase tracking-wide">Call</span>
          </a>

          <div className="w-px h-8 bg-gray-200" />

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-600 hover:text-green-600 active:text-green-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            <span className="text-[10px] font-medium uppercase tracking-wide">WhatsApp</span>
          </a>

          <div className="w-px h-8 bg-gray-200" />

          <a 
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-600 hover:text-blue-600 active:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[10px] font-medium uppercase tracking-wide">Directions</span>
          </a>
          
        </div>
      </div>
    </>
  );
}
