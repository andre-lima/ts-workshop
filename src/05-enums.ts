/**
 * Enums
 */

enum UserResponse {
    No,
    Yes,
}

function respond(recipient: string, message: UserResponse): void {
    // ...
}

respond("Are you awesome?", UserResponse.Yes);
respond("Are you awesome?", UserResponse.Maybe);
respond("Are you awesome?", "No");
