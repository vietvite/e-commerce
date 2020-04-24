import React from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import styles from "./Banner.module.scss";
import config from '../../../config'
import { connect } from "react-redux";
import { fetchBannerIfNeeded } from '../../../redux/banner/actionCreator'

let chuyen = 0;

class Banner extends React.Component {
    constructor() {
        super()
        this.state = {
            'current': 0,
            widthSlide: 0,
            time: 5000,
            interval: undefined,
            listBanner: []
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

        // Call middleware fetch list banner
        this.props.shoundFetchBanner()
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
        const list = this.props.listBanner || []
        return list.map((banner, index) => {
            return <div key={index} className="slide"><img src={`${config.baseURL}${banner.img}`} alt="banner" /></div>;
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

const mapDispatchToProps = dispatch => ({
    shoundFetchBanner: () => dispatch(fetchBannerIfNeeded())
})

const mapStateToProps = state => ({
    listBanner: state.banner
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);