import './App.css';
import Card from './Card';

function App() {
  // JS CODE 
  const name = "Kevin Joe";
  const data = "3.3.0 (14/05/2018)";
  const fixdate = "3.1.0(20/05/2015)";
  const impdate = "3.1.0(20/05/2015)"; 
  

  return (
    <div className='App'>
      <div className='card'>
      <Card dt={data}/>
      <div className='card_item'>
        <button className='btn-new'>New</button>
        <Card me={name} />
        
      </div>
      <p>File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various
      bug fixes and stability improvements Share permissions re-esign and optimization</p>
      <button className='btn-2'>Download</button>
    </div>

    <div className='card1'>
      <Card fdt={fixdate}/>
      <div className='card_item'>
        <button className='btn-fix'>Fix</button>
        <Card className='card1' me={name} />
        
      </div>
      <p>Introducing Host Cloud Drive - virtual drive functionality<br/>
      New Share otpions and managment<br/>
      New, more user friendly design Sync optimizations Various performance improvements and bug fixes
      </p>
      <button className='btn-2'>Download</button>
    </div>

    <div className='card2'>
      <Card idt={impdate}/>
      <div className='card_item'>
        <button className='btn-imp'>Improvement</button>
        <Card className='card1' me={name} />
        
      </div>
      <p>Added Settings for Auto Start<br/>
      Added Update Notification<br/>
      Speed Optimization<br/>
      Bug fixes
      </p>
      <button className='btn-2'>Download</button>
    </div>

    
    <div className='card'>
      <Card dt={data}/>
      <div className='card_item'>
        <button className='btn-new'>New</button>
        <Card className='card1' me={name} />
        
      </div>
      <p>File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various
      bug fixes and stability improvements Share permissions re-esign and optimization</p>
      <button className='btn-2'>Download</button>
    </div>

    <div className='card1'>
      <Card fdt={fixdate}/>
      <div className='card_item'>
        <button className='btn-fix'>Fix</button>
        <Card className='card1' me={name} />
        
      </div>
      <p>Introducing Host Cloud Drive - virtual drive functionality<br/>
      New Share otpions and managment<br/>
      New, more user friendly design Sync optimizations Various performance improvements and bug fixes
      </p>
      <button className='btn-2'>Download</button>
    </div>

    <div className='card2'>
      <Card idt={impdate}/>
      <div className='card_item'>
        <button className='btn-imp'>Improvement</button>
        <Card className='card1' me={name} />
        
      </div>
      <p>Added Settings for Auto Start<br/>
      Added Update Notification<br/>
      Speed Optimization<br/>
      Bug fixes
      </p>
      <button className='btn-2'>Download</button>
    </div>

    




    
    <div className='card'>
      <Card dt={data}/>
      <div className='card_item'>
        <button className='btn-new'>New</button>
        <Card className='card1' me={name} />
        
      </div>
      <p>File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various
      bug fixes and stability improvements Share permissions re-esign and optimization</p>
      <button className='btn-2'>Download</button>
    </div>

    <div className='card1'>
      <Card fdt={fixdate}/>
      <div className='card_item'>
        <button className='btn-fix'>Fix</button>
        <Card className='card1' me={name} />
        
      </div>
      <p>Introducing Host Cloud Drive - virtual drive functionality<br/>
      New Share otpions and managment<br/>
      New, more user friendly design Sync optimizations Various performance improvements and bug fixes
      </p>
      <button className='btn-2'>Download</button>
    </div>

    <div className='card2'>
      <Card idt={impdate}/>
      <div className='card_item'>
        <button className='btn-imp'>Improvement</button>
        <Card className='card1' me={name} />
        
      </div>
      <p>Added Settings for Auto Start<br/>
      Added Update Notification<br/>
      Speed Optimization<br/>
      Bug fixes
      </p>
      <button className='btn-2'>Download</button>
    </div>
    
    </div>
  );
}

export default App;
