import axios from 'axios'

const BRANDS = '/api/brands'

export const BrandsService = {
	async brandById(brandId: string) {
		return await axios.get(`${BRANDS}/${brandId}`)
	},

	async getSimilarById(brandId: string) {
		return await axios.get(`${BRANDS}/similar/${brandId}`)
	},
}
