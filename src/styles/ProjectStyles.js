const styles = (theme) => ({
    root: {
        paddingTop: `${theme.mixins.toolbar.minHeight}px`,
        paddingBottom: `${theme.mixins.toolbar.minHeight}px`,
        minHeight: `100vh`,
        boxSizing: "border-box",
        backgroundColor: "#F5F5F5"
    },
    cardMedia: {
        height: 350,
    },
    cardActions: {
        justifyContent: "center",
        flexWrap: "wrap"
    },
    chip: {
        color: "#018786",
        borderColor: "#018786",
        marginBottom: "3px"
    },
    button: {
        marginBottom: "3px"
    }
});

export default styles;