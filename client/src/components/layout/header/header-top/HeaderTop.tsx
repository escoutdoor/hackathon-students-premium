'use client'
import s from './header-top.module.scss'
import { FC, useState } from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Modal from '@/components/layout/header/header-top/modal/Modal'
import HeaderAuthButtons from './header-auth-buttons/HeaderAuthButtons'
import { useFilterParams } from '@/hooks/useFilterParams'

const HeaderTop: FC = () => {
	const { push } = useRouter()

	const { query } = useFilterParams()

	const [isModalOpen, setIsModalOpen] = useState(false)
	const onModalCloseRequest = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<div className={s.top}>
				<Link href={'/'}>
					<Image
						width={172}
						height={36}
						src="https://cdn.studentbeans.com/static/web/assets/images/sb_dark_logo.svg"
						alt="logo"
					/>
				</Link>

				<div className={s.search} onClick={() => setIsModalOpen(true)}>
					<FiSearch />
					<p className={s.input}>
						{query ? query : 'Search Student Beans'}
					</p>
				</div>
				<HeaderAuthButtons />
			</div>
			<Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} />
		</>
	)
}
export default HeaderTop
