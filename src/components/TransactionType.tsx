import {Box, Stack, Typography} from "@mui/material";
import React from "react";
import StartRoundedIcon from "@mui/icons-material/StartRounded";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import MultipleStopRoundedIcon from "@mui/icons-material/MultipleStopRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import {grey} from "../themes/colors/aptosColorPalette";
import TooltipTypography from "./TooltipTypography";

type Color = "inherit" | "primary" | undefined;

function getTypeLabel(type: string): string {
  switch (type) {
    case "block_metadata_transaction":
      return "Block Metadata";
    case "genesis_transaction":
      return "Genesis Transaction";
    case "user_transaction":
      return "User Transaction";
    case "pending_transaction":
      return "Pending Transaction";
    case "state_checkpoint_transaction":
      return "State Checkpoint";
    default:
      throw `Unknown TransactionType:${type}`;
  }
}

function getTypeIcon(type: string, color?: Color) {
  switch (type) {
    case "block_metadata_transaction":
      return <SubtitlesOutlinedIcon fontSize="small" color={color} />;
    case "genesis_transaction":
      return <StartRoundedIcon fontSize="small" color={color} />;
    case "user_transaction":
      return <MultipleStopRoundedIcon fontSize="small" color={color} />;
    case "pending_transaction":
      return <UpdateRoundedIcon fontSize="small" color={color} />;
    case "state_checkpoint_transaction":
      return <OutlinedFlagIcon fontSize="small" color={color} />;
    default:
      throw `Unknown TransactionType:${type}`;
  }
}

// TODO: create an enum for transaction type
function getTypeTooltip(type: string): string {
  switch (type) {
    case "block_metadata_transaction":
      return "System-generated transactions that provide additional data for each confirmed block.";
    case "genesis_transaction":
      return "";
    case "user_transaction":
      return "A transaction generated by users of the ESChain blockchain.";
    case "pending_transaction":
      return "";
    case "state_checkpoint_transaction":
      return "System-generated transactions that save the latest state of the ESChain blockchain.";
    default:
      throw `Unknown TransactionType:${type}`;
  }
}

type TransactionTypeProps = {
  type: string;
};

export function TransactionType({type}: TransactionTypeProps) {
  return (
    <Box sx={{display: "flex", alignItems: "center", gap: 1, color: grey[450]}}>
      {getTypeIcon(type, "inherit")}
      <Typography variant="body2">{getTypeLabel(type)}</Typography>
    </Box>
  );
}

export function TableTransactionType({type}: TransactionTypeProps) {
  return (
    <Box sx={{display: "flex", alignItems: "center"}}>
      {getTypeIcon(type, "inherit")}
    </Box>
  );
}

export function TooltipTransactionType({type}: TransactionTypeProps) {
  return (
    <Box sx={{display: "flex", alignItems: "flex-start", gap: 2}}>
      {getTypeIcon(type, "inherit")}
      <Stack spacing={0.5}>
        <TooltipTypography variant="subtitle2" fontWeight={600}>
          {getTypeLabel(type)}
        </TooltipTypography>
        <TooltipTypography variant="body2">
          {getTypeTooltip(type)}
        </TooltipTypography>
      </Stack>
    </Box>
  );
}
