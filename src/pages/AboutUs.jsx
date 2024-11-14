import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import logo from '/logo.png';
function AboutUs() {
  const breadcrumpData = [
    {
      name :"App",
      link:"/"
    },
    {
      name :"About Us",
      link: null
    }
  ]
    return (
      <> 
      <Breadcrumb breadcrumpData={breadcrumpData} />
        <div className="relative">
      {/* Background Logo */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-repeat  bg-center " 
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-10   rounded-lg shadow-lg">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="text-md text-gray-600 mt-2">
            Partnering with you to elevate wedding experiences.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            At Wedrobe, we are passionate about transforming the wedding industry through strong partnerships with vendors like you. Our platform serves as a bridge, connecting talented professionals with couples who seek to create their dream weddings. With years of experience in the wedding sector, we understand the unique challenges and opportunities that vendors face, and we are here to support you every step of the way.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We believe in building a community where creativity thrives and collaboration leads to unforgettable experiences. Our mission is to empower you with the tools, resources, and support needed to excel in the competitive wedding market.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Our Services for Vendors</h2>
          <ul className="mt-4 space-y-6 text-gray-700">
            <li className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-medium">Vendor Partnership</h3>
              <p>
                Join our expansive network of trusted vendors. As a partner, you will gain exposure to a diverse clientele actively seeking your services. Collaborate with us to enhance your visibility and attract more clients through our platform.
              </p>
            </li>
            <li className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-medium">Support and Resources</h3>
              <p>
                Access a wealth of resources designed to help you thrive. From marketing materials to planning tools, we provide everything you need to connect with potential clients. Our dedicated support team is available to assist you with any questions or challenges you may encounter.
              </p>
            </li>
            <li className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-medium">Training and Development</h3>
              <p>
                Participate in exclusive workshops and training sessions tailored to enhance your skills and knowledge. Stay ahead of industry trends and best practices with our educational resources, designed to empower you and elevate your services.
              </p>
            </li>
            <li className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-medium">Marketing Support</h3>
              <p>
                Benefit from our targeted marketing initiatives designed to promote your services to a wider audience. We use social media campaigns, email newsletters, and other marketing strategies to showcase our vendor partners, helping you to increase your brand presence.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Our Commitment</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            At Wedrobe, we are committed to fostering strong, lasting relationships with our vendor partners. Our goal is to create a supportive environment where you can flourish. We listen to your feedback, adapt to your needs, and work alongside you to ensure that your experience with us is both productive and rewarding.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We strive to provide exceptional service and continuous support, ensuring that you have the tools you need to succeed in your business endeavors.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
            <li><strong>Integrity:</strong> Building trust through transparency and honesty in all our interactions.</li>
            <li><strong>Collaboration:</strong> Working together to create exceptional wedding experiences for our clients.</li>
            <li><strong>Empowerment:</strong> Providing the resources and support you need to excel in your business.</li>
            <li><strong>Innovation:</strong> Embracing creativity and new ideas to keep our platform and services at the forefront of the industry.</li>
            <li><strong>Customer Focus:</strong> Prioritizing the needs and satisfaction of both our vendors and clients.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Get In Touch</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We’d love to hear from you! Whether you have questions about becoming a vendor partner or need assistance with our platform, our team is here to help. Reach out to us anytime to start a conversation or get the support you need.
          </p>
          <p className="mt-2 text-gray-600">
            Email: <a href="mailto:vendors@wedrobe.com" className="text-blue-600 hover:underline">vendors@wedrobe.com</a>
          </p>
        </section>
      </div>
    </div>
    </>
    )
}

export default AboutUs
