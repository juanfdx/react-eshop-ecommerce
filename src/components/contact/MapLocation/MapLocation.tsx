import './MapLocation.scss';


export const MapLocation = () => {
  
  return (
    <section className='map-location'>
      <div className='map-location__container'>

        <h2 className='map-location__title'>We're here for you</h2>
        <p className='map-location__text'>Our friendly team is always here to chat.</p>

        {/* embedded map  */}
        <div className='map-location__map'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.6936813131047!2d144.9487636092185!3d-37.82064332145988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a3ff30273%3A0x40e5d9c9f7c28623!2sMarket%20Skope!5e0!3m2!1sen!2ses!4v1707411951011!5m2!1sen!2ses" 
            width="100%" 
            height="100%"  
            loading="lazy" 
            style={{border: '1px solid  #d4d4d5', borderRadius: '4px'}} 
          >
          </iframe>
        </div>

      </div>
    </section>
  )
}