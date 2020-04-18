import React from 'react'
import chicago from './img/chicago.jpg'
import la from './img/la.jpg'
import ny from './img/ny.jpg'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import styles from './Banner.module.scss'


const slides = [chicago, ny, la]

let chuyen = 0;

class Banner extends React.Component {
    constructor() {
        super()
        this.state = {
            'current': 0,
            widthSlide: 0,
            time: 2000,
            interval: undefined
        }
    }
    componentDidMount = () => {
        const t = "" + styles.box;
        const widthSlide = document.getElementsByClassName(t)[0].clientWidth;
        this.setState({
            widthSlide: widthSlide
        });
        const setIn = setInterval(() => {
            this.onRightClick();
        }, this.state.time);
        this.setState({ interval: setIn })
    }
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }
    onRightClick = () => {
        const img = document.getElementsByClassName('slide');
        const max = (this.state.widthSlide * img.length) - this.state.widthSlide;
        const t = "" + styles.main;
        const main = document.getElementsByClassName(t)[0];
        this.setState({
            time: this.state.time,
        })
        if (chuyen < max) {
            chuyen += this.state.widthSlide;
        }
        else {
            chuyen = 0;
        }
        main.style.marginLeft = '-' + chuyen + 'px';
    }

    onLeftClick = () => {
        const img = document.getElementsByClassName('slide');
        const max = (this.state.widthSlide * img.length) - this.state.widthSlide;
        const t = "" + styles.main;
        const main = document.getElementsByClassName(t)[0];

        if (chuyen === 0) {
            chuyen += max;
        }
        else if (chuyen > 0) {
            chuyen -= this.state.widthSlide;
        }
        main.style.marginLeft = '-' + chuyen + 'px';
    }
    loadImage = () => {
        return slides.map((e, index) => {
            return <div className="slide"><img src={e} alt="banner" /></div>;
        })
    }
    render() {
        return (
            <div className={styles.Banner}>
                <div className={styles.arrowLeft} onClick={this.onLeftClick} >
                    <ArrowLeftCircle color="white"
                    />
                </div>
                <div className={styles.arrowRight} onClick={this.onRightClick}>
                    <ArrowRightCircle color="white" />
                </div>
                <div className={styles.box} >
                    <div className={styles.main} >
                        {this.loadImage()}
                    </div>
                </div>
            </div>
        )
    }

}

export default Banner