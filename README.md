# Unhandled Error in Express.js Route Parameter

This repository demonstrates a common error in Express.js route handlers:  lack of error handling for invalid input parameters.  The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides a corrected version with proper error handling.

## Problem

The original code lacks checks for the validity of the `userId` parameter.  If a non-numeric or otherwise invalid ID is provided, the application may crash or produce unexpected results.

## Solution

The solution adds error handling to validate the `userId` before attempting to use it.  It checks if the ID is a valid number and returns an appropriate error response if it's not.