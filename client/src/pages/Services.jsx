// function of constant information to fill the 3 by 2 grid of services
const services = [
    { label: 'Web Development', img: '/webdevicon.png' },
    { label: 'Mobile App Development', img: '/mobappdev.png' },
    { label: 'UI/UX Design', img: '/uiuxdesign.png' },
    { label: 'Software Development', img: '/softdevicon.png' },
    { label: 'Database Management', img: '/dbmanagement.png' },
    { label: 'General Programming', img: '/genprogicon.png' },
];

//fucntion to render the services grid
const Services = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Services</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '900px', margin: '0 auto', padding: '30px 0' }}>
                {services.map((service, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={service.img} alt={service.label} style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }} />
                        <div>{service.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;