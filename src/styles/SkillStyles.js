const styles = (theme) => ({
    root: {
        paddingTop: `${theme.mixins.toolbar.minHeight}px`,
        paddingBottom: `${theme.mixins.toolbar.minHeight}px`,
        minHeight: `100vh`,
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        marginBottom: `${theme.mixins.toolbar.minHeight * 0.5}px`,
        marginTop: `${theme.mixins.toolbar.minHeight * 0.5}px`,
    },
    container: {
        minHeight: "70vh"
    },
    profile: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    image: {
        height: "13rem"
    },
    skills: {
        height: "fit-content",
        justifyContent: "center"
    },
    skillBlock: {
        height: "6rem",
        margin: "0.5rem 0",
    },
    box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    category: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 0.5rem",
        minWidth: "20%",
        [theme.breakpoints.down("sm")]: {
            minWidth: "30%",
        }
    },
    logos: {
        padding: "0.2em",
        display: "inline-flex",
        flexDirection: "row",
        height: "inherit"
    },
    logoDiv: {
        flexWrap: 'wrap',
        padding: '0.2em',
        display:'flex',
        flexDirection:'column',
        width: "100%",
        maxWidth:"10.5vw",
        height: "inherit",
        alignItems:"center",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "10vw",
        }
    },
})

export default styles;