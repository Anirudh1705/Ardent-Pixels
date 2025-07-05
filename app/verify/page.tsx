'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VerifyPage() {
  const [result, setResult] = useState<{ message: string; status: 'success' | 'error' | 'warn' | 'loading' | null }>({ message: '', status: null });

  const verifyCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const certID = formData.get('certID')?.toString().trim();

    if (!certID) {
      setResult({
        message: 'Please enter a certificate ID.',
        status: 'error'
      });
      return;
    }

    setResult({
      message: 'Checking certificate...',
      status: 'loading'
    });

    try {
      const response = await fetch(`https://sheetdb.io/api/v1/c3bs74z341pz2/search?Certificate%20ID=${encodeURIComponent(certID)}`);
      const data = await response.json();
      const cert = data.find((c: any) => c["Certificate ID"] === certID);

      if (cert) {
        if (cert.Status === "Verified") {
          setResult({
            message: `Certificate ID ${certID} for ${cert.Name} has been successfully verified and issued on ${cert["Issued Date"]}.`,
            status: 'success'
          });
        } else {
          setResult({
            message: `This certificate was found, but its status is "${cert.Status}" and is not considered valid.`,
            status: 'warn'
          });
        }
      } else {
        setResult({
          message: 'Certificate not found. Please check the ID and try again.',
          status: 'error'
        });
      }
    } catch (e) {
      setResult({
        message: 'Unable to verify at this time. Please try again later.',
        status: 'error'
      });
    }
  };

  const getStatusIcon = (status: string | null) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warn': return '⚠️';
      case 'loading': return '⏳';
      default: return '';
    }
  };

  const getStatusClass = (status: string | null) => {
    switch (status) {
      case 'success': return 'text-green-700';
      case 'error': return 'text-red-600';
      case 'warn': return 'text-orange-500';
      case 'loading': return 'text-blue-600';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-50 py-32 px-4 relative">
      <div suppressHydrationWarning className="absolute inset-0 bg-[url('/banner-bg.svg')] bg-no-repeat bg-cover bg-center opacity-100 pointer-events-none"></div>
      <div className="relative z-10 max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
        <Image
          src="/AP Logo.svg"
          alt="Ardent Pixels Logo"
          width={250}
          height={100}
          className="mx-auto mb-6 filter drop-shadow-lg"
          priority
        />
        
        <h2 className="text-2xl font-bold text-[#1d3557] tracking-wide mb-2">Verify Certificate</h2>
        <p className="text-gray-600 text-lg mb-6">Enter your certificate ID below to check its authenticity.</p>
        
        <form onSubmit={verifyCertificate} className="flex flex-col items-center gap-4 mb-6">
          <input
            type="text"
            name="certID"
            placeholder="e.g. AP-INT-2025-001"
            className="w-56 px-4 py-3 text-lg text-black border-2 border-[#b6c6e3] rounded-lg bg-[#f6f8fc] focus:border-blue-500 focus:bg-[#eaf1fb] focus:border-3 outline-none transition-all"
            autoComplete="off"
          />
          <button
            type="submit"
            className="w-56 px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5 hover:scale-105 transition-all"
          >
            Verify
          </button>
        </form>

        {result.status && (
          <div className={`mt-6 p-6 rounded-lg bg-[#f6f8fc] shadow-sm transition-all transform text-center ${getStatusClass(result.status)}`}>
            <span className="text-xl mr-2">{getStatusIcon(result.status)}</span>
            <span className="whitespace-pre-line">
              {result.status === 'success' ? (
                <>
                  Certificate ID <strong className="text-black">{result.message.split(' for ')[0].replace('Certificate ID ', '')}</strong> for{' '}
                  <strong className="text-black">{result.message.split(' for ')[1].split(' has been')[0]}</strong> has been{' '}
                  <strong>successfully verified</strong> and issued on{' '}
                  <strong className="text-black">{result.message.split('issued on ')[1].split('.\n\n')[0]}</strong>.
                  <br /><br />
                  This certificate is <strong>authentic</strong> and recognized by{' '}
                  <strong className="text-black">Ardent Pixels</strong>.
                </>
              ) : (
                result.message
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}