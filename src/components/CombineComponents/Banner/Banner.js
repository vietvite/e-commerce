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
			time: 2000
		}
	}
	componentDidMount = () => {
		let t = "" + styles.box;
		let widthSlide = document.getElementsByClassName(t)[0].clientWidth;
		this.setState({
			widthSlide: widthSlide
		});
		let setIn = setInterval(() => {
			this.onRightClick();
		}, this.state.time);


	}
	onRightClick = () => {


		let img = document.getElementsByClassName('slide');
		let max = (this.state.widthSlide * img.length) - this.state.widthSlide;
		let t = "" + styles.main;
		let main = document.getElementsByClassName(t)[0];
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
		var img = document.getElementsByClassName('slide');
		var max = (this.state.widthSlide * img.length) - this.state.widthSlide;
		var t = "" + styles.main;
		var main = document.getElementsByClassName(t)[0];

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
			return <div className="slide"><img src={e} /></div>;
		})
	}
	render() {
		console.log(styles, "asd");


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

