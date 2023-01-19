import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from "@mantine/core";
import ContainerTwitterCard from "./TwitterComponents/ContainerTwitterCard";
import TwitterCard from "./TwitterComponents/TwitterCard";
import { Contact } from "./Contact/Contact";
import { ContactIconsList } from "./Contact/ContactIconList";
import Modals from "./Modal/Modals";
import PersonCard from "./PersonCard/PersonCard";
import SecondaryCard from "./SecondaryCards/SecondaryCard";
import SecondaryCards from "./SecondaryCards/SecondaryCards";
import { Tateti } from "./TatetiComponents/Tateti";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage:
      "linear-gradient(230deg, rgba(130, 201, 30, 0) 0%, #062343 90%), url('image2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    // height: 1900,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },
  containerCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 1,
    paddingTop: theme.spacing.xl * -0.5,
    zIndex: 1,
    position: "relative",
    backgroundColor: (255, 255, 255),

    [theme.fn.smallerThan("sm")]: {
      height: 100,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },
  subtitle: {
    color: theme.white,
    fontSize: 40,
    fontWeight: 500,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

const PrincipalCard = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          Jorge Hara
          <br />
          Development Frontend
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
        Never give up, because you never know if the next try is going to be the one that works. 
          <br />-Mary Kay Ash-
        </Text>
        <br />
        <Modals />

        <br />
        <br />
        <SecondaryCard/>
      </Container>
      <Container className={classes.containerCard}>
      <Title className={classes.subtitle}>
         Component Twitter
        </Title><br />
        <ContainerTwitterCard/>
      </Container>

      <Container className={classes.containerCard}>
      <Title className={classes.subtitle}>
         Component PersonsCard GetArray from Api 
        </Title><br />
      <PersonCard/>
      </Container>

      <Container className={classes.containerCard}>
      <Title className={classes.subtitle}>
         Component Game TaTeTi 
        </Title><br />
        <Tateti/>
      </Container>

dsdsadasdasdasdasdasdadas
      <Container className={classes.container}>
      </Container>
    </div>
  );
};

export default PrincipalCard;
