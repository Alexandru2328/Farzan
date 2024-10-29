function chooseTheModel(nrLife) {
    if (nrLife === 4) {
        return "F _ _ _ _";
    }

    if (nrLife === 3) {
        return "F A _ _ _";
    }

    if (nrLife === 2) {
        return "F A Z _ _";
    }

    if (nrLife === 1) {
        return "F A Z A _"
    }

    if (nrLife === 0) {
        return "F A Z A N"
    }
}