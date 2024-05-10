// import { Pagination } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./style.scss"
import { Products } from '../../types';

interface PaginationProps {
    nextPage: () => void
    previousPage: () => void
    page: number
    data: Products[] | undefined
}

const CustomPagination = ({ previousPage, nextPage, page, data }: PaginationProps) => {

    return (
        <div id='pagination'>
            <button
                onClick={previousPage}
                className="button-48"
                role="button"
                disabled={page === 0}
            >
                <span className="text"><ArrowLeftIcon /></span>
            </button>

            <span>Page: {page / 8 + 1}</span>

            <button
                onClick={nextPage}
                className="button-48"
                role="button"
                disabled={page >= data!.length}
            >
                <span className="text"><ArrowRightIcon /></span>
            </button>
        </div>
    )
}

export default CustomPagination