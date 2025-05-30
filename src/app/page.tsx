"use client";

import Image from "next/image";
import { FaCar, FaMoneyBillWave, FaTools, FaStar, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Head from "next/head";
import CicilanCalculator from '../components/CicilanCalculator';
import { ShieldCheck, CheckCircle, Tag } from 'lucide-react';


export default function Home() {

  const mitsubishiCars = [
    {
      name: 'Mitsubishi Xforce Ultimate CVT 2025',
      image: '/xforce.jpg',
      price: 'Rp 410.000.000',
      tag: 'SUV Baru',
      passengers: 5,
      reviews: 35,
    },
    {
      name: 'Mitsubishi Pajero Sport Dakar 4x2 AT 2025',
      image: '/pajero.jpg',
      price: 'Rp 645.000.000',
      tag: 'SUV Premium',
      passengers: 7,
      reviews: 50,
    },
    {
      name: 'Mitsubishi Xpander Cross Premium 2025',
      image: '/xpander-cross.jpg',
      price: 'Rp 360.000.000',
      tag: 'Crossover',
      passengers: 7,
      reviews: 55,
    },
    {
      name: 'Mitsubishi Xpander Ultimate CVT 2025',
      image: '/xpander-ultimate.jpg',
      price: 'Rp 330.000.000',
      tag: 'Best Seller',
      passengers: 7,
      reviews: 70,
    },
    {
      name: 'Mitsubishi Xpander GLS MT 2025',
      image: '/xpander-gls.jpg',
      price: 'Rp 285.000.000',
      tag: 'MPV Entry',
      passengers: 7,
      reviews: 25,
    },
        {
      name: 'Mitsubishi Triton Exceed 4x4 MT 2025',
      image: '/triton.jpg',
      price: 'Rp 460.000.000',
      tag: 'Double Cabin',
      passengers: 5,
      reviews: 30,
    },
    {
      name: 'Mitsubishi L300 Euro4 2025',
      image: '/l300.jpg',
      price: 'Rp 250.000.000',
      tag: 'Niaga',
      passengers: 3,
      reviews: 20,
    },
  ];

  return (
    // Tambahkan di bagian head
    <>
      <Head>
        <title>Bosowa Dealership - Dealer Mobil Premium Terbaik di Indonesia</title>
        <meta name="description" content="Temukan mobil premium baru & bekas terbaik dengan pelayanan eksklusif dari Bosowa. Dapatkan promo menarik dan pembiayaan mudah." />
        <meta name="keywords" content="mobil premium, dealer mobil, bosowa, mobil baru, mobil bekas, toyota, honda, bmw" />
        <meta property="og:title" content="Bosowa Dealership - Dealer Mobil Premium Terbaik" />
        <meta property="og:description" content="Temukan mobil premium baru & bekas terbaik dengan pelayanan eksklusif dari Bosowa." />
        <meta property="og:image" content="https://bosowa.com/og-image.jpg" />
      </Head><div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center flex items-center justify-center pt-16" style={{ backgroundImage: "url('/car-banner.jpg')" }}>
          <div className="absolute inset-0 bg-gray-100"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 animate-fadeIn">
              Mobil Premium <span className="text-primary-500">Terbaik</span> di Indonesia
            </h1>
            <p className="text-xl sm:text-2xl text-black mb-8 max-w-3xl mx-auto">
              Dapatkan pengalaman kepemilikan mobil premium dengan layanan eksklusif dari Bosowa. Cicilan menarik dan after-sales terbaik.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#inventory"
                className="bg-primary-500 hover:bg-primary-600 text-black px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Lihat Stok Mobil
              </a>
              <a
                href="#hitung-cicilan"
                className="bg-white border-2 border-black hover:bg-white text-black px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Simulasi Kredit
              </a>
            </div>
          </div>
        </section>

        {/* Keunggulan Bosowa */}
        <section className="py-16 bg-white dark:bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
                Mengapa Memilih <span className="text-primary-500">Bosowa</span>?
              </h2>
              <p className="text-lg text-black max-w-2xl mx-auto">
                Keunggulan yang menjadikan Bosowa pilihan utama pelanggan Mitsubishi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Keunggulan 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-primary-500 mb-4 flex justify-center">
                  <ShieldCheck className="w-10 h-10 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center">Dealer Resmi & Terpercaya</h3>
                <p className="text-gray-600 text-center">
                  Bosowa adalah dealer resmi Mitsubishi dengan layanan sales, servis, dan sparepart terlengkap.
                </p>
              </div>

              {/* Keunggulan 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-primary-500 mb-4 flex justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center">Garansi & Purna Jual Terbaik</h3>
                <p className="text-gray-600 text-center">
                  Garansi kendaraan resmi dan dukungan purna jual luas dari jaringan Mitsubishi di seluruh Indonesia.
                </p>
              </div>

              {/* Keunggulan 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-primary-500 mb-4 flex justify-center">
                  <Tag className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center">Harga & Promo Kompetitif</h3>
                <p className="text-gray-600 text-center">
                  Penawaran harga terbaik, DP ringan, promo menarik, serta dukungan leasing terpercaya.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Section Layanan Mitsubishi Berlian Motor */}
        <section id="layanan" className="py-16 bg-white dark:bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
                Layanan <span className="text-primary-500">Kami</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Solusi lengkap untuk kebutuhan kendaraan Anda, hanya di Mitsubishi Berlian Motor
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Layanan 1 */}
              <div className="bg-white dark:bg-white shadow-lg rounded-xl p-8 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaCar className="text-red-700 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-black">Penjualan Mobil Resmi</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Tersedia pilihan lengkap mobil Mitsubishi terbaru: Xforce, Xpander, Pajero, dan lainnya.
                </p>
              </div>

              {/* Layanan 2 */}
              <div className="bg-white dark:bg-white shadow-lg rounded-xl p-8 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaMoneyBillWave className="text-red-700 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-black">Pembiayaan & Kredit Mudah</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Dapatkan skema cicilan ringan dengan DP fleksibel melalui leasing terpercaya seperti Dipo, Maybank, MTF, dll.
                </p>
              </div>

              {/* Layanan 3 */}
              <div className="bg-white dark:bg-white shadow-lg rounded-xl p-8 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaTools className="text-red-700 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-black">Servis & Suku Cadang Asli</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Dikerjakan oleh teknisi bersertifikat Mitsubishi dengan jaminan suku cadang asli dan booking service mudah.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Inventory Section */}
        <section id="inventory" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
                Mobil <span className="text-primary-500">Mitsubishi</span> 2025
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Temukan berbagai pilihan mobil Mitsubishi, dari model unggulan hingga ekonomis
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="flex space-x-6 min-w-max pb-4">
                {mitsubishiCars.map((car, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={car.image}
                        alt={car.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {car.tag}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-black">{car.name}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-500">Harga Mulai</span>
                        <span className="text-lg font-bold text-black">{car.price}</span>
                      </div>
                      <div className="text-gray-500 mb-2">
                        Kapasitas: {car.passengers} Penumpang
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600">({car.reviews} Review)</span>
                      </div>
                      <button className="w-full bg-primary-500 hover:bg-primary-600 text-black py-2 rounded-lg font-medium transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-block border-2 border-black text-black hover:bg-primary-500 hover:text-black px-8 py-3 rounded-full text-lg font-semibold transition-all"
              >
                Lihat Semua Mobil
              </a>
            </div>
          </div>
        </section>

        {/* Kalkulator Cicilan */}
        <CicilanCalculator />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-primary-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Testimoni <span className="text-white">Klien Kami</span></h2>
              <p className="text-lg max-w-2xl mx-auto">
                Dengarkan apa kata pelanggan tentang pengalaman mereka bersama Bosowa
              </p>
            </div>

            {/* Scroll container dengan scroll snap */}
            <div
              className="flex overflow-x-auto space-x-6 px-2 pb-6 scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-primary-700"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {[ // Data testimonial
                {
                  quote:
                    "Tim Bosowa sangat profesional dan ramah. Pengalaman beli mobil saya benar-benar luar biasa!",
                  name: "Michael Johnson",
                  title: "CEO, Tech Innovations",
                  image: "/client1.jpg",
                },
                {
                  quote:
                    "Dari proses kredit hingga pengiriman mobil, semua ditangani cepat dan transparan. Highly recommended!",
                  name: "Sarah Williams",
                  title: "Director, Global Finance",
                  image: "/client2.jpg",
                },
                {
                  quote:
                    "Bosowa punya pilihan mobil lengkap, dan pelayanannya bintang lima. Saya pasti kembali lagi.",
                  name: "John Doe",
                  title: "Entrepreneur",
                  image: "/client3.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-80 bg-white text-gray-900 p-8 rounded-xl shadow-lg scroll-snap-align-start"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="italic mb-6">&quot;{item.quote}&quot;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src={item.image} alt={item.name} width={48} height={48} />
                    </div>
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Proses Pembelian Section - Modern Design */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                Proses Pembelian <span className="text-primary-500">Super Mudah</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Hanya 4 langkah sederhana untuk memiliki mobil impian Anda dengan pengalaman eksklusif
              </p>
            </div>

            <div className="relative">
              {/* Timeline Connector */}
              <div className="hidden md:block absolute top-16 left-1/2 h-1 w-3/4 bg-primary-500 bg-opacity-20 transform -translate-x-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
                {/* Step 1 */}
                <div className="group relative z-10">
                  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Konsultasi Eksklusif</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Diskusikan kebutuhan mobil Anda dengan konsultan profesional kami via WhatsApp, telepon, atau langsung di showroom
                    </p>
                    <div className="mt-4">
                      <a 
                        href="https://wa.me/6282343057060" 
                        className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mulai Konsultasi
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group relative z-10">
                  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Test Drive Premium</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Jadwalkan test drive kapan saja dengan mobil pilihan Anda, baik di showroom atau lokasi yang Anda tentukan
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group relative z-10">
                  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Pembiayaan Fleksibel</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Pilih dari berbagai skema pembiayaan terbaik dengan bunga kompetitif dari partner leasing terpercaya kami
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="group relative z-10">
                  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Penyerahan Eksklusif</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Terima mobil baru Anda dengan proses serah terima eksklusif termasuk briefing lengkap dan souvenir premium
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <a
                href="https://wa.me/6282343057060"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white text-lg font-bold rounded-full shadow-lg transition-all transform hover:scale-105"
              >
                Mulai Proses Sekarang
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
                * Proses cepat dengan approval kredit dalam 1-2 hari kerja
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section - Modern WhatsApp Integrated */}
        <section id="contact" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
                Hubungi <span className="text-primary-500">Kami</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tim profesional kami siap membantu kebutuhan mobil premium Anda
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Contact Card - Modern Design */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                    <FaPhoneAlt className="text-primary-500 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Layanan Pelanggan</h3>
                </div>

                <div className="space-y-6">
                  {/* WhatsApp Button - Primary CTA */}
                  <a 
                    href="https://wa.me/6282343057060" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat via WhatsApp
                  </a>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                        <FaPhoneAlt className="text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white">Telepon</h4>
                        <a href="tel:+622112345678" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                          +62 21 1234 5678
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                        <FaMapMarkerAlt className="text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white">Alamat</h4>
                        <p className="text-gray-600 dark:text-gray-300">Bosowa Tower, Jl. Sudirman Kav. 1</p>
                        <p className="text-gray-600 dark:text-gray-300">Jakarta Selatan, Indonesia 12920</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                        <FaEnvelope className="text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white">Email</h4>
                        <a href="mailto:info@bosowadealership.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                          info@bosowadealership.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Modern Design */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Kirim Pesan Langsung</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nama" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Nama Lengkap
                      </label>
                      <input 
                        type="text" 
                        id="nama" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white" 
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Alamat Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white" 
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subjek" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Subjek
                    </label>
                    <input 
                      type="text" 
                      id="subjek" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white" 
                      placeholder="Subjek pesan"
                    />
                  </div>

                  <div>
                    <label htmlFor="pesan" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Pesan Anda
                    </label>
                    <textarea 
                      id="pesan" 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white" 
                      placeholder="Tulis pesan Anda disini..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      type="submit" 
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-bold transition-colors"
                    >
                      Kirim Pesan
                    </button>
                    <a 
                      href="https://wa.me/6282343057060" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white py-3 px-6 rounded-lg font-bold transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image src="/bosowa-logo-white.png" alt="Bosowa Logo" width={140} height={50} />
                <p className="mt-4 text-gray-400">
                  Premium automotive solutions with exceptional service since 2010.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#inventory" className="text-gray-400 hover:text-white transition-colors">Inventory</a></li>
                  <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Vehicles</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pre-Owned Vehicles</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Financing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parts & Accessories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="bg-gray-700 hover:bg-primary-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 hover:bg-primary-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 hover:bg-primary-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
                <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
                <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
                <form className="flex">
                  <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-900" />
                  <button type="submit" className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg font-medium transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Bosowa Dealership. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div></>
  );
}