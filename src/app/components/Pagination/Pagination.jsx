import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import './Pagination.css';

const Pagination = () => {
	const totalPages = 20;
	const currentPage = 3;
	const [pagesToDisplay, setPagesToDisplay] = useState([]);

	useEffect(() => {
		preparePagesToDisplay();
	}, [totalPages, currentPage]);

	const preparePagesToDisplay = () => {
		const pages = [];
		if (totalPages <= 6) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else if (
			currentPage == 1 ||
			currentPage == totalPages ||
			currentPage == totalPages - 1 ||
			currentPage == totalPages - 2
		) {
			for (let i = 1; i <= 3; i++) {
				pages.push(i);
			}
			for (let i = totalPages - 2; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			for (let i = currentPage - 1; i <= currentPage + 1; i++) {
				pages.push(i);
			}
			for (let i = totalPages - 2; i <= totalPages; i++) {
				pages.push(i);
			}
		}
		setPagesToDisplay(pages);
	};

	return (
		<div>
			<Button
				isDisabled={currentPage === 1}
				colorScheme='black'
				variant='link'
				as={Link}
				to='/login'
			>
				First
			</Button>
			{pagesToDisplay && (
				<>
					{pagesToDisplay.slice(0, 3).map((page) => (
						<Button
							className={
								page === currentPage ? 'page-active' : ''
							}
							key={page}
							colorScheme='black'
							variant='link'
							as={Link}
							to='/login'
						>
							{page}
						</Button>
					))}
					<span>...</span>
					{pagesToDisplay.slice(3, 6).map((page) => (
						<Button
							className={
								page === currentPage ? 'page-active' : ''
							}
							key={page}
							colorScheme='black'
							variant='link'
							as={Link}
							to='/login'
						>
							{page}
						</Button>
					))}
				</>
			)}
			<Button
				isDisabled={currentPage === totalPages}
				colorScheme='black'
				variant='link'
				as={Link}
				to='/login'
			>
				Last
			</Button>
		</div>
	);
};

export default Pagination;
