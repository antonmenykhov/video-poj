<template>
<div id="slider" class="slider">
    <div class="slider-dots">
        <div @click="changeSlideByDot(i)" v-for="slide, i in slides" :key="i" class="dot" :class="{'active': i == slideNum}">

        </div>
    </div>
    <div v-for="slide,i in slides" :key="i" class="slide">
        <div class="slide-overlay"> </div>
        <div class="slide-contacts">
            <div class="slogan">
                Умные решения для <span>вашей безопасности</span>
            </div>
            <div class="icons">
                <a href="">
                    <i class="fab fa-vk"></i>
                </a>
                <a href="">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="">
                    <i class="fab fa-viber"></i>
                </a>

            </div>
        </div>
        <div class="slide-img" :style="'background: url(\'/img/'+slide.image+'\') no-repeat center center / cover'"></div>
        <div class="slide-text">
            <div class="title">
                <h2><span>{{slide.title}}</span></h2>
            </div>
            <div class="description">
                {{slide.description}}
            </div>
            <button>
                Узнать подробнее <span class="fa fa-arrow-right"></span>
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        setTimeout(this.changeSlide, 7000)
        document.getElementById('slider').scrollTo({
                top: 50,
            })

    },
    methods: {
        changeSlide() {
            if (this.slideNum < this.slides.length - 1) {
                this.slideNum++

            } else {
                this.slideNum = 0
            }

            let slides = document.getElementsByClassName('slide')
            let elemTop = slides[this.slideNum].offsetTop - slides[this.slideNum].scrollTop + slides[this.slideNum].clientTop
            document.getElementById('slider').scrollTo({
                top: elemTop,
                behavior: 'smooth'
            })
            if (this.autoPlay) {
                setTimeout(this.changeSlide, 7000)
            }

        },
        changeSlideByDot(i) {
            this.autoPlay = false
            this.slideNum = i - 1;
            this.autoPlay = false
            this.changeSlide()
        }

    },
    data() {
        return {
            autoPlay: true,
            slideNum: 0,
            slides: [{

                    title: 'Системы видеонаблюдения',
                    description: 'Современные системы видеонаблюдения - это целый программный комплекс, которые позволяет производить эффективную обработку и анализ получаемой от всех систем безопасности информации на объекте, а также управлять и оперативно реагировать на возникающие события',
                    link: '',
                    image: 'video1.jpg'
                },
                {

                    title: 'Системы контроля доступа',
                    description: 'Системы контроля доступа - неотъемлемая часть любой системы безопасности. Граммотно спроектированная система контроля доступа позволяет удобно и безопасно организовывать пропускной режим на обьекте ',
                    link: '',
                    image: 'domofon2.jpg'
                },
                {

                    title: 'Пожарная и охранная сигнализация',
                    description: 'Системы пожарной и охранной сигнализации - базовый набор для обеспечения безопасности на объекте. Современные системы позволяют своевреммно выявлять нарушения с точонстью до 1 м ',
                    link: '',
                    image: 'skud3.jpg'
                },
            ]
        }
    },
}
</script>

<style>
.slider-dots {
    height: 50px;
    position: sticky;
    top: 80vh;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.dot {
    background: white;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin: 0 20px;
    transition: all .3s;
    cursor: pointer;
}

.dot.active,
.dot:hover {
    background: #e2c445;
    transform: scale(1.5);
}

.change-text {

    transform: translateY(100vh);
}

.slider {
    overflow: hidden;
    height: 100vh;
    width: 100%;
    position: relative;
}

.slide {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.slide::after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgb(37, 50, 55);
    content: '';
    opacity: 0.9;
    z-index: 3;
}

.slide-img {
    width: 100%;
    min-height: 100vh;
    transform: scale(1.1);
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    animation: unGrow 16s infinite;
}

.slide-contacts {
    top: 0;
    bottom: 0;
    max-width: 1170px;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.slogan {
    transform: rotate(-90deg)translateY(-162px);
    font-size: 16px;
    font-weight: 700;

    color: white;
    text-transform: uppercase;
}

.icons {
    padding-right: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icons a {
    color: #e2c445;
    text-decoration: none;
    font-size: 14px;
    margin: 15px 0;
}

span {
    color: #e2c445;

}

.slide-overlay {
    position: absolute;
    background: url('/img/overlay.png') repeat-y;
    top: 0;
    bottom: 0;
    max-width: 1170px;
    height: 100%;
    width: 100%;
    z-index: 2;
    opacity: 0.5;

}

.slide-text {
    position: absolute;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1170px;
    min-height: 100vh;
    transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);

}

.slide-text .title {
    text-align: center;
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 20px;

}

.slide-text .description {
    font-size: 16px;
    line-height: 20px;
    color: white;
    text-align: center;
    max-width: 700px;
    margin-bottom: 40px;
}

.slide-text button {
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 800;
    display: flex;
    align-items: center;
    background: none;
    cursor: pointer;
    transition: all .3s;

}

.slide-text button span {
    transition: all .3s;
    height: 60px;
    width: 60px;
    background: #e2c445;
    color: rgb(37, 50, 55);
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
}

.slide-text button:hover {
    color: #e2c445;
}

.slide-text button:hover span {
    background: white;

}

@keyframes unGrow {
    50% {
        transform: scale(1);
    }
}
@media (max-width: 1220px){
    .container, .slide-contacts{
        padding: 0 20px;
    }
    .slider .title{
        padding-right: 40px;
        padding-left: 40px;
    }
}
@media (max-width:890px){
    .slide-text .title{
        font-size: 35px;
    }
    .slide-text .description{
        padding: 0 50px;
    }
}
@media (max-width: 550px){
    
    .slide-contacts{
        display: none;
    }
    .slide-text .title{
        font-size: 20px;
    }
    .slide-text button{
        font-size: 14px;
    }
    .slide-text button span{
        height: 30px;
        width: 30px;
        font-size: 15px;
    }
}
</style>
