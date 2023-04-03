import './style.css';

// fetch advice
async function fetchAdvice(url) {
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

// generate advice html
function getAdviceHtml(slipObj) {
    const { slip } = slipObj;

    return `<div class="container">
              <h6 class="advice-id">ADVICE #${slip.id}</h6>
              <p class="advice-text">${slip.advice}</p>
              <img src="/images/pattern-divider-${
                  window.innerWidth > 600 ? 'desktop' : 'mobile'
              }.svg" aria-hidden="true" class="divider" />
              <div class="dice-icon" data-btn="newAdviceBtn">
                  <img 
                  src="/images/icon-dice.svg" 
                  alt="Generate new advice"
                  data-btn="newAdviceBtn"
                  />
              </div>

              <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://twitter.com/jumaH4run">Juma Harun</a>.
              </div>
            </div>`;
}

// display advice
async function displayAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    const adviceObj = await fetchAdvice(url);
    const html = getAdviceHtml(adviceObj);

    document.querySelector('#app').innerHTML = html;
}

displayAdvice();

// get new advice event handler
document.addEventListener('click', (e) => {
    if (e.target.dataset.btn === 'newAdviceBtn') {
        displayAdvice();
    }
});
