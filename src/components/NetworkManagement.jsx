import { Paper, Tabs, Tab } from '@mui/material';
import { Distributor } from './Distributor';
import { Reseller } from './Reseller';

export default function NetworkManagement() {
    return (
        <Paper sx={{ p: 2 }}>
            <Reseller />
        </Paper>
    );
}
