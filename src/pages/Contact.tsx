
import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { whatsappGeneralLink } from '@/utils/data';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-artweb-50 to-blue-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-100 text-artweb-700 text-sm font-medium mb-6">
                Kontak Kami
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mari <span className="bg-clip-text text-transparent bg-blue-gradient">Berbicara</span>
              </h1>
              <p className="text-xl text-gray-600">
                Hubungi kami untuk konsultasi atau pertanyaan tentang layanan pembuatan website kami.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 px-6 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
                <p className="text-gray-600 mb-8">
                  Silakan hubungi kami melalui informasi di bawah ini atau kirimkan pesan melalui form kontak. Tim kami akan segera merespons pertanyaan Anda.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-50 text-artweb-600 rounded-full p-3">
                        <MapPin size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2">Alamat</h3>
                      <p className="text-gray-600">
                        Jl. Kaliurang KM 10, Ngaglik, Sleman,<br />
                        Yogyakarta, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-50 text-artweb-600 rounded-full p-3">
                        <Phone size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2">Telepon</h3>
                      <p className="text-gray-600">
                        <a href={whatsappGeneralLink} className="hover:text-artweb-600 transition-colors">
                          +62 815-7363-5143
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-50 text-artweb-600 rounded-full p-3">
                        <Mail size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:hello@artweb.id" className="hover:text-artweb-600 transition-colors">
                          hello@artweb.id
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-50 text-artweb-600 rounded-full p-3">
                        <Clock size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2">Jam Kerja</h3>
                      <p className="text-gray-600">
                        Senin - Jumat: 09:00 - 17:00<br />
                        Sabtu & Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.455037767188!2d110.3923086743164!3d-7.7589433000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599bd3bdc4ef%3A0x6f1714b0c4544586!2sNgaglik%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1656484594012!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="artWeb Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-card">
                  <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="bg-green-100 text-green-600 rounded-full p-4 inline-block mb-4">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Pesan Terkirim!</h3>
                      <p className="text-gray-600 mb-6">
                        Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda dalam 1-2 hari kerja.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-artweb-300 text-artweb-700 hover:bg-artweb-50"
                      >
                        Kirim Pesan Lain
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Nama
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-artweb-500 focus:ring focus:ring-artweb-200 focus:ring-opacity-50 transition-colors"
                            placeholder="Nama Lengkap"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-artweb-500 focus:ring focus:ring-artweb-200 focus:ring-opacity-50 transition-colors"
                            placeholder="email@contoh.com"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-artweb-500 focus:ring focus:ring-artweb-200 focus:ring-opacity-50 transition-colors"
                          placeholder="08xxxxxxxxx"
                        />
                      </div>

                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                          Subjek
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-artweb-500 focus:ring focus:ring-artweb-200 focus:ring-opacity-50 transition-colors"
                          placeholder="Subjek pesan"
                        />
                      </div>

                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                          Pesan
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-artweb-500 focus:ring focus:ring-artweb-200 focus:ring-opacity-50 transition-colors"
                          placeholder="Tuliskan pesan Anda di sini..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-gradient shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Mengirim...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send size={16} className="mr-2" />
                            Kirim Pesan
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beberapa pertanyaan umum tentang layanan kami. Jika Anda memiliki pertanyaan lain, silakan hubungi kami.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Bagaimana cara memulai proyek dengan artWeb?</h3>
                  <p className="text-gray-600">
                    Anda dapat menghubungi kami melalui form kontak, WhatsApp, atau email. Tim kami akan mengadakan konsultasi awal untuk memahami kebutuhan Anda, kemudian menyiapkan proposal sesuai dengan kebutuhan tersebut.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Berapa lama waktu yang dibutuhkan untuk menyelesaikan website?</h3>
                  <p className="text-gray-600">
                    Waktu pengembangan bervariasi tergantung pada kompleksitas proyek. Website sederhana biasanya membutuhkan 2-4 minggu, sedangkan proyek yang lebih kompleks seperti e-commerce atau aplikasi web dapat membutuhkan 1-3 bulan.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Apakah artWeb menyediakan layanan pemeliharaan website?</h3>
                  <p className="text-gray-600">
                    Ya, kami menyediakan layanan pemeliharaan dan support berkelanjutan untuk memastikan website Anda tetap berfungsi optimal, aman, dan up-to-date. Layanan ini tersedia dalam paket bulanan atau tahunan.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Apakah saya akan mendapatkan domain dan hosting?</h3>
                  <p className="text-gray-600">
                    Ya, semua paket kami mencakup domain dan hosting gratis untuk tahun pertama. Setelah itu, Anda dapat memperpanjangnya melalui kami atau mengelolanya sendiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-blue-gradient text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Untuk Mewujudkan Website Impian Anda?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Hubungi kami sekarang untuk konsultasi gratis dan penawaran spesial untuk proyek Anda.
              </p>
              <Button asChild className="bg-white text-artweb-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-6 py-6 text-base">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer">
                  Hubungi Kami di WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
