import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import districtData from './Places.js'; // Import district data
import "./Home.css";
import prop1 from './Sagarmatha.jpg';
import prop2 from './Swayambhunath.jpg';
import prop3 from './Travelguide.png';
import prop4 from './blogs.png';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const handleSearch = (text) => {
    const normalizedText = text.toLowerCase();
    const filtered = districtData.filter((district) =>
      district.name.toLowerCase().includes(normalizedText)
    );
    setFilteredDistricts(filtered);
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Travel Blog</h1>
        <p>Explore the beauty of Nepal's districts.</p>
      </header>

      <main>
        <section className="search-section">
          <h2>Search for a District in Nepal</h2>
          <input
            type="text"
            placeholder="Enter a district name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </section>

        <section className="district-list">
          <h2>Relevant to your search</h2>
          <ul>
            {filteredDistricts.map((district) => (
              <li key={district.name}>
                <Link to={district.blogUrl}>{district.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    <div className='homepage-container'>
      <div className='hero-section'>
        <h1>Welcome to Yatrik</h1>
        <p>Your one-stop destination for all travel informations</p>
        <Link to="/Property"><button>Find your dream travek</button> </Link>
      </div>

      <div className='featured-properties'>
        <h2>Popular destinations</h2>
        <div className='properties-grid'>
          <div className='property'>
            <img src={prop1} alt='house1' />
            <h3>Annapurna Base Camp</h3>
            <p>Beautiful and Elegant view of Annapurna range</p>
            <Link to="/property/0"><button className='Homebutton'>View Details</button></Link>
            
          </div>

          <div className='property'>
            <img src={prop2} alt='house2' />
            <h3>Kathmandu</h3>
            <p>Historical,Cultural and Capital of the state</p>
            <Link to="/property/1"> <button>View Details</button> </Link>
           
          </div>

          <div className='property'>
            <img src={prop3} alt='house3' />
            <h3>Bhaktapur</h3>
            <p>Old and vintage community</p>
            <Link to="/property/2"> <button>View Details</button> </Link>
            
          </div>

          <div className='property'>
            <img src={prop4} alt='house4' />
            <h3>Chitwan</h3>
            <p>Peaceful and chilling</p>
            <Link to="/property/3"> <button>View Details</button> </Link>
           
          </div>
          <div className='property'>
            <img src={prop1} alt='house5' />
            <h3>Pokhara</h3>
            <p>City of seven lakes</p>
            <Link to="/property/4"> <button>View Details</button> </Link>
           </div>
          <div className='property'>
            <img src={prop2} alt='house6' />
            <h3>Everest base Camp</h3>
            <p>Your eyes on top</p>
            <Link to="/property/5">  <button>View Details</button> </Link>
           
          </div>
          <div className='property'>
            <img src={prop3} alt='image7' />
            <h3>Kapuche</h3>
            <p>Lowest glacier lake of Nepal</p>
            <Link to="/property/6"> <button>View Details</button> </Link>
           
          </div>
          <div className='property'>
            <img src={prop4} alt='image3' />
            <h3>Lalitpur</h3>
            <p>Modern yet historical</p>
            <Link to="/property/7"> <button>View Details</button> </Link>
           
          </div>
        </div>
      </div>

      <div className='about-section'>
        <p>
          Yatrik is a tourism website to provide you your travelling experience wihtout worries.
          It is a one stop platform to your travelling needs.
        </p>
        </div>
        </div>
      </div>
  );
}

export default Home;
