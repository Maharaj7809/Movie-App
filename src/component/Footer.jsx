import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../theme";

function Footer() {
   const {
    palette: { neutral },
  } = useTheme();
  return (
   
    <Box marginTop="70px" padding="40px 0"    backgroundColor={neutral.light} >
      <Box
        width="95%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="10px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            // fontWeight="bold"
            mb="20px"
            color={shades.secondary[500]}
          >
            MOVIE EXTREME
          </Typography>
          <div>
            Search Your fabourate Movies that are recently in cinema and watch with full of
             comfort without any charges  enjoy your movie time and get your time utilized
             you can search tv serial / Movies both

          </div>
        </Box>

        <Box>
          <Typography variant="h4"  // fontWeight="bold"
           mb="20px">
            About Us
          </Typography>
          <Typography mb="20px">Careers</Typography>
          <Typography mb="20px">Our Stores</Typography>
          <Typography mb="20px">Terms & Conditions</Typography>
          <Typography mb="20px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4"
          //  fontWeight="bold" 
           mb="20px">
            Customer Care
          </Typography>
          <Typography mb="20px">Help Center</Typography>
          <Typography mb="20px">Track Your Order</Typography>
          <Typography mb="20px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="20px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4"
          //  fontWeight="bold" 
           mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 north Whatever Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: praveenmaharaj@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  
  );
}

export default Footer;