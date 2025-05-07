<template>
  <div class="section-1" :style="{ backgroundImage: backgroundImg }">
    <div class="overlay"></div>
    <div class="a">Giving</div>
    <span style="color: white; padding-bottom: 5rem; z-index: 2"
      >Learn more about Giving</span
    >
  </div>
  <div class="a-sub">
    <div class="scrip-wrapper">
      <div class="scrip-sub-wrapper" style="position: relative">
        <span class="scrip-quote">"</span>
        <span class="give-scrip"
          >So let each one give as he purposes in his heart, not grudgingly or
          of necessity; for God loves a cheerful giver.</span
        >
        <span class="scrip-f">II Cor 9:7</span>
        <span class="scrip-v">NKJV</span>
      </div>
    </div>
  </div>
  <div class="giving-detail">
    <span>New Destiny Ministries</span>
    <span>
      is funded almost entirely by contributions from our congregation and
      visitors.</span
    >
    <span>
      Your giving enables us to be a light in our community; an oasis in the
      desert.</span
    >
    <span>
      Online giving is simple and easy, all major forms of payment are accepted
      and all gifts are welcome.</span
    >
    <span> If you have questions about giving, see our PayPal FAQ below.</span>
  </div>
  <div class="ways-wrapper">
    <div class="ways-tg">Ways to Give:</div>
    <div style="color: grey; text-align: center">
      For Questions, See our
      <a class="g-link" @click="scrollToFAQ()">FAQ</a> below
    </div>
  </div>
  <div class="give-tab-container">
    <div class="give-tab ca selected" @click="switchTab('ca')">
      <img :src="cashapp" />
      <span>Cash App</span>
    </div>
    <div class="give-tab pp" @click="switchTab('pp')">
      <img :src="paypal" />
      <span>PayPal</span>
    </div>
    <div class="give-tab ml" @click="switchTab('ml')">
      <i class="give-icon far fa-envelope"></i>
      <span>Mail</span>
    </div>
    <div class="give-tab ip" @click="switchTab('ip')">
      <i class="give-icon fa fa-donate"></i>
      <span>In Person</span>
    </div>
  </div>
  <div class="section-2">
    <div class="give-div ca selected">
      <div class="give-type-wrapper">
        <div class="give-hdr">Cash App</div>
        <div class="give-a">Give via Cash App</div>
        <div class="give-b">
          <div>
            <i class="check-icon fa fa-check"></i>
            <span>Give via </span>
            <a href="https://cash.app/$NDMDayton1" class="g-link">Cash App</a>
            <span>
              or by searching "NDMDayton1" inside the mobile CashApp
              application.</span
            >
          </div>
          <div>
            <i class="check-icon fa fa-check"></i>
            <span
              >Be sure to specify how you would like to allocate your giving
              (tithes, offerings, building fund, etc.) in the "For"
              section.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="give-div pp">
      <div class="give-type-wrapper">
        <div class="give-hdr">PayPal</div>
        <div class="give-a">Give via PayPal</div>
        <div class="give-b">
          <div>
            <i class="check-icon fa fa-check"></i>
            <span>Give via </span>
            <a href="https://paypal.me/ndmdayton" class="g-link">PayPal</a>
          </div>
          <div>
            <i class="check-icon fa fa-check"></i>
            <span
              >Be sure to specify how you would like to allocate your giving
              (tithes, offerings, building fund, etc.)</span
            >
          </div>
          <div>
            <i class="check-icon fa fa-check"></i>
            <span
              >Giving through PayPal constitutes as a donation, so you will not
              be charged a fee for any transaction.</span
            >
          </div>
          <div>
            <i class="check-icon fa fa-check"></i>
            <span
              >After giving your donation and once your transaction is complete,
              PayPal should send you a confirmation email.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="give-div ml">
      <div class="give-type-wrapper">
        <div class="give-hdr">Mail</div>
        <div class="give-a">Mail in Your Contribution</div>
        <div class="give-b">
          <div>
            <i class="check-icon fa fa-check"></i>
            <span
              >You can always mail in your contribution directly to New Destiny
              Ministries - 5350 Denlinger Road - Trotwood, Ohio 45426</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="give-div ip">
      <div class="give-type-wrapper">
        <div class="give-hdr">In Person</div>
        <div class="give-a">Give in Person</div>
        <div class="give-b">
          <div>
            <i class="check-icon fa fa-check"></i>
            <span
              >You can give by cash or check during at our Sunday worship
              service. Giving envelopes can be picked up on your way into
              worship.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="faq" class="section-3">
    <span class="give-a" style="margin: 5rem">Frequently Asked Questions</span>
    <div class="q-wrapper">
      <div class="pp-q">
        What is PayPal/Cash App, and how is New Destiny Ministries using it to
        enable online giving?
      </div>
      <div class="pp-a">
        PayPal/Cash App allows us to collect your gift(s) via our links above.
        It is a low cost way for us to make it convenient for you to give
        outside of Sunday service.
      </div>
    </div>
    <div class="q-wrapper">
      <div class="pp-q">Why did you choose PayPal/Cash App?</div>
      <div class="pp-a">
        Both platforms are widely-used, and we have confidence in their
        reliability. Also, it is inexpensive. In fact, we do not pay anything
        unless someone donates, only then PayPal/Cash App retain a small
        percentage of the donation as a transaction fee.
      </div>
    </div>
    <div class="q-wrapper">
      <div class="pp-q">Do I need a PayPal account?</div>
      <div class="pp-a">
        To make a one time donation, no. Look for the button that allows you to
        choose to use a major credit card (American Express, VISA, etc.) You can
        use one of them without ever signing up for PayPal. However, signing up
        for a PayPal account allows you to monitor, change or cancel your
        donation.
      </div>
    </div>
    <div class="q-wrapper">
      <div class="pp-q">Do I need a Cash App account?</div>
      <div class="pp-a">
        Yes. It is availble to download for free on the Google Play/App Stores.
        You will need to provide personal information and banking details in
        order to give.
      </div>
    </div>
    <div class="q-wrapper">
      <div class="pp-q">
        Are you encouraging people to borrow to support the church?
      </div>
      <div class="pp-a">
        No. We are simply making it convenient for people who prefer to donate
        online to do so, not asking people to incur debt to do so.
      </div>
    </div>
    <div class="q-wrapper">
      <div class="pp-q">
        Do I need to be a member of the church in order to donate?
      </div>
      <div class="pp-a">
        No. We are grateful for support from all who feel motivated to do so.
        PayPal/CashApp does ask for your contact information, and we do not
        currently accept anonymous donations.
      </div>
    </div>
    <div class="q-wrapper">
      <div class="pp-q">
        How do I make sure my payment is credited to the correct operation, such
        as tithes or building fund?
      </div>
      <div class="pp-a">
        Just note the reason for your gift in the Feedback/Comments section.
      </div>
    </div>
    <div class="q-wrapper">
      <div class="pp-q">Is my donation tax-deductible?</div>
      <div class="pp-a">Yes. We are a 501(C)(3) corporation.</div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "../layout/Footer.vue"
