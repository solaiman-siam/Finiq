import ContactSection from '@/components/Contact/ContactSection';

const Contact = () => {
  return (
    <div className="pt-[170px] lg:pb-20 bg-bg-secondary relative z-[1]">
      <ContactSection />

      <img
        className="absolute top-20 right-0 z-[-1]"
        src={'/wave5.png'}
        alt=""
      />
      <img
        className="absolute bottom-20 right-0 z-[-1]"
        src={'/wave5.png'}
        alt=""
      />
    </div>
  );
};

export default Contact;
