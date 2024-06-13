import {
  Typography,
  Sheet,
  Table,
  Box,
  Avatar,
  IconButton,
  Dropdown,
  Menu,
  MenuItem,
  Divider,
  MenuButton,
} from "@mui/joy";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const UserList = ({ items }) => {
  return (
    <Sheet
      className="OrderTableContainer"
      variant="outlined"
      sx={{
        display: { xs: "flex", md: "block" },
        width: "100%",
        borderRadius: "sm",
        flexShrink: 1,
        overflow: "auto",
        minHeight: 0,
      }}
    >
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          "--TableCell-headBackground": "var(--joy-palette-background-level1)",
          "--Table-headerUnderlineThickness": "1px",
          "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
          "--TableCell-paddingY": "4px",
          "--TableCell-paddingX": "8px",
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 120, padding: "12px 6px" }}>Id</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Avatar</th>
            <th style={{ width: 140, padding: "12px 6px" }}>First Name</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Last Name</th>
            <th style={{ width: 240, padding: "12px 6px" }}>Email</th>
            <th style={{ width: 140, padding: "12px 6px" }}></th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => (
            <tr key={user.id}>
              <td>
                <Typography level="body-xs">{user.id}</Typography>
              </td>
              <td>
                <Avatar size="sm" src={user.imageURI}></Avatar>
              </td>
              <td>
                <Typography level="body-xs">{user.firstName}</Typography>
              </td>
              <td>
                <Typography level="body-xs">{user.secondName}</Typography>
              </td>
              <td>
                <Typography level="body-xs">{user.email}</Typography>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "end" }}>
                  <Dropdown className="ml-auto">
                    <MenuButton
                      slots={{ root: IconButton }}
                      slotProps={{
                        root: {
                          variant: "plain",
                          color: "neutral",
                          size: "sm",
                        },
                      }}
                      className="ml-auto lg:ml-0"
                    >
                      <MoreHorizRoundedIcon />
                    </MenuButton>
                    <Menu size="sm" sx={{ minWidth: 140 }}>
                      <MenuItem>Block</MenuItem>
                      <Divider />
                      <MenuItem color="danger">Delete</MenuItem>
                    </Menu>
                  </Dropdown>
                </Box>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default UserList;
