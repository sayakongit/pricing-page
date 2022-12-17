import data from "./data.json" assert { type: "json" };


let html = ""



const temp = data.map((obj) => {
  console.log(obj.title);

  html += `<div class="price-card">
                <h3>${obj.title}</h3>
                <h2 class="price-title">
                ₹ <span class="price">${obj.price}</span> for ${obj.time}
                </h2>
                <div class="hr"></div>
                <div class="features">`

    let feature_html = ""
    obj.features.forEach(feature => {
        feature_html += `<div class="feature-item">
                            <div>

                            <ion-icon name="${feature.status ? 'checkmark' : 'close'}-circle-outline" class=${feature.status ? 'available' : 'not-available'}></ion-icon>
                            </div>
                            <div>
                            <h4>
                                <span class="feature-subject">${feature.subject}:</span>  ${feature.info}
                            </h4>
                            </div>
                        </div>`
    });

    html += feature_html
                

  html += `     </div>
            <button type="button" class="pay-btn" onclick="showThanks();">Pay Now</button>
            </div>
            `;

});



document.getElementById('feature-box').innerHTML = html;