export function formatStringURLFriendly(string: string) {
    if (!string) return "";
    return string
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}
