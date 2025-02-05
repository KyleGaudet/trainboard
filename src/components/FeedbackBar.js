import {
    Box,
    Flex,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
} from '@chakra-ui/react';

export default function FeedbackBar() {
    return (
        <>
            <Box bg="white" px={4} alignItems="center" width="fit-content" margin="auto" border="solid 5px black" marginTop="1%">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack margin="auto" display={{ base: 'none', md: 'flex' }}>
                        <Button bg="green" color="white">
                            Like
                        </Button>

                        <Button bg="red">
                            Dislike
                        </Button>

                        <Flex alignItems={'center'}>
                            <Menu >
                                <MenuButton
                                    as={Button}
                                    cursor={'pointer'}
                                    label={'Muscle Group...'}
                                    bg="gold"
                                    >
                                    Export
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Image</MenuItem>
                                    <MenuDivider />
                                    <MenuItem>Pdf</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>

                        <Button bg="green" color="white">
                            Favorite
                        </Button>

                        <Button bg="red">
                            Report
                        </Button>
                        
                    </HStack>
                </Flex>
            </Box>
        </>
    );
}