// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTicket is ERC721 {
    uint256 public tokenCounter;

    struct NFTDetails {
        string location;   // adresa
        string date;       // dátum (ako string, prípadne môžeš použiť uint256 ak chceš timestamp)
        string title;       // názov
        string signature;
    }

    mapping(uint256 => NFTDetails) private _tokenDetails;

    constructor() ERC721("MyNFT", "MNFT") {
        tokenCounter = 0;
    }

    function createNFT(
        address to,
        string memory location,
        string memory date,
        string memory title,
	string memory signature
    ) public returns (uint256) {
        _safeMint(to, tokenCounter);
        _tokenDetails[tokenCounter] = NFTDetails(location, date, title, signature);
        tokenCounter++;
        return tokenCounter - 1;
    }

    function getNFTDetails(uint256 tokenId) public view returns (
        string memory location,
        string memory date,
        string memory title,
	string memory signature
    ) {
        NFTDetails memory details = _tokenDetails[tokenId];
        return (details.location, details.date, details.title, details.signature);
    }
}
