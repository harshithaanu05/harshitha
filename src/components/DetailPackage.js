import Footer from "./Footer";
import Header from "./Header";
import {useState,useEffect} from 'react'

const DetailPackage = () => {
    const [selectedImage, setselectedImage ]=useState('../media/detail-img.jpg');
    useEffect(()=> {
        window.scrollTo(0,0);
      });

  return (
    <>
    <Header/>
    <main class="container" style={{ marginTop: "120px"}}>
      <section class="detail">
        <div class="detail__card card">
          <img 
           src={selectedImage}
           alt=""
           class="detail_card-img"
           />
         <div class="detail__card-img-list">
            <img
           src="../media/detail-img.jpg"
              alt=""
              onClick={() => setselectedImage("../media/detail-img.jpg")}
              class={'detail__card-img-item ${selectedImage === "../media/detail-img.jpg" ? "active" : ""}'}
            />
            <div class="detail__card-data">
            <div class="detail__card-title">
              <h4>Description</h4>
              <h5>Rs.2000<span></span></h5>
            </div>
            <p class="detail__card-description">
            Jog Falls is created by the Sharavati river dropping 253 m (830 ft), making it the third-highest waterfall in India after the Nohkalikai Falls with a drop of 335 m (1,099 ft) in Meghalaya[11] and the Dudhsagar Falls with a drop of 310 m (1,020 ft) in Goa.
            Sharavathi, a river which rises at Ambutirtha, next to Nonabur, in the Thirthahalli taluk takes a northwesterly course by Fatte petta, receives the Haridravati on the right below Pattaguppe and the Yenne Hole on the left above Barangi. Then, it bends to the west, precipitates itself down the Jog Falls (aka Gersoppa Falls), and passes the village of Gersoppa (properly Geru-Sappe), which is some 30 kilometres (19 mi) away, discharging into the Arabian Sea at Honnavar in Uttara Kannada.
            The Sharavathi, flowing over a very rocky bed about 250 yards (230 m) wide, reaches a tremendous chasm, 290 m (950 ft) deep, and the water comes down in four distinct falls, Raja, Rani, Roarer and Rocket.[12] The Raja Fall comes down in one unbroken column sheer to the depth of 250 m (830 ft). Halfway down, it is encountered by the Roarer, which precipitates itself into a vast cup and then rushes violently downwards to meet the Raja. The Rocket shoots downwards in a series of jets. The Rani moves quietly over the mountainside in a sheet of foam. The Tourism Department has built steps from the viewpoint at the top, where the waterfall can be seen from across, to the bottom of the hill. There are approximately 1,400 steps made to reach the bottom of the hill.
            </p>
          </div>
          <img
              src="../media/detail-img2.jpg"
              alt=""
              onClick={() => setselectedImage("../media/detail-img2.jpg")}
              class={'detail__card-img-item ${selectedImage === "../media/detail-img2.jpg" ? "active" : ""}'}
            />
            <div class="detail__card-data">
            <div class="detail__card-title">
              <h4>Description</h4>
              <h5>Rs.3000<span></span></h5>
            </div>
            <p class="detail__card-description">
            Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence (house). It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of the Palaces', and there are seven palaces including this one. However, the Mysore Palace refers specifically to the one within the new fort.
            The land on which the palace now stands was originally known as mysuru (literally, "citadel"). The first palace inside the Old Fort was built in the 14th century, which was set ablaze and reconstructed multiple times. The Old Fort was built of wood and thus easily caught fire, while the current fort was built of stone, bricks and wood. The current structure was constructed between 1897 and 1912, after the Old Palace burnt down, the current structure is also known as the New Fort. Mysore Palace is one of the most famous tourist attractions in India, after the Taj Mahal, with more than six million annual visitors.
            </p>
          </div>
            <img
              src="../media/detail-img3.jpg"
              alt=""
              onClick={() => setselectedImage("../media/detail-img3.jpg")}
              class={'detail__card-img-item ${selectedImage === "../media/detail-img3.jpg" ? "active" : ""}'}
            />
            <div class="detail__card-data">
            <div class="detail__card-title">
              <h4>Description</h4>
              <h5>Rs.2000<span></span></h5>
            </div>
            <p class="detail__card-description">
            Mullayyanagiri is the highest peak in Karnataka, India. Mullayyanagiri is located in the Chandra Dhrona Hill Ranges of the Western Ghats of Chikkamagaluru Taluk. With a height of 1,925 metres (6,316 ft), it is the highest peak in Karnataka and also the 23rd highest peak in Western Ghats.[1] The summit of Mullayanagiri has a small temple and houses a police radio relay station. Seethalayyanagiri is a prominent peak which is adjacent to this place.
Temple
The peak gets its name from a small temple (gadduge/tomb) at the summit, which is dedicated to a sage "Mulappa swamy" who is believed to have meditated at the caves only a couple of feet below the summit. The caves are accessible and not very deep, they have a direct entrance to the garbagudi of the temple, which is now blocked by the temple priests. Apart from multiple versions of folklore and strong Siddha culture around the belt, the origins or any information about the deity remains ambiguous.
Trekking
Previously, when the present asphalt roads and the 464 stone and concrete steps were not present, a trail was used to reach the peak, known as 'Sarpadari' or 'Sarpanadi'. Although it is not very frequently visited now, this trail is cherished by trekkers.
            </p>
            </div>
           <img
              src="../media/detail-img4.jpg"
              alt=""
              onClick={() => setselectedImage("../media/detail-img4.jpg")}
              class={'detail__card-img-item ${selectedImage === "../media/detail-img4.jpg" ? "active" : ""}'}
            />
          </div>
          <div class="detail__card-data">
            <div class="detail__card-title">
              <h4>Description</h4>
              <h5>Rs.4000<span></span></h5>
            </div>
            <p class="detail__card-description">
            Murdeshwar Temple was built on the Kanduka Hill which is surrounded on three sides by the waters of the Laccadive Sea. It is dedicated to lord shiva, and a 20-storied Raja Gopura is constructed at the temple in 2008. The temple authorities have installed a lift that provides a view of the 123-feet Sri Shiva idol from the top of the Raja Gopura. There is also a Rameshwara linga at the bottom of the hill, where devotees can do seva themselves. A Shaneswar temple has been built next to the idol of Sri Akshayaguna. Two life-size elephants in concrete stand guard at the steps leading to it. The entire temple and temple complex, including the 209-feet-tall Raja Gopura, is one among the tallest.
         There are statues of Sun Chariot on side of a park, pool, statues depicting Arjuna receiving Geetopadesham from Lord Krishna, Ravana being deceived by Ganesha in disguise, Shiva's manifestation as Bhagirath, descending Ganga, carved around the hill.
        The temple is entirely modernised with exception of the sanctum sanctorum which is still dark and retains its composure. The main deity is Sri Mridesa Linga, also called Murdeshwar. The linga is believed to be a piece of the original Atma Linga and is about two feet below ground level. The devotees performing special sevas like Abhisheka, Rudrabhisheka, Rathotsava etc., can view the deity by standing before the threshold of the sanctum and the Linga is illuminated by oil lamps held close by the priests. The Linga is essentially a rough rock inside a hollowed spot in the ground. Entry into the sanctum is banned for all devotees.
       A huge towering statue of Shiva, visible from great distances, is present in the temple complex. It is the third tallest statue of Shiva in the world. The tallest Shiva statue is in Rajasthan, known as the Statue of Belief. [2][3] The statue is 123 feet (37 m) in height and took about two years to build. The statue was built by Shivamogga's Kashinath and several other sculptors, financed by businessman and philanthropist R. N. Shetty, at a cost of approximately ₹50 million. The idol is designed such that it gets the sunlight directly and thus appears sparkling
            </p>
          </div>
        </div>
        <div class="detail__form card">
          <h4 class="detail__form-title">Join Now</h4>
          <form action="">
            <div class="form__group">
              <input
                class="form__group-input"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div class="form__group">
              <input
                class="form__group-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="form__group">
              <textarea
                class="form__group-textarea"
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>
            <div class="form__group">
              <button class="button button-detail">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
    <Footer/>
    </>
    
    
  )
}

export default DetailPackage;
