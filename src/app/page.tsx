"use client";

import Image from "next/image";
import { FaCar, FaMoneyBillWave, FaTools, FaStar, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Head from "next/head";
import CicilanCalculator from '../components/CicilanCalculator';

export default function Home() {
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
                href="#contact"
                className="bg-white border-2 border-black hover:bg-white text-black px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </section>

        {/* Keunggulan Section */}
        <section className="py-16 bg-white dark:bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">Mengapa Memilih <span className="text-primary-500">Bosowa</span>?</h2>
              <p className="text-lg text-black dark:text-black max-w-2xl mx-auto">
                Keunggulan yang membuat kami berbeda dari dealer lainnya
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-white p-6 rounded-xl shadow-md">
                <div className="text-white text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-black">Authorized Dealer</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dealer resmi dengan jaminan keaslian sparepart dan layanan purna jual terstandar
                </p>
              </div>
              <div className="bg-white dark:bg-white p-6 rounded-xl shadow-md">
                <div className="text-primary-500 text-4xl mb-4">💯</div>
                <h3 className="text-xl font-bold mb-3 text-black">Garansi Terbaik</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Garansi komprehensif dengan cakupan luas dan masa berlaku lebih panjang
                </p>
              </div>
              <div className="bg-white dark:bg-white p-6 rounded-xl shadow-md">
                <div className="text-primary-500 text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3 text-black">Harga Kompetitif</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Harga terbaik dengan berbagai promo dan diskon eksklusif untuk pembeli
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white dark:bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">Our <span className="text-primary-500">Services</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive automotive solutions tailored to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white dark:bg-white shadow-lg rounded-xl p-8 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaCar className="text-red-700 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-black">Premium Vehicle Selection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Explore our curated collection of luxury and performance vehicles from top brands worldwide.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white dark:bg-white shadow-lg rounded-xl p-8 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaMoneyBillWave className="text-red-700 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-black">Flexible Financing</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Customized financial solutions with competitive rates and transparent terms.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white dark:bg-white shadow-lg rounded-xl p-8 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaTools className="text-red-700 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-black">Expert Maintenance</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Factory-trained technicians using genuine parts for optimal performance and longevity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section id="inventory" className="py-16 bg-gray-100 dark:bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">Featured <span className="text-primary-500">Inventory</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our latest premium vehicle arrivals
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vehicle 1 */}
              <div className="bg-white dark:bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64">
                  <Image src="/car1.jpg" alt="Luxury Sedan" layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New Arrival
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">2024 Luxury Sedan</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 dark:text-gray-400">Starting at</span>
                    <span className="text-lg font-bold text-black">$85,000</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">(24 Reviews)</span>
                  </div>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-black py-2 rounded-lg font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              {/* Vehicle 2 */}
              <div className="bg-white dark:bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64">
                  <Image src="/car2.jpg" alt="Performance SUV" layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">2024 Performance SUV</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 dark:text-gray-400">Starting at</span>
                    <span className="text-lg font-bold text-black">$92,500</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">(18 Reviews)</span>
                  </div>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-black py-2 rounded-lg font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              {/* Vehicle 3 */}
              <div className="bg-white dark:bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64">
                  <Image src="/car3.jpg" alt="Electric Vehicle" layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Eco Friendly
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">2024 Electric Vehicle</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 dark:text-gray-400">Starting at</span>
                    <span className="text-lg font-bold text-black">$78,900</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">(32 Reviews)</span>
                  </div>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-black py-2 rounded-lg font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-block border-2 border-black text-black hover:bg-primary-500 hover:text-black px-8 py-3 rounded-full text-lg font-semibold transition-all"
              >
                View Full Inventory
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client <span className="text-white">Testimonials</span></h2>
              <p className="text-lg max-w-2xl mx-auto">
                Hear what our valued customers say about their Bosowa experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="italic mb-6">
                  &quot;The team at Bosowa made my car buying experience exceptional. Their attention to detail and customer service is unmatched in the industry.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/client1.jpg" alt="Client" width={48} height={48} />
                  </div>
                  <div>
                    <p className="font-bold">Michael Johnson</p>
                    <p className="text-sm text-gray-600">CEO, Tech Innovations</p>
                  </div>
                </div>
              </div>
              <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="italic mb-6">
                  &quot;From financing to delivery, everything was handled professionally. I&apos;ve recommended Bosowa to all my colleagues looking for premium vehicles.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/client2.jpg" alt="Client" width={48} height={48} />
                  </div>
                  <div>
                    <p className="font-bold">Sarah Williams</p>
                    <p className="text-sm text-gray-600">Director, Global Finance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proses Pembelian Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proses Pembelian <span className="text-primary-500">Mudah</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hanya 4 langkah sederhana untuk memiliki mobil impian Anda
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-primary-500 text-xl font-bold">1</div>
                <h3 className="font-bold mb-2">Konsultasi</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Diskusikan kebutuhan mobil Anda dengan sales kami</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-primary-500 text-xl font-bold">2</div>
                <h3 className="font-bold mb-2">Test Drive</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Jadwalkan test drive untuk merasakan pengalaman berkendara</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-primary-500 text-xl font-bold">3</div>
                <h3 className="font-bold mb-2">Pembiayaan</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Pilih skema pembiayaan yang paling sesuai dengan kebutuhan</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-primary-500 text-xl font-bold">4</div>
                <h3 className="font-bold mb-2">Penyerahan Unit</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Terima mobil baru Anda dengan proses serah terima eksklusif</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">Contact <span className="text-primary-500">Us</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-600 max-w-2xl mx-auto">
                Get in touch with our team for personalized assistance
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-red-500 dark:bg-red-500 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                      <FaPhoneAlt className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">+62 21 1234 5678</p>
                      <p className="text-gray-600 dark:text-gray-300">+62 811 1234 567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">Bosowa Tower, Jl. Sudirman Kav. 1</p>
                      <p className="text-gray-600 dark:text-gray-300">Jakarta Selatan, Indonesia 12920</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">info@bosowadealership.com</p>
                      <p className="text-gray-600 dark:text-gray-300">sales@bosowadealership.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-500 dark:bg-red-500 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-colors">
                    Send Message
                  </button>
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