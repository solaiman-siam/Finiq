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
        image: '/src/assets/images/destination image big.png',
        flag: '/src/assets/images/flag.png',
        layout: 'big',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 2,
        name: 'Jakarta',
        image: '/jakarta.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 3,
        name: 'Bangkok',
        image: '/src/assets/images/bankock.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 4,
        name: 'Kuala Lumpur',
        image: '/src/assets/images/kualalampur.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    continent: 'Asia Pacific',
    continentLogo: '/src/assets/images/asia.png',
    destinations: [
      {
        id: 1,
        name: 'Hong Kong',
        image: '/src/assets/images/hongkong.png',
        flag: '/src/assets/images/flag.png',
        layout: 'big',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 2,
        name: 'Sydney',
        image: '/src/assets/images/sydney.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 3,
        name: 'Taipei',
        image: '/src/assets/images/taipei.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 4,
        name: 'Tokyo',
        image: '/src/assets/images/tokyo.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    continent: 'Middle-East',
    continentLogo: '/src/assets/images/middleeast.png',
    destinations: [
      {
        id: 1,
        name: 'Dubai',
        image: '/src/assets/images/dubai.png',
        flag: '/src/assets/images/flag.png',
        layout: 'big',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    continent: 'Europe',
    continentLogo: '/src/assets/images/europe.png',
    destinations: [
      {
        id: 1,
        name: 'London',
        image: '/src/assets/images/london.png',
        flag: '/src/assets/images/flag.png',
        layout: 'big',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 2,
        name: 'Madird',
        image: '/src/assets/images/jakarta.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 3,
        name: 'Zurich',
        image: '/src/assets/images/bankock.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
      {
        id: 4,
        name: 'Frankfurt',
        image: '/src/assets/images/kualalampur.png',
        flag: '/src/assets/images/flag.png',
        layout: 'small',
        details: [
          {
            location:
              'FinIQ Consulting Pte. Ltd., Malaysia Branch Block-J-05-13A, Solaris Mont Kiara, No.2, Jalan Solaris, 50480 Kuala Lumpur, Malaysia',
            contact: '+603-6201-9733',
          },
        ],
      },
    ],
  },
];

const LocationSection = () => {
  return (
    <section className="py-[100px] bg-bg-secondary relative z-[1]">
      <Container>
        {/* section title  */}
        <h3 className="text-[50px] font-bold capitalize text-text-primary mb-[30px]">
          Locations
        </h3>

        <div className="w-full flex gap-y-[50px] flex-wrap">
          {locationDatas.map((item) => (
            <div key={item.id} className="w-full flex flex-col gap-y-6">
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
              <div className="flex flex-wrap gap-y-6 gap-x-6 w-full">
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
          src="/src/assets/images/waves-2.png"
          alt=""
          className="w-full max-w-full rotate-180 object-cover"
        />
      </div>
    </section>
  );
};

export default LocationSection;
