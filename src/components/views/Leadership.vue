<template>
  <div class="section-1" :style="{ backgroundImage: backgroundImg }">
    <div class="overlay"></div>
    <div class="a">Leadership</div>
    <span class="a-desc"
      >Learn more about our Leadership here at New Destiny Ministries</span
    >
  </div>
  <div class="section-2">
    <div class="bio-container" style="background-color: aliceblue">
      <div class="img-container" style="float: left">
        <img class="bio-img" :src="founders" />
      </div>
      <span class="bio-name">Our Founders</span>
      <span
        >Bishop Alfred L. Ringer answered the call of God to ministry in June of
        1982. In April of 2000 he began pastorate when New Destiny Ministries,
        Dayton, Ohio was born from Resurrection Life. This ministry continues to
        grow and impact lives for the cause of Christ because of his submission
        to the will of the Lord. He faithfully served as the Assistant Pastor of
        the Faith Temple P.C.O.G. and assisted his father, Dr. Eugene Ringer,
        with the growth and staff of this viable 50+ year organization. On June
        23, 2006, in Washington, DC, under the leadership of Prelate Bishop
        Sherman S. Watkins and Vice Prelate Bishop T.D. Jakes, he was
        consecrated to the office of Bishop. Bishop Alfred Ringer was appointed
        to the position of Jurisdictional Bishop, presiding over the Midwestern
        Jurisdiction of the Higher Ground AAA, Inc. overseeing over 25 churches
        in Ohio, Michigan, Pennsylvania and Canada. Bishop Ringer was the
        recipient of many degrees and awards. He was anointed to deal with
        real-life issues. With God's help, he impacted a generation by actively
        seeking to aid in the salvation of the lost, meeting the various needs
        of the community and most importantly, changing lives for eternity.
        Bishop Alfred L. Ringer was married to the love of his life, Lenora, for
        44 years. He departed from this earthly life in October of 2020 to
        receive his Heavenly reward for his many years of service in the Lord’s
        church. His legacy continues to live through the seeds of unwavering
        love and holy living deposited in both his natural and spiritual
        children. First Lady Lenora Ringer is the wife of the honorable Bishop
        Alfred L. Ringer. First Lady Ringer has held several positions in the
        church over the years. She has served as a Secretary to the late Bishop
        Eugene Ringer and the Faith Temple PCOG, Vice-President of the Usher
        Board where she served for 20 years, and Secretary of Sunday School.
        First Lady Ringer has held several ministry positions at New Destiny,
        including Ministry Director for the Women of Destiny, Pastor's Aide,
        Usher Board, Greeters and Public Relations Departments. "What I am most
        proud of, " says Lady Ringer, "is how God blessed us with beautiful,
        productive children who love and serve Him!" Son, Jerell and wife
        Alicia, graduates of the University of Akron and daughter, Jaree, a
        graduate of Wright State University. "One of the most important
        positions I held was in service to my husband of 44 years" says First
        Lady Ringer. "My first ministry was to him". New Destiny Ministries has
        a true treasure in First Lady Ringer because of the Godly example she
        exudes and her personal aspiration to continue to be the woman God has
        called her to be. Lady Ringer continues to serve faithfully in ministry
        under the pastorate of her son, Elder Jerell Ringer.</span
      >
    </div>
    <div class="bio-container" style="background-color: aliceblue">
      <div class="img-container" style="float: right">
        <img class="bio-img" :src="pastor" />
      </div>
      <span class="bio-name">Pastor Jerell Ringer</span>
      <span
        >Pastor Jerell A. Ringer is the spiritual leader of New Destiny
        Ministries in Dayton, Ohio. He was born and raised in Dayton. Having a
        love for the game of football, through hard work and dedication, he was
        awarded a full-ride scholarship to the University of Akron for his
        talent on the field. While Pastor Ringer had plans to go to the NFL, God
        had very different plans for his life. Pastor Ringer acknowledges that
        through divinely re routing his course, God ‘saved his life’ and his
        soul. After college, in 2011, Pastor Ringer felt God leading him back to
        Dayton to assist his father, Bishop Alfred Ringer. He was licensed as a
        minister in 2014 and ordained as an elder in 2016, building the solid
        foundation for a future only God could have constructed. Following his
        father's untimely passing in 2020, Pastor Ringer assumed the role of
        senior pastor at New Destiny in 2022. His pastoral philosophy is rooted
        in the Bible and lifting up Jesus Christ. He leads with an empowering
        style, focused on developing the people around him. Pastor Ringer is
        married to his wife Alicia, and they have two children, Taylor Ann, and
        Ellis Jerell. Pastor Ringer is bi-vocational, working as a master
        recruiter in corporate staffing and in the Kingdom of God. Pastor
        Ringer's vision for New Destiny is to build a growing community of true
        believers who positively impact God's Kingdom and their communities. He
        aims to fulfill this vision through the NDM framework - nurturing a
        healthy church body that is spiritually nourished and equipped for
        growth.
      </span>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "../layout/Footer.vue"
import { ref, onMounted } from "vue"
import founders from "../../assets/founders.jpg"
import pastor from "../../assets/pastor.png"
import background from "../../assets/background_color.png"

const backgroundImg = ref(`url(${background})`)

onMounted(() => {
  var eleLength = document.querySelectorAll(`.img-container`).length
  for (let i = 0; i < eleLength; i++) {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const t = entry.target
        var direction = ""
        if (i % 2 == 0) {
          direction = "ease-left-animation"
        } else {
          direction = "ease-right-animation"
        }

        if (entry.isIntersecting) {
          t.classList.add(direction)
          return // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        t.classList.remove(direction)
      })
    }).observe(document.querySelectorAll(`.img-container`)[i])
  }
})
</script>

<style scoped>
.section-1 {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 15rem;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 75px;
}
.section-2 {
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  align-items: center;
  justify-content: center;
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

.a-desc {
  color: white;
  padding: 0 1.25rem 5rem 1.25rem;
  z-index: 2;
  text-align: center;
}

.bio-container {
  max-width: 90vw;
  line-height: 2;
  padding: 1rem;
  margin-bottom: 3rem;
  border-radius: 5px;
}

.img-container {
  margin: 1rem;
  position: relative;
  overflow: hidden;
  transition: transform 300ms ease-in-out;
  border-radius: 5px;
}

.img-container:hover {
  transform: scale(0.99);
}

.img-container:hover .bio-img {
  transform: scale(1.05);
}

.bio-img {
  height: auto;
  width: 100%;
  transition: transform 300ms ease-in-out;
  max-height: 300px;
  border-radius: 5px;
}

.bio-name {
  display: block;
  font-weight: 600;
  font-size: 1.75rem;
}

.bio-desc {
  line-height: 1.5rem;
  overflow-y: auto;
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

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-image: linear-gradient(#6b0e3a, #793354);
}
</style>
