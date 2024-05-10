import { Pagination } from '@mui/material';
import { getStore } from '../../hooks/getStore';
import "./style.scss"

const CustomPagination = () => {
    const { data } = getStore()
    return (
        <div id='pagination'>
            <Pagination count={data?.length} shape="rounded" />
        </div>
    )
}

export default CustomPagination