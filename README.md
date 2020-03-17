# Torre Williams Auth0 POC

Based on Sample 01 - Logging In and Gated Content

This sample demonstrates:

- Logging in to Auth0 using Redirect Mode
- Accessing profile information that has been provided in the ID token
- Extending profile info with rules based attributes
- Automatic linking of social and username/password identities
- dymanic content based on email verification

## How to test

1) Navigate to https://awesome-gates-d6a374.netlify.com/
2) Attempt to login via the right side login button
3) You should be redirected to the home page with content based on your ID token
4) you can view the console.log for a full dump of claims, or navigate to the profile section in the right hand menu.
