'use client'
import { NextPage } from 'next'
import s from './home.module.scss'
import { FiSearch } from 'react-icons/fi'
import DiscountItem from '@/components/ui/discount-item/DiscountItem'
import Carousel from './carousel/Carousel'
import BrandList from '@/components/ui/brand-list/BrandList'

const Home: NextPage = () => {
	return (
		<div className={s.home}>
			<div className={s.banner}>
				<div className={s.container}>
					<h1 className={s.title}>
						Making student life a little sweeter and a lot cheaper
					</h1>
					<div className={s.search}>
						<FiSearch />
						<p className={s.input}>Search Student Beans</p>
					</div>
				</div>
			</div>
			<div className="wrapper">
				<DiscountItem />
				<BrandList />
				<Carousel />
			</div>
		</div>
	)
}

export default Home
