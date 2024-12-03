import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../Container';
import LocationBigItem from './Components/LocationBigItem';
import LocationSmallItem from './Components/LocationSmallItem';

const locationDatas = [
  {
    id: 1,
    continent: 'South-East Asia',
    continentLogo: '/southasia.png',
    destinations: [
      {
        id: 1,
        name: 'Singapore',
        image: '/destination image big.png',
        flag: '/singapore.png',
        layout: 'big',
        details: [
          {
            location: `FinIQ Consulting Pte. Ltd. 10 Collyer Quay, #40-00, Ocean Financial Centre, Singapore, 049315.`,
            contact: '+65-6808 6460',
          },
        ],
      },
      {
        id: 2,
        name: 'Jakarta',
        image: '/jakarta.png',
        flag: '/indonesia.png',
        layout: 'small',
        details: [
          {
            location: `PT. FinIQ Consulting Indonesia Menara Astra, 37 Floor, Jl. Jend. Sudirman Kav.5-6 Jakarta, 10220`,
            contact: '+6221-3115-4559',
          },
        ],
      },
      {
        id: 3,
        name: 'Bangkok',
        image: '/bankock.png',
        flag: '/thailand.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Consulting (Thailand) Co Ltd
No. 1-7 Level 8, Zuellig House Building, Silom Road, Silom, Bangrak, Bangkok 10500 Thailand`,
            contact: '+66 2231 8392-5',
          },
        ],
      },
      {
        id: 4,
        name: 'Kuala Lumpur',
        image: '/kualalampur.png',
        flag: '/malaysia.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia`,
            contact: '+603-6201-9733',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    continent: 'Asia Pacific',
    continentLogo: '/asia.png',
    destinations: [
      {
        id: 1,
        name: 'Hong Kong',
        image: '/hongkong.png',
        flag: '/hong_kong.png',
        layout: 'big',
        details: [
          {
            location: `FinIQ Consulting Pte. Ltd, Hong Kong Branch
Room 37A, Level 20, One IFC, 1 Harbour View Street, Central, Hong Kong`,
            contact: '+852-2154-7459',
          },
        ],
      },
      {
        id: 2,
        name: 'Sydney',
        image: '/sydney.png',
        flag: '/australia.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Solutions Pty Ltd (Australia)
Level 35, Tower One Barangaroo, 100 Barangaroo Ave, Barangaroo Sydney NSW 2000, Australia`,
            contact: '+61 410654785',
          },
        ],
      },
      {
        id: 3,
        name: 'Taipei',
        image: '/taipei.png',
        flag: '/taiwan.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Consulting Pte Ltd, Taiwan Branch
Leavel 57-1, TAIPEI 101 TOWER, No. 7, Sec.5, Xinyi Road, Taipei, 110, Taiwan`,
            contact: '+886-988-546676',
          },
        ],
      },
      {
        id: 4,
        name: 'Tokyo',
        image: '/tokyo.png',
        flag: '/japan.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Consulting Japan K.K.
TOHO Hibiya Promenade Building Level 11, 1-5-2, Yurakucho, Chiyoda-ku, Tokyo 100-0006, Japan`,
            contact: '+81-3-6807-5086',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    continent: 'Middle-East',
    continentLogo: '/middleeast.png',
    destinations: [
      {
        id: 1,
        name: 'Dubai',
        image: '/dubai.png',
        flag: '/uae.png',
        layout: 'big',
        details: [
          {
            location: `FinIQ Information Technology Limited
Unit IH-00-01-02-OF-01 Level 2, IH-00-01-CP-05, Dubai International Financial Centre.`,
            contact: '',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    continent: 'Europe',
    continentLogo: '/europe.png',
    destinations: [
      {
        id: 1,
        name: 'London',
        image: '/london.png',
        flag: '/united_kingdom.png',
        layout: 'big',
        details: [
          {
            location: `FinIQ Solutions Limited (UK)
3rd Floor, The News Building, 3 London Bridge Street, London SE1 9SG, United Kingdom`,
            contact: '+44 (0) 204 534 8097',
          },
        ],
      },
      {
        id: 2,
        name: 'Madrid',
        image: '/madrid.png',
        flag: '/spain.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Europe, S.L. (Spain)
Avenida Europa 19, 3º A 28108 Alcobendas, Madrid, Spain`,
            contact: '',
          },
        ],
      },
      {
        id: 3,
        name: 'Zurich',
        image: '/jurich.png',
        flag: '/switzerland.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Switzerland AG
c/o Format A AG, Wiesenstrasse 9, 8008 Zürich, Switzerland`,
            contact: '',
          },
        ],
      },
      {
        id: 4,
        name: 'Frankfurt',
        image: '/frankfart.png',
        flag: '/germany.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Germany GmbH
Spaces Tower One, Brüsseler Strasse 1-3, 60327 Frankfurt, Germany`,
            contact: '',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    continent: 'India',
    continentLogo: '/vector.png',
    destinations: [
      {
        id: 1,
        name: 'Pune',
        image: '/pune.png',
        flag: '/india.png',
        layout: 'big',
        details: [
          {
            location: `FinIQ Consulting India Private Limited
Office 617, 6th floor, Siddharth Towers, Bldg-I, Sangam Press Road, Kothrud, Pune, India(411038)`,
            contact: ' +91-20-67200600',
          },
        ],
      },
      {
        id: 2,
        name: 'Mumbai',
        image: '/mumbai.png',
        flag: '/india.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Consulting India Private Limited
Unit No. 304, 3rd Floor,
A-Wing, Supreme Business Park, Supreme City, Powai, Mumbai, India(400076)`,
            contact: '',
          },
        ],
      },
      {
        id: 3,
        name: 'Bangaluru',
        image: '/bangaluru.png',
        flag: '/india.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Consulting India Private Limited
Office No - 235, 5th Floor, Novel MSR Building, Marathahalli, Bengaluru, Karnataka, India(560037)`,
            contact: '',
          },
        ],
      },
      {
        id: 4,
        name: 'Nashik',
        image: '/nashik.png',
        flag: '/india.png',
        layout: 'small',
        details: [
          {
            location: `FinIQ Consulting India Private Limited
101-104, Metro99 Commercial Complex, Thatte Nagar, College Road, Nashik, India(422005)`,
            contact: '',
          },
        ],
      },
    ],
  },
];

const LocationSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section
      id="locations"
      className="py-[50px] sm:py-[100px] bg-bg-secondary relative z-[1] px-5 xxl:px-0"
    >
      <Container>
        {/* section title  */}
        <h3
          data-aos="fade-left"
          className="text-[30px] sm:text-[50px] font-bold capitalize text-text-primary mb-[30px]"
        >
          Locations
        </h3>

        <div className="w-full flex gap-y-[50px] flex-wrap">
          {locationDatas.map((item) => (
            <div
              data-aos="zoom-in"
              key={item.id}
              className="w-full flex flex-col gap-y-6"
            >
              {/* Continent Name */}
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <img
                    src={item.continentLogo}
                    alt=""
                    className="max-w-[50px]"
                  />
                </div>
                <h4 className="text-text-primary text-[22px] font-bold font-poppins">
                  {item.continent}
                </h4>
              </div>

              {/* Destination */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-y-6 gap-x-6 w-full">
                {item.destinations.map((item) => (
                  <>
                    {item.layout == 'big' ? (
                      <LocationBigItem data={item} key={item.id} />
                    ) : (
                      <LocationSmallItem data={item} key={item.id} />
                    )}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <img
          src="/waves-2.png"
          alt=""
          className="w-full max-w-full rotate-180 object-cover"
        />
      </div>
    </section>
  );
};

export default LocationSection;
