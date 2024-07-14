import React from "react";
import {
  Container,
  Stack,
  Box,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Rowing } from "@mui/icons-material";

const products = [
  { productName: "Cutlet", imagePAth: "/img/cutlet.webp" },
  { productName: "Kebab", imagePAth: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePAth: "/img/kebab.webp" },
  { productName: "Lavash", imagePAth: "/img/lavash.webp" },
  { productName: "Lavash", imagePAth: "/img/lavash.webp" },
  { productName: "Cutlet", imagePAth: "/img/cutlet.webp" },
  { productName: "Kebab", imagePAth: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePAth: "/img/kebab-fresh.webp" },
];

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack
            className="avatar-big-box"
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
          >
            <div className="avatar-title">Burak Restaurant</div>
            <div className="avatar-search-box">
              <TextField
                variant="outlined"
                placeholder="Type here"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        endIcon={<SearchIcon />}
                        onClick={() => alert("Search button clicked!")}
                      >
                        Search
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Stack>
          <Stack className="dishes-filter-section" sx={{ display: "flex" }}>
            <Stack className="dishes-filter-box">
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>
          <Stack
            className="list-category-section"
            sx={{ display: "flex", flexDirection: "row", marginTop: "41px" }}
          >
            <Stack className="product-category">
              <div className="category-main">
                <Button variant="contained" color="primary">
                  Dish
                </Button>

                <Button variant="contained" color="secondary">
                  Salad
                </Button>

                <Button variant="contained" color="secondary">
                  Drink
                </Button>

                <Button variant="contained" color="secondary">
                  Dessert
                </Button>

                <Button variant="contained" color="secondary">
                  Other
                </Button>
              </div>
            </Stack>
            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className="product-card">
                      <Stack
                        className="product-img"
                        sx={{ backgroundImage: `url(${product.imagePAth})` }}
                      >
                        <div className="product-sale">Normal size</div>
                        <Button className="shop-btn">
                          <img
                            src={"icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className="view-btn" sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{ color: 20 ? "gray" : "white" }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className="product-desc">
                        <span className="product-title">
                          {product.productName}
                        </span>
                        <div className="product-desc">
                          <MonetizationOnIcon />
                          {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className={"no-data"}>Products are not available</Box>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <div className="brands-logo"></div>
      <div className="address"></div>
    </div>
  );
}
