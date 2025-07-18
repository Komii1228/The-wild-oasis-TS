import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import Button from '../ui/Button';
import { useState } from 'react';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function Cabins() {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter / Sort</p>
            </Row>
            <Row type="vertical">
                <CabinTable />

                <Button onClick={() => setShowForm(!showForm)}>
                    Add new cabin
                </Button>

                {showForm && <CreateCabinForm />}
            </Row>
        </>
    );
}

export default Cabins;
