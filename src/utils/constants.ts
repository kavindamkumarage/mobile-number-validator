export const VALIDATION_REGEX = (min: number, max: number, isInternational?: boolean) => {
    if (isInternational) {
        return new RegExp(`^(?:\\+?\\d{2,4}[\\s-]*)?\\d{${min},${max}}$`)
    }
    return new RegExp(`^\\d{${min},${max}}$`)
}