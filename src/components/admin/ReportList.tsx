import {
  Typography,
  Sheet,
  Table,
  Chip,
  Box,
  Avatar,
  IconButton,
  Dropdown,
  Menu,
  MenuItem,
  Divider,
  ColorPaletteProp,
  MenuButton,
} from "@mui/joy";

import CommentIcon from "@mui/icons-material/Comment";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const ReportList = ({ items }) => {
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
            <th style={{ width: 140, padding: "12px 6px" }}>Created At</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Type</th>
            <th style={{ width: 240, padding: "12px 6px" }}>Author</th>
            <th style={{ width: 140, padding: "12px 6px" }}></th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr key={row.id}>
              <td>
                <Typography level="body-xs">{row.id}</Typography>
              </td>
              <td>
                <Typography level="body-xs">{row.date}</Typography>
              </td>
              <td>
                <Chip
                  variant="soft"
                  size="sm"
                  startDecorator={
                    {
                      Post: <AllInboxIcon className="w-5 h-5" />,
                      Comment: <CommentIcon className="w-5 h-5" />,
                    }[row.status]
                  }
                  color={
                    {
                      Post: "warning",
                      Comment: "success",
                    }[row.status] as ColorPaletteProp
                  }
                >
                  {row.status}
                </Chip>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar size="sm" src={row.author.imageURI}></Avatar>
                  <div>
                    <Typography level="body-xs">
                      {row.author.firstName + " " + row.author.secondName}
                    </Typography>
                    <Typography level="body-xs">
                      {row.author.firstName}
                    </Typography>
                  </div>
                </Box>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Dropdown>
                    <MenuButton
                      slots={{ root: IconButton }}
                      slotProps={{
                        root: {
                          variant: "plain",
                          color: "neutral",
                          size: "sm",
                        },
                      }}
                    >
                      <MoreHorizRoundedIcon />
                    </MenuButton>
                    <Menu size="sm" sx={{ minWidth: 140 }}>
                      <MenuItem>Show</MenuItem>
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

export default ReportList;
