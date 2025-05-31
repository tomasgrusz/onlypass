// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTicket is ERC721 {
    uint256 public tokenCounter;

    struct NFTDetails {
        string location;   
        string date;    
        string title;
	string tokenHash;
        string signature;
    }

    mapping(uint256 => NFTDetails) private _tokenDetails;

    constructor() ERC721("NFTicket", "NFTi") {
        tokenCounter = 0;
    }

    function createNFT(
        address to,
        string memory location,
        string memory date,
        string memory title,
	string memory tokenHash,
	string memory signature
    ) public returns (uint256) {
        _safeMint(to, tokenCounter);
        _tokenDetails[tokenCounter] = NFTDetails(location, date, title, tokenHash, signature);
        tokenCounter++;
        return tokenCounter - 1;
    }

    function getNFTDetails(uint256 tokenId) public view returns (
        string memory location,
        string memory date,
        string memory title,
	string memory tokenHash,
	string memory signature
    ) {
        NFTDetails memory details = _tokenDetails[tokenId];
        return (details.location, details.date, details.title, details.tokenHash, details.signature);
    }
}
