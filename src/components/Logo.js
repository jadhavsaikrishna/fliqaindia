import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

export default function Logo() {
  return (
    <>
      <Navbar btn={true} />
      <Box p={12}>
        <Typography variant="h3"> What is Logo design ?</Typography>
        <Typography variant="h5">
          Logo tells the story of your brand. It enhances your brand image and
          speaks to your audience. Logo design makes the first impression for
          you in your working environment. Gives your business and brand an
          identity and projects a professional image. It creates memorable
          visuals to the outside world and build loyalty.
        </Typography>
      </Box>
    </>
  );
}
