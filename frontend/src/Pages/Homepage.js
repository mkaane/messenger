import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
	return (
		<Container maxW="xl" centerContent>
			<Box
				d="flex"
				justifyContent="center"
				p={3}
				bg={"white"}
				w="100%"
				m="40px 0 15px 0"
				borderRadius="lg"
				borderWidth="1px"
				opacity="90%"
			>
				<Text
					textAlign={"center"}
					fontSize="4xl"
					fontFamily="Work sans"
					color="black"
				>
					Messanger App
				</Text>
			</Box>

			<Box
				p={4}
				bg={"white"}
				w="100%"
				m="40px 0 15px 0"
				borderRadius="lg"
				borderWidth="1px"
				opacity="90%"
				color={"black"}
			>
				<Tabs variant="soft-rounded">
					<TabList mb={"1em"}>
						<Tab width={"50%"}>Login</Tab>
						<Tab width={"50%"}>Sign Up</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Login />
						</TabPanel>
						<TabPanel>
							<Signup />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
};

export default Homepage;