import { ref, onMounted } from "vue"
import background from "../../assets/background_color.png"
import paypal from "../../assets/paypal-icon.png"
import cashapp from "../../assets/icon-square-cash.png"

const backgroundImg = ref(`url(${background})`)
var arr1
var arr2
var giveeles

function switchTab(tabName) {
  for (var i = 0; i < giveeles.length; i++) {
    if (giveeles[i].classList.contains(tabName)) {
      giveeles[i].classList.add("selected")
    } else {
      giveeles[i].classList.remove("selected")
    }
  }
}

function scrollToFAQ() {
  document.getElementById("faq").scrollIntoView()
}

onMounted(() => {
  arr1 = document.querySelectorAll(".give-div")
  arr2 = document.querySelectorAll(".give-tab")
  giveeles = Array.from(arr1).concat(Array.from(arr2))

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const t = entry.target
      var animation = "fade-in-animation"

      if (entry.isIntersecting) {
        t.classList.add(animation)
        return // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      t.classList.remove(animation)
    })
  }).observe(document.querySelector(`.ways-wrapper`))

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const t = entry.target
      const tc = t.firstElementChild
      if (entry.isIntersecting) {
        t.classList.add("diagnol-in-animation")
        tc.classList.add("diagnol-in-op-animation")
        return // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      t.classList.remove("diagnol-in-animation")
      tc.classList.remove("diagnol-in-op-animation")
    })
  }).observe(document.querySelector(`.scrip-wrapper`))
})
</script>

<style scoped>
.section-1 {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 15rem;
  background-color: #793354;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 75px;
}
.a {
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  animation-name: fade-white;
  animation-timing-function: ease;
  animation-duration: 1s;
}

.a-sub {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10vw;
}

.scrip-wrapper {
  position: relative;
  text-align: center;
  background-color: aliceblue;
  padding: 2rem;
  border-radius: 5px;
}

.scrip-quote {
  color: #adb0ff;
  font-size: 1.5rem;
}

