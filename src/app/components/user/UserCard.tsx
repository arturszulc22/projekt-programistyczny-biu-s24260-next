import { FC } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const UserCard: FC = ({ user }) => {
  const truncate = (string, length = 120) => {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="bg-primary text-primary-rose dark:bg-dark-primary dark:text-dark-primary-light-blue">
      <Link href={"/profile/" + user.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="h-64"
            image={user.imageURI}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.firstName} {user.secondName}
            </Typography>
            <Typography variant="body2">
              {truncate(user.shortDescription)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" className="bg-primary-rose dark:bg-dark-primary-blue hover:bg-primary-rose hover:dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue">
          follow
        </Button>
        <Button size="small" className="text-primary-rose px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue">
          remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
