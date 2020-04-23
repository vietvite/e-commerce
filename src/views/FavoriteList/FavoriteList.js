import React, { Component } from 'react'
import styles from './FavoriteList.module.scss'
import Container from '../../components/CombineComponents/Container/Container'
import { Trash2 } from 'react-feather'
import ButtonGraySm from '../../components/BaseComponents/ButtonGraySm/ButtonGraySm'

export default class FavoriteList extends Component {
	render() {
		return (
			<Container>
				<div className={styles.FavoriteList}>
					<div className={styles.name}>
						Sản phẩm yêu thích
                    </div>
					<hr></hr>
					<div className={styles.listfavorite}>
						<section className={styles.title}>
							<h2 className={styles.nameimg}>Hình ảnh</h2>
							<h2 className={styles.navLink}>Sản phẩm</h2>
						</section>
						<section className={styles.contentlist}>
							<div className={styles.contentlistimg}>
								<img href="./img/banner1.jpg" alt="" />
							</div>
							<div className={styles.contentlistproduct}>
								<a href="https://www.facebook.com/sang.ptt.2303 " className={styles.link}>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia recusandae atque laudantium
								</a>
								<div className={styles.btn}>
									<ButtonGraySm >
										<Trash2 size='0.9rem' strokeWidth='1.5px'
											style={{ marginRight: '0.125rem' }} />
   									Xóa
          						</ButtonGraySm>
								</div>

							</div>
						</section>
						<section className={styles.contentlist}>
							<div className={styles.contentlistimg}>
								<img href="./img/banner1.jpg" alt="" />
							</div>
							<div className={styles.contentlistproduct}>
								<a href="https://www.facebook.com/sang.ptt.2303 " className={styles.link}>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia recusandae atque laudantium
								</a>
								<div className={styles.btn}>
									<ButtonGraySm >
										<Trash2 size='0.9rem' strokeWidth='1.5px'
											style={{ marginRight: '0.125rem' }} />
   									Xóa
          						</ButtonGraySm>
								</div>

							</div>
						</section>
					</div>


				</div>
			</Container>
		)
	}
}
