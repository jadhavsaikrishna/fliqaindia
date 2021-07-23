import one from "../assests/one.png";
import two from "../assests/two.png";
import three from "../assests/three.png";
import four from "../assests/four.png";
import five from "../assests/five.png";
import { Grid, Box } from "@material-ui/core";
export default function Carousel() {
  const images = [
    {
      name: "one",
      img: one
    },
    {
      name: "two",
      img: two
    },
    {
      name: "three",
      img: three
    },
    {
      name: "four",
      img: four
    },
    {
      name: "five",
      img: five
    }
  ];

  return (
    <Box display="flex" justifyContent="space-between">
      {images.map((image) => {
        return (
          <Grid item>
            <img
              style={{ width: "105px", height: "89px" }}
              src={image.img}
              alt={image.name}
            />
          </Grid>
        );
      })}
    </Box>
  );
}
