"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaMoneyBillWave, FaPercentage, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

type LeasingOption = {
  id: string;
  name: string;
  logo: string;
  minTenor: number;
  maxTenor: number;
  tenorStep: number;
  minBunga: number;
  maxBunga: number;
  tenorType: 'monthly' | 'annual';
};

const CicilanCalculator = () => {
  // Loan parameters
  const [hargaMobil, setHargaMobil] = useState<number>(150000000);
  const [dpPersen, setDpPersen] = useState<number>(30);
  const [activeTab, setActiveTab] = useState<string>('maybank');
  const [showLeasingOptions, setShowLeasingOptions] = useState<boolean>(false);

  // Leasing options data
  const leasingOptions: LeasingOption[] = [
    {
      id: 'maybank',
      name: 'Maybank Finance',
      logo: '/logo-maybank.png',
      minTenor: 11,
      maxTenor: 59,
      tenorStep: 12,
      minBunga: 3.0,
      maxBunga: 10.0,
      tenorType: 'monthly'
    },
    {
      id: 'dipo',
      name: 'Dipo Finance',
      logo: '/logo-dipo.png',
      minTenor: 1,
      maxTenor: 5,
      tenorStep: 1,
      minBunga: 0,
      maxBunga: 10,
      tenorType: 'annual'
    },
    {
      id: 'mandiri',
      name: 'Mandiri Tunas Finance',
      logo: '/logo-mtf.jpg',
      minTenor: 12,
      maxTenor: 60,
      tenorStep: 12,
      minBunga: 0.0,
      maxBunga: 10.0,
      tenorType: 'monthly'
    }
  ];

  // Get current leasing option
  const currentLeasing = leasingOptions.find(option => option.id === activeTab) || leasingOptions[0];
  
  // Loan calculation state
  const [tenor, setTenor] = useState<number>(currentLeasing.minTenor);
  const [bunga, setBunga] = useState<number>(currentLeasing.minBunga);
  const [cicilan, setCicilan] = useState<number>(0);
  const [totalPembayaran, setTotalPembayaran] = useState<number>(0);
  const [dpAmount, setDpAmount] = useState<number>(0);

  // Format currency
  const formatRupiah = (amount: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Calculate loan
  useEffect(() => {
    // Calculate DP amount
    const dp = (hargaMobil * dpPersen) / 100;
    setDpAmount(dp);
    
    // Calculate loan principal
    const pokokPinjaman = hargaMobil - dp;
    
    // Convert annual rate to monthly if needed
    const effectiveBunga = currentLeasing.tenorType === 'annual' 
      ? bunga / 12 
      : bunga / 100;
    
    // Calculate monthly payment using annuity formula
    const monthlyRate = effectiveBunga / 12;
    const paymentCount = currentLeasing.tenorType === 'annual' ? tenor * 12 : tenor;
    
    const cicilanPerBulan = monthlyRate > 0
      ? (pokokPinjaman * monthlyRate * Math.pow(1 + monthlyRate, paymentCount)) / 
        (Math.pow(1 + monthlyRate, paymentCount) - 1)
      : pokokPinjaman / paymentCount;
    
    setCicilan(cicilanPerBulan);
    setTotalPembayaran(dp + (cicilanPerBulan * paymentCount));
  }, [hargaMobil, dpPersen, tenor, bunga, currentLeasing]);

  // Generate WhatsApp message
  const generateWhatsAppLink = () => {
    const tenorText = currentLeasing.tenorType === 'annual' 
      ? `${tenor} tahun (${tenor * 12} bulan)` 
      : `${tenor} bulan`;
    
    const pesan = `Halo, saya tertarik dengan simulasi cicilan mobil:

- Leasing: ${currentLeasing.name}
- Harga Mobil: ${formatRupiah(hargaMobil)}
- Uang Muka (${dpPersen}%): ${formatRupiah(dpAmount)}
- Pokok Pinjaman: ${formatRupiah(hargaMobil - dpAmount)}
- Tenor: ${tenorText}
- Bunga: ${bunga}% ${currentLeasing.tenorType === 'annual' ? 'per tahun' : 'per bulan'}
- Estimasi Cicilan per Bulan: ${formatRupiah(cicilan)}
- Total Pembayaran: ${formatRupiah(totalPembayaran)}

Mohon informasi lebih lanjut.`;

    const nomor = "6282343057060";
    return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  };

  // Handle leasing change
  const handleLeasingChange = (id: string) => {
    setActiveTab(id);
    const newLeasing = leasingOptions.find(option => option.id === id);
    if (newLeasing) {
      setTenor(newLeasing.minTenor);
      setBunga(newLeasing.minBunga);
    }
  };

  return (
    <section id="hitung-cicilan" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
            Hitung <span className="text-primary-500">Cicilan</span> Anda
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bandingkan pembiayaan dari berbagai leasing terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Kalkulator */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
            {/* Leasing Selection */}
            <div className="mb-6">
              <button 
                onClick={() => setShowLeasingOptions(!showLeasingOptions)}
                className="flex justify-between items-center w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <span className="font-medium">Pilih Leasing</span>
                {showLeasingOptions ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {showLeasingOptions && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {leasingOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleLeasingChange(option.id)}
                      className={`p-2 rounded-lg border transition-colors ${activeTab === option.id 
                        ? 'bg-primary-500 text-white border-primary-500' 
                        : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600'}`}
                    >
                      <div className="h-8 flex items-center justify-center">
                        {option.logo ? (
                          <Image
                            src={option.logo}
                            alt={option.name}
                            width={100} // atau sesuaikan sesuai logo
                            height={32}
                            className="h-full object-contain"
                          />
                        ) : (
                          <span className="text-xs">{option.name}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-8">
              <label className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                <FaMoneyBillWave className="mr-2 text-primary-500" />
                Harga Mobil
              </label>
              <div className="flex items-center mb-1">
                <input
                  type="range"
                  min="50000000"
                  max="1000000000"
                  step="1000000"
                  value={hargaMobil}
                  onChange={(e) => setHargaMobil(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Rp 50jt</span>
                <span>Rp 1M</span>
              </div>
              <input
                type="text"
                value={formatRupiah(hargaMobil)}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value) setHargaMobil(parseInt(value, 10));
                }}
                className="w-full mt-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
              />
            </div>

            <div className="mb-8">
              <label className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                <FaPercentage className="mr-2 text-primary-500" />
                Uang Muka (DP) - {dpPersen}%
              </label>
              <div className="flex items-center mb-1">
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={dpPersen}
                  onChange={(e) => setDpPersen(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>10%</span>
                <span>50%</span>
              </div>
              <input
                type="text"
                value={formatRupiah(dpAmount)}
                readOnly
                className="w-full mt-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              />
            </div>

            <div className="mb-8">
              <label className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                <FaCalendarAlt className="mr-2 text-primary-500" />
                Tenor - {currentLeasing.tenorType === 'annual' ? `${tenor} Tahun` : `${tenor} Bulan`}
              </label>
              <div className="flex items-center mb-1">
                <input
                  type="range"
                  min={currentLeasing.minTenor}
                  max={currentLeasing.maxTenor}
                  step={currentLeasing.tenorStep}
                  value={tenor}
                  onChange={(e) => setTenor(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>
                  {currentLeasing.tenorType === 'annual' 
                    ? `${currentLeasing.minTenor} Tahun` 
                    : `${currentLeasing.minTenor} Bulan`}
                </span>
                <span>
                  {currentLeasing.tenorType === 'annual' 
                    ? `${currentLeasing.maxTenor} Tahun` 
                    : `${currentLeasing.maxTenor} Bulan`}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                <FaPercentage className="mr-2 text-primary-500" />
                Suku Bunga - {bunga}% {currentLeasing.tenorType === 'annual' ? 'p.a.' : 'p.m.'}
              </label>
              <div className="flex items-center mb-1">
                <input
                  type="range"
                  min={currentLeasing.minBunga}
                  max={currentLeasing.maxBunga}
                  step="0.5"
                  value={bunga}
                  onChange={(e) => setBunga(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{currentLeasing.minBunga}%</span>
                <span>{currentLeasing.maxBunga}%</span>
              </div>
            </div>
          </div>

          {/* Hasil Kalkulasi */}
          <div className="bg-primary-500 text-white p-8 rounded-2xl shadow-xl transform transition-all hover:scale-[1.02]">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {currentLeasing.logo && (
                  <Image 
                    src={currentLeasing.logo}
                    alt={currentLeasing.name}
                    width={100}              // Sesuaikan ukuran yang kamu mau
                    height={32}
                    className="h-8 object-contain"
                  />
                )}
                <h3 className="text-2xl font-bold">{currentLeasing.name}</h3>
              </div>
              <p className="text-sm opacity-80">
                {currentLeasing.tenorType === 'annual' 
                  ? 'Perhitungan bunga per tahun' 
                  : 'Perhitungan bunga per bulan'}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-primary-400">
                <span className="font-medium">Harga Mobil</span>
                <span className="font-bold">{formatRupiah(hargaMobil)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary-400">
                <span className="font-medium">Uang Muka ({dpPersen}%)</span>
                <span className="font-bold">{formatRupiah(dpAmount)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary-400">
                <span className="font-medium">Pokok Pinjaman</span>
                <span className="font-bold">{formatRupiah(hargaMobil - dpAmount)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary-400">
                <span className="font-medium">Bunga ({bunga}% {currentLeasing.tenorType === 'annual' ? 'p.a.' : 'p.m.'})</span>
                <span className="font-bold">{formatRupiah(totalPembayaran - hargaMobil)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary-400">
                <span className="font-medium">Total Pembayaran</span>
                <span className="font-bold">{formatRupiah(totalPembayaran)}</span>
              </div>
              <div className="pt-4">
                <div className="text-center bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="text-sm mb-1">Perkiraan Cicilan Bulanan</p>
                  <p className="text-3xl font-extrabold">{formatRupiah(cicilan)}</p>
                  <p className="text-sm mt-1">
                    untuk {currentLeasing.tenorType === 'annual' 
                      ? `${tenor} Tahun (${tenor * 12} Bulan)` 
                      : `${tenor} Bulan`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            * Perhitungan ini adalah estimasi saja. Angka sebenarnya mungkin berbeda tergantung pada persetujuan kredit.
          </p>
        </div>
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg z-50 md:hidden"
        >
          Ajukan via WA
        </a>
      </div>
    </section>
  );
};

export default CicilanCalculator;