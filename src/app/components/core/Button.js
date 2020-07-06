/* eslint-disable no-param-reassign */
import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles(theme => ({
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
  },
  textWhite: {
    backgroundColor: "Transparent",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: "Transparent"
    },
    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: "Transparent"
    },
    "&:disabled": {
      color: theme.palette.common.white,
      cursor: "not-allowed",
      backgroundColor: "Transparent"
    }
  }
}));

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: "none",
    minWidth: "fit-content",
    lineHeight: "unset",
    borderRadius: "0"
  },
  label: {
    whiteSpace: "nowrap"
  },
  sizeLarge: {
    fontSize: "1.2rem",
    minHeight: "3.5rem",
    minWidth: "8rem"
  }
}));

const MuIButton = ({
  label,
  variant = "contained",
  color = "primary",
  isDisabled,
  handleSubmit,
  size = "large",
  className,
  fullWidth,
  spinner,
  disableRipple,
  ...props
}) => {
  const propClasses = className;
  const classes = useStyles();
  const customClasses = customStyles();

  const customClass = variant + color.charAt(0).toUpperCase() + color.slice(1);

  const buttonClasses = {
    ...classes,
    containedPrimary: customClasses[customClass]
  };
  const buttonLabel = label || "Save";
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
        classes={buttonClasses}
        className={`${propClasses}`}
        {...props}
      >
        {spinner ? "" : buttonLabel}
      </Button>
    </>
  );
};

MuIButton.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  spinner: PropTypes.bool,
  disableRipple: PropTypes.bool,
  color: PropTypes.string,
  classes: PropTypes.object
};

export default MuIButton;
