import { withAuth } from 'next-auth/middleware';

// protect Node routes with authentication
export default withAuth;

export const config = {
    matcher: ["/searchmusic/", "/searchmusic/:id*", "/register"],
};