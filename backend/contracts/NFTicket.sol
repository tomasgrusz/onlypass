// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

using Strings for uint256;

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
    mapping(uint256 => string) private _tokenMetadataURIs;

    constructor() ERC721("NFTicket", "NFTi") {
        tokenCounter = 0;
    }

    function createNFTicket(
        address to,
        string memory location,
        string memory date,
        string memory title,
	string memory tokenHash,
	string memory signature,
        string memory metadataURI
    ) public returns (uint256) {
        _safeMint(to, tokenCounter);
        _tokenDetails[tokenCounter] = NFTDetails(location, date, title, tokenHash, signature);
        _tokenMetadataURIs[tokenCounter] = metadataURI;
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

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
      return _tokenMetadataURIs[tokenId];
    }

}

