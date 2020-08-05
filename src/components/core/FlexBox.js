import React from "react";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";

const FlexBox = ({ children, ...props }) => {
  const initalProps = { display: "flex" };
  return (
    <Box {...initalProps} {...props}>
      {children}
    </Box>
  );
};

const FlexBoxRow = ({ children, ...props }) => {
  const initalProps = { display: "flex", flexDirection: "row" };
  return (
    <Box {...initalProps} {...props}>
      {children}
    </Box>
  );
};

const FlexBoxCol = ({ children, ...props }) => {
  const initalProps = { display: "flex", flexDirection: "column" };
  return (
    <Box {...initalProps} {...props}>
      {children}
    </Box>
  );
};
const FlexBoxCenter = ({ children, ...props }) => {
  const initalProps = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  };
  return (
    <Box {...initalProps} {...props}>
      {children}
    </Box>
  );
};

FlexBox.propTypes = {
  children: PropTypes.array
};

FlexBoxRow.propTypes = {
  children: PropTypes.array
};

FlexBoxCol.propTypes = {
  children: PropTypes.array
};

FlexBoxCenter.propTypes = {
  children: PropTypes.array
};

FlexBox.Row = FlexBoxRow;
FlexBox.Col = FlexBoxCol;
FlexBox.Center = FlexBoxCenter;
export default FlexBox;
