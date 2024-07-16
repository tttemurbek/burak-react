import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnICon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack classNameorder-left>
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic eabs example"
                  className="table-list"
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-right-top">
            <img src="/img/martin.webp" className="order-right-top-img" />
            <div className="order-right-top-text">
              <p className="order-right-top-name">Justin</p>
              <p className="order-right-top-user">USER</p>
            </div>
            <div>
              <hr
                style={{
                  width: "332px",
                  height: "2px",
                  textAlign: "left",
                  marginLeft: "0px",
                  marginTop: "20px",
                }}
              />
            </div>
            <div className="order-right-top-address">
              <img src="/icons/location.svg" />
              <p>South Korea, Busan</p>
            </div>
          </Box>
          <Box className="order-right-bottom"></Box>
        </Stack>
      </Container>
    </div>
  );
}
