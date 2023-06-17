import React from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

import {
  createStyles,
  UnstyledButton,
  ThemeIcon,
  rem,
  SimpleGrid,
  Text,
  Title,
  Grid,
} from "@mantine/core";

import { providerType } from "~/common/constants";
import { getEnumArray } from "~/helper";

const useStyles = createStyles((theme) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    border: "1px solid white",
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.indigo
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

function Type() {
  const { classes, theme } = useStyles();
  const { mutate } = api.shop.updateType.useMutation();
  const router = useRouter();
  const { newShop } = router.query;

  const providerSet = getEnumArray(providerType);

  const links = providerSet.map((item) => (
    <UnstyledButton
      className={classes.subLink}
      key={item?.title}
      onClick={() => {
        mutate({ type: item?.code || 0 });

        // Only when newShop is string and not undefined
        if (newShop && typeof newShop === "string") {
          void router.push(`/open-a-shop/${newShop}/location`);
        }
      }}
    >
      <div className="flex items-center justify-center">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
      </div>

      <div className="mt-2 flex items-center justify-center">
        <Text size="sm" fw={500}>
          {item?.title}
        </Text>
      </div>
    </UnstyledButton>
  ));

  return (
    <div className="flex min-h-[68vh] items-center justify-center">
      <Grid className="max-w-[35%]">
        <Grid.Col xs={12}>
          <Title order={1} lineClamp={3}>
            Which of these describes what you
            <Text span c="blue" inherit>
              {" "}
              provide
            </Text>{" "}
            ?
          </Title>
        </Grid.Col>

        <SimpleGrid
          cols={4}
          className="ml-5 mt-5 items-center justify-center"
          breakpoints={[
            { maxWidth: "100rem", cols: 3, spacing: "md" },
            { maxWidth: "68rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
          {links}
        </SimpleGrid>
      </Grid>
    </div>
  );
}

export default Type;
