import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function CustomAlert({ error }: { error: string | undefined }) {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
            {error}
        </Alert>
    );
}