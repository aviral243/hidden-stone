/* eslint-disable no-param-reassign */
import React from "react";
import PropTypes from "prop-types";
import { Button, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: "none",
    minWidth: "fit-content",
    lineHeight: "unset"
  },
  label: {
    whiteSpace: "nowrap"
  },
  containedPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,

    "&:hover": {
      backgroundColor: theme.palette.primary.hover
    },
    "&:disabled": {
      backgroundColor: theme.palette.primary.disabled,
      color: theme.palette.common.white,
      cursor: "not-allowed"
    }
  },

  textPrimary: {
    backgroundColor: "Transparent",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.hover,
      backgroundColor: "Transparent"
    },
    "&:active": {
      color: theme.palette.primary.active,
      backgroundColor: "Transparent"
    },
    "&:disabled": {
      color: theme.palette.primary.disabled,
      cursor: "not-allowed",
      backgroundColor: "Transparent"
    }
  }
}));

const MuIButton = ({
  label,
  variant = "contained",
  color = "primary",
  isDisabled,
  handleSubmit,
  size,
  startIcon,
  endIcon,
  className,
  fullWidth,
  spinner,
  disableRipple,
  ...props
}) => {
  const propClasses = className;
  const classes = useStyles();

  const customClass = variant + color.charAt(0).toUpperCase() + color.slice(1);

  const buttonLabel = label || "Save";
  const lgBreakpoint = useMediaQuery(theme => theme.breakpoints.up("lg"));
  size = lgBreakpoint ? size : "medium";

  return (
    <>
      <Button
        color={"primary"}
        variant={"contained"}
        type="submit"
        disabled={isDisabled || spinner}
        size={size}
        onClick={handleSubmit}
        disableElevation
        fullWidth={!!fullWidth}
        disableRipple={!!disableRipple}
        classes={{
          root: classes.root,
          containedPrimary: classes[customClass],
          label: classes.label
        }}
        className={`${propClasses}`}
        startIcon={startIcon}
        endIcon={endIcon}
        {...props}
      >
        {spinner ? "" : buttonLabel}
      </Button>
    </>
  );
};

MuIButton.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.object,
  isDisabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  startIcon: PropTypes.object,
  endIcon: PropTypes.string,
  fullWidth: PropTypes.bool,
  spinner: PropTypes.bool,
  disableRipple: PropTypes.bool,
  color: PropTypes.string,
  classes: PropTypes.object
};

export default MuIButton;
