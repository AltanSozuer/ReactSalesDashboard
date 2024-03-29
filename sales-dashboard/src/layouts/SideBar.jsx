import { Box,  List} from "@mui/material";
import {
    Group,
    Home,
    Settings,
    Storefront,
    ShoppingCart,
    Store
  } from "@mui/icons-material";
import ListItemComposition from "../components/organisms/ListItemComposition";


export default function SideBar() {
  return (
      <Box className="shadow-box" flex={1} p={2} sx={{ minHeight: "calc(130vh - 10px )" ,position:"sticky", top: 0 }}>
          <List>
            <ListItemComposition to="/"
                  icon= { <Home />}
                  text="Homepage"
                  disablePadding={true} />
            <ListItemComposition to="/user"
                  icon= { <Group />}
                  text="Users"
                  disablePadding={true} />
            <ListItemComposition to="/product"
                  icon= { <Store />}
                  text="Products"
                  disablePadding={true} />
            <ListItemComposition to="/sales"
                  icon= { <Storefront  />}
                  text="Sales"
                  disablePadding={true} />
            <ListItemComposition to="/order"
                  icon= { <ShoppingCart />}
                  text="Orders"
                  disablePadding={true} />

            <ListItemComposition to="/settings"
                  icon= { <Settings />}
                  text="Settings"
                  disablePadding={true} />
          </List>
      </Box>
  )
}