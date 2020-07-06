import React from "react";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";

const FlexBox = ({ children, ...props }) => {
  const initalProps = { display: "flex", flexDirection: "row" };
  return (
    <Box {...initalProps} {...props}>
      {children}
    </Box>
  );
};

FlexBox.propTypes = {
  children: PropTypes.elementType
};

export default FlexBox;
