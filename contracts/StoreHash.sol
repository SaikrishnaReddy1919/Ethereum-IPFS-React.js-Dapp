pragma solidity >=0.4.17;
contract Contract {
 string ipfsHash;
 function sendHash(string memory x) public {
   ipfsHash = x;
 }

 function getHash() public view returns (string memory x) {
   return ipfsHash;
 }
}