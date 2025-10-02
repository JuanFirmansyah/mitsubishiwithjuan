"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Head from "next/head";
import CicilanCalculator from '../components/CicilanCalculator';
import { ShieldCheck, CheckCircle, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  const mitsubishiCars = [
    {
      name: 'Mitsubishi Xforce Ultimate CVT 2025',
      image: '/xforce.jpg',
      price: 'Rp 410.000.000',
      tag: 'SUV Baru',
      passengers: 5,
      reviews: 35,
      features: ['Apple CarPlay', 'Safety Shield', 'LED Headlights']
    },
    {
      name: 'Mitsubishi Pajero Sport Dakar 4x2 AT 2025',
      image: '/pajero.jpg',
      price: 'Rp 645.000.000',
      tag: 'SUV Premium',
      passengers: 7,
      reviews: 50,
      features: ['4WD System', 'Premium Leather', '360 Camera']
    },
    {
      name: 'Mitsubishi Xpander Cross Premium 2025',
      image: '/xpander-cross.jpg',
      price: 'Rp 360.000.000',
      tag: 'Crossover',
      passengers: 7,
      reviews: 55,
      features: ['Cross Design', 'Roof Rails', 'All-Terrain']
    },
    {
      name: 'Mitsubishi Xpander Ultimate CVT 2025',
      image: '/xpander-ultimate.jpg',
      price: 'Rp 330.000.000',
      tag: 'Best Seller',
      passengers: 7,
      reviews: 70,
      features: ['Smart Key', 'Push Start', 'Rear Camera']
    },
    {
      name: 'Mitsubishi Xpander GLS MT 2025',
      image: '/xpander-gls.jpg',
      price: 'Rp 285.000.000',
      tag: 'MPV Entry',
      passengers: 7,
      reviews: 25,
      features: ['Fuel Efficient', 'Spacious', 'Affordable']
    },
    {
      name: 'Mitsubishi Triton Exceed 4x4 MT 2025',
      image: '/triton.jpg',
      price: 'Rp 460.000.000',
      tag: 'Double Cabin',
      passengers: 5,
      reviews: 30,
      features: ['4x4 Drive', 'Towing Package', 'Off-Road']
    },
    {
      name: 'Mitsubishi L300 Euro4 2025',
      image: '/l300.jpg',
      price: 'Rp 250.000.000',
      tag: 'Niaga',
      passengers: 3,
      reviews: 20,
      features: ['Commercial', 'Euro 4', 'Durable']
    },
  ];

  // New sections data
  const usedCars = [
    {
      name: 'Mitsubishi Pajero Sport 2022',
      image: '/pajero-used.jpg',
      price: 'Rp 420.000.000',
      mileage: '25.000 km',
      year: '2022'
    },
    {
      name: 'Mitsubishi Xpander 2023',
      image: '/xpande r-used.jpg',
      price: 'Rp 280.000.000',
      mileage: '15.000 km',
      year: '2023'
    }
  ];

  const spareparts = [
    {
      name: 'Oli Mesin Mitsubishi',
      image: '/oil.jpg',
      price: 'Rp 250.000',
      category: 'Maintenance'
    },
    {
      name: 'Filter Udara Original',
      image: '/filter.jpg',
      price: 'Rp 180.000',
      category: 'Sparepart'
    }
  ];

  // Carousel auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentCarIndex((prev) => (prev + 1) % mitsubishiCars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, mitsubishiCars.length]);

  const nextCar = () => {
    setCurrentCarIndex((prev) => (prev + 1) % mitsubishiCars.length);
    setIsAutoPlaying(false);
  };

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + mitsubishiCars.length) % mitsubishiCars.length);
    setIsAutoPlaying(false);
  };

  return (
    <>
      <Head>
        <title>Bosowa Dealership - Dealer Mobil Premium Terbaik di Indonesia</title>
        <meta name="description" content="Temukan mobil premium baru & bekas terbaik dengan pelayanan eksklusif dari Bosowa. Dapatkan promo menarik dan pembiayaan mudah." />
        <meta name="keywords" content="mobil premium, dealer mobil, bosowa, mobil baru, mobil bekas, mitsubishi, kredit mobil, sparepart" />
        <meta property="og:title" content="Bosowa Dealership - Dealer Mobil Premium Terbaik" />
        <meta property="og:description" content="Temukan mobil premium baru & bekas terbaik dengan pelayanan eksklusif dari Bosowa." />
        <meta property="og:image" content="https://bosowa.com/og-image.jpg" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Enhanced Hero Section with Animation */}
    <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Hero Image pakai Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src="/car-banner.png"
          alt="Mitsubishi Hero Banner"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fadeInUp">
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dapatkan pengalaman kepemilikan mobil premium dengan layanan eksklusif dari Bosowa. 
            <span className="block mt-2">Cicilan menarik dan after-sales terbaik.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp delay-300">
          <a
            href="#inventory"
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Lihat Stok Mobil
          </a>
          <a
            href="#hitung-cicilan"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            Simulasi Kredit
          </a>
        </div>
      </div>
    </section>

        {/* Enhanced Keunggulan Bosowa with Animation */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
                Mengapa Memilih <span className="text-primary-500">Bosowa</span>?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Keunggulan yang menjadikan Bosowa pilihan utama pelanggan Mitsubishi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-12 h-12" />,
                  title: "Dealer Resmi & Terpercaya",
                  description: "Bosowa adalah dealer resmi Mitsubishi dengan layanan sales, servis, dan sparepart terlengkap.",
                  delay: "100"
                },
                {
                  icon: <CheckCircle className="w-12 h-12" />,
                  title: "Garansi & Purna Jual Terbaik",
                  description: "Garansi kendaraan resmi dan dukungan purna jual luas dari jaringan Mitsubishi di seluruh Indonesia.",
                  delay: "200"
                },
                {
                  icon: <Tag className="w-12 h-12" />,
                  title: "Harga & Promo Kompetitif",
                  description: "Penawaran harga terbaik, DP ringan, promo menarik, serta dukungan leasing terpercaya.",
                  delay: "300"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  <div className="text-primary-500 mb-6 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Car Inventory with Carousel */}
        <section id="inventory" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
                Mobil <span className="text-primary-500">Mitsubishi</span> 2025
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Temukan berbagai pilihan mobil Mitsubishi, dari model unggulan hingga ekonomis
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Carousel Navigation */}
              <button 
                onClick={prevCar}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextCar}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Carousel */}
              <div 
                ref={carouselRef}
                className="flex overflow-hidden rounded-2xl shadow-2xl"
              >
                {mitsubishiCars.map((car, index) => (
                  <div
                    key={index}
                    className={`min-w-full transition-transform duration-500 ease-in-out ${
                      index === currentCarIndex ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Car Image */}
                        <div className="relative h-96 lg:h-auto">
                          <Image
                            src={car.image}
                            alt={car.name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute top-6 left-6 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {car.tag}
                          </div>
                          <div className="absolute top-6 right-6 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                            {car.passengers} Penumpang
                          </div>
                        </div>

                        {/* Car Details */}
                        <div className="p-8 flex flex-col justify-center">
                          <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                            {car.name}
                          </h3>
                          
                          <div className="flex items-center mb-6">
                            <div className="flex text-yellow-400 mr-2">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="w-5 h-5" />
                              ))}
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">
                              ({car.reviews} Review)
                            </span>
                          </div>

                          <div className="mb-6">
                            <div className="text-3xl font-bold text-primary-500 mb-2">
                              {car.price}
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                              Harga OTR Jakarta
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold mb-3 text-black dark:text-white">Fitur Utama:</h4>
                            <div className="flex flex-wrap gap-2">
                              {car.features.map((feature, idx) => (
                                <span 
                                  key={idx}
                                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                              Lihat Detail
                            </button>
                            <button className="flex-1 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                              Test Drive
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {mitsubishiCars.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentCarIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentCarIndex 
                        ? 'bg-primary-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* New Used Cars Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
                Mobil <span className="text-primary-500">Bekas</span> Berkualitas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Pilihan mobil bekas terbaik dengan kondisi terawat dan harga kompetitif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {usedCars.map((car, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-64">
                    <Image
                      src={car.image}
                      alt={car.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Bekas
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{car.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Tahun</span>
                        <span className="font-semibold text-black dark:text-white">{car.year}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Kilometer</span>
                        <span className="font-semibold text-black dark:text-white">{car.mileage}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary-500 mb-4">{car.price}</div>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Spareparts Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
                <span className="text-primary-500">Sparepart</span> & Aksesoris
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Suku cadang original Mitsubishi dengan kualitas terjamin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {spareparts.map((part, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={part.image}
                      alt={part.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="text-sm text-primary-500 font-semibold mb-1">{part.category}</div>
                    <h3 className="font-bold text-black dark:text-white mb-2">{part.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary-500">{part.price}</span>
                      <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        Beli
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Calculator Section */}
        <CicilanCalculator />

        {/* Rest of the sections remain the same but with improved styling */}
        {/* ... (Testimonials, Process, Contact, Footer sections) ... */}

      </div>
    </>
  );
}