.give-scrip {
  font-weight: bold;
  color: #334e68;
  font-size: 1.5rem;
  line-height: 1.5;
}

.scrip-f {
  display: block;
  font-weight: bold;
  padding-top: 1rem;
  color: #797cce;
}

.scrip-v {
  color: grey;
  font-size: 0.8rem;
}

.giving-detail {
  width: 100%;
  text-align: center;
  padding: 4rem 20vw;
  line-height: 2rem;
  color: black;
  font-size: 1.1rem;
  padding-top: 0;
}

.giving-detail span:nth-child(1) {
  position: relative;
}

.giving-detail span:nth-child(1):after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 2px;
  height: 0.4em;
  background-color: #8975c5;
  opacity: 0.25;
}

.ways-tg {
  color: #334e68;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.give-tab-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: wrap;
  margin: 3rem;
}

.give-tab-container img {
  height: 2rem;
  margin-bottom: 0.5rem;
}

.give-tab {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid #c7c7c7;
  cursor: pointer;
  transition: 100ms ease-in;
  min-width: 10rem;
}

.give-tab:not(.selected):hover {
  background-color: whitesmoke;
}

.give-tab.selected {
  background-color: whitesmoke;
  border-color: #3a6eff;
}

.give-tab::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #3a6eff;
  transition: 100ms ease-in;
}

.give-tab.selected::after {
  height: 0.2rem;
}

.section-2 {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 2rem;
  padding-bottom: 5rem;
  align-items: center;
}

.give-div {
  min-height: 350px;
  border-radius: 5px;
  margin: 0.5rem;
  background-color: aliceblue;
  line-height: 2;
  max-width: 850px;
}

.give-div.selected {
  display: initial;
}

.give-div:not(.selected) {
  display: none;
}

.give-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.g-link {
  color: #0078ff;
  cursor: pointer;
  transition: 200ms ease-in;
  text-decoration: none;
}

.g-link:hover {
  color: #003c7e;
}

.give-hdr {
  padding: 0.25rem;
  font-style: italic;
}

.give-a {
  position: relative;
  margin: 2rem;
  color: #334e68;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
}

.give-a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 2px;
  height: 0.4em;
  background-color: #8975c5;
  opacity: 0.25;
}

.give-b {
  text-align: center;
  display: flex;
  flex-direction: column;
  color: black;
}

.give-b div {
  padding: 1rem;
}

.give-type-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.section-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f7fc;
  min-height: 400px;
  padding: 2rem 0 10rem 0;
}

.q-wrapper {
  text-align: left;
  width: 75vw;
  margin-bottom: 2.5rem;
}

.pp-q {
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 10px;
  color: #334e68;
}

.pp-a {
  line-height: 1.75rem;
}

.ease-left-animation {
  animation-name: ease-left;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}

.ease-right-animation {
  animation-name: ease-right;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}

.diagnol-in-animation {
  animation-name: diagnol-in;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-duration: 1.5s;
}

.diagnol-in-op-animation {
  animation-name: diagnol-in-op;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-duration: 1.5s;
}

.fade-in-animation {
  animation-name: ease-right;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-duration: 2s;
}

.check-icon {
  color: rgb(79, 141, 199);
  font-size: 0.9rem;
  margin-right: 5px;
}

@media only screen and (max-width: 900px) {
  .give-div {
    flex-basis: 51%;
    margin: 0 0 1rem 0;
  }
}

@media only screen and (max-width: 500px) {
  .give-tab {
    min-width: 6rem;
  }

  .give-tab-container img {
    height: 1.5rem;
  }

  .give-icon {
    font-size: 1.5rem;
  }

  .giving-detail {
    padding: 2rem;
  }

  .give-scrip {
    font-size: 1.25em;
  }

  .a-sub {
    padding: 2rem;
  }
}

@keyframes diagnol-in {
  from {
    opacity: 0;
    right: 5rem;
    top: -5rem;
  }
  to {
    opacity: 1;
    right: 0;
    top: 0;
  }
}

@keyframes diagnol-in-op {
  from {
    opacity: 0;
    left: 6rem;
    top: -6rem;
  }
  to {
    opacity: 1;
    left: 0;
    top: 0;
  }
}

@keyframes ease-left {
  from {
    opacity: 0;
    left: 3rem;
  }
  to {
    opacity: 1;
    left: 0;
  }
}

@keyframes ease-right {
  from {
    opacity: 0;
    right: 3rem;
  }
  to {
    opacity: 1;
    right: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-image: linear-gradient(#6b0e3a, #793354);
}
</style>
