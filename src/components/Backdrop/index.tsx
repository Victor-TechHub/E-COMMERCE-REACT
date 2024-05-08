import { Backdrop } from '@mui/material'

const BackDropComponent = ({ open, handleClose }: { open: boolean, handleClose: () => void }) => {
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            />
        </div>
    )
}

export default BackDropComponent