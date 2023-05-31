import React from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  rem,
} from "@mantine/core";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { api } from "~/utils/api";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    borderBottom: 0,
  },

  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

function ApplicationHeader() {
  const { classes } = useStyles();

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0 }}
      className={classes.header}
    >
      <Container className={classes.inner} fluid>
        <Group spacing={5} className={classes.links}>
          <h5>My App</h5>
        </Group>

        <div>
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton />
          </SignedOut>
        </div>
      </Container>
    </Header>
  );
}

export default ApplicationHeader;
