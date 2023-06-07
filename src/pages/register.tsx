import React from "react";
// import { Grid, Container } from "@mantine/core";

import {
  TextInput,
  Tooltip,
  Center,
  Text,
  SimpleGrid,
  Container,
  Stack,
  Grid,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: "pop-bottom-right" }}
    >
      <Text color="dimmed" sx={{ cursor: "help" }}>
        <Center>
          <IconInfoCircle size="1.1rem" stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <TextInput
      rightSection={rightSection}
      label="Tooltip shown on icon hover"
      placeholder="Your email"
    />
  );
}

function Register() {
  return (
    <Container my="md">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        <div className="flex justify-center">
          Business Name<span className="text-red-500">*</span>
        </div>

        <Stack className="flex justify-center">
          <TooltipIcon />
        </Stack>

        <Stack className="flex justify-center">
          <TooltipIcon />
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default Register;
