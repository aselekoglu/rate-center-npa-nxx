# rate-center-npa-nxx

This project provides functions to fetch rate center information based on NPA (Numbering Plan Area) and NXX (Central Office Code) and to check if two NPA-NXX pairs support local calling.

![ezgif-7-4273a2cac5](https://user-images.githubusercontent.com/59377994/146551473-f28e7d13-d8b2-4c99-8374-9f62e9f684bb.gif)

## Overview

The project consists of two main functions:

- `rateCenter(npa, nxx)`: Retrieves rate center information from NPA and NXX.
- `isLocal(npa1, nxx1, npa2, nxx2)`: Checks if two NPA-NXX pairs support local calling.

## Getting Started

### Installation

1. Open Google Sheets and create a new spreadsheet.
2. Open the Script Editor by navigating to `Extensions > Apps Script`.
3. Copy and paste the code from the provided `.gs` file into the Script Editor.
4. Save the project with a name of your choice.
5. Review the code and configure any necessary variables such as base URLs.

## Usage

1. Use the `rateCenter(npa, nxx)` function to fetch rate center information by providing the NPA and NXX parameters.
2. Use the `isLocal(npa1, nxx1, npa2, nxx2)` function to check if two NPA-NXX pairs support local calling.
3. Call these functions within your Google Sheets or from other Google Apps Script projects as needed.
