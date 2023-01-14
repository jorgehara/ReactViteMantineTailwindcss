import { createStyles, Paper, Text, Title, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    width: '100%',
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '5px',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.9,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

// interface ArticleCardImageProps {
//   image: string;
//   title: string;
//   category: string;
// }

export function SecondaryCards({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(imagen1.jpg)` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xl">
        Welcome to project! 
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read more
      </Button>
    </Paper>
  );
}
export default SecondaryCards;
