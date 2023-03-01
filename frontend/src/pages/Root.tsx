import { Fragment } from 'react';
// import { Outlet, useNavigation } from 'react-router-dom';
import Sticker from '../components/Sticker/Sticker';
import Model from '../components/Model';
import Box from '../components/Box';
import ItemHandlerBox from '../components/descriptionPart/ItemHandlerBox';
import Options from '../components/textureOptions/Options';

const RootLayout = () => {
    // const navigation = useNavigation();

    return <Fragment>
        <Sticker />
        <main>
            <Box>
				<Model />
			</Box>
			<ItemHandlerBox />
			<Options />
        </main>
    </Fragment>
}

export default RootLayout;