// material
import { GlobalStyles as GlobalThemeStyles } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function GlobalStyles() {
  const theme = useTheme()

  return (
    <GlobalThemeStyles
      styles={{
        "*": {
          "&::-webkit-scrollbar": {
            width: 5,
            height: 5,
            background: "#fff",
          },

          "&::-webkit-scrollbar-track": {
            background: "#F0F0F0",
          },

          "&::-webkit-scrollbar-thumb": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            background: "#ABABAB",
            borderRadius: 12,
          },
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        ".button": {
          ":hover": {
            cursor: "pointer",
          },
        },
        p: {
          margin: 0,
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        textarea: {
          "&::-webkit-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::-moz-placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          "&:-ms-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::placeholder": {
            color: theme.palette.text.disabled,
          },
          border: "1px solid #E1E4E8",
          borderRadius: "2px",
          backgroundColor: "#FAFBFC",
          boxShadow: "inset 0px 2px 0px rgba(225, 228, 232, 0.2)",
        },

        img: { display: "block", maxWidth: "100%" },

        // Lazy Load Img
        ".blur-up": {
          WebkitFilter: "blur(5px)",
          filter: "blur(5px)",
          transition: "filter 400ms, -webkit-filter 400ms",
        },
        ".blur-up.lazyloaded ": {
          WebkitFilter: "blur(0)",
          filter: "blur(0)",
        },
      }}
    />
  )
}
