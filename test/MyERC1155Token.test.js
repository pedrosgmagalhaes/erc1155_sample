const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyERC1155Token", function () {
  let MyERC1155Token, myERC1155Token, owner, addr1, addr2;

  beforeEach(async function () {
    MyERC1155Token = await ethers.getContractFactory("MeuERC1155Token");
    [owner, addr1, addr2] = await ethers.getSigners();
    myERC1155Token = await MyERC1155Token.deploy("https://example.com/metadata/");
  });

  describe("Implantação", function () {
    it("Deve definir o URI correto", async function () {
      expect(await myERC1155Token.uri(0)).to.equal("https://example.com/metadata/");
    });
  });

  describe("Cunhagem de tokens", function () {
    it("Deve emitir tokens para o endereço específico", async function () {
      await myERC1155Token.mint(addr1.address, 1, 50, "0x");
      expect(await myERC1155Token.balanceOf(addr1.address, 1)).to.equal(50);
    });

    it("Deve emitir em lote tokens para o endereço especificado", async function () {
      const ids = [1, 2, 3];
      const amounts = [50, 30, 10];
      await myERC1155Token.mintBatch(addr1.address, ids, amounts, "0x");

      expect(await myERC1155Token.balanceOf(addr1.address, 1)).to.equal(50);
      expect(await myERC1155Token.balanceOf(addr1.address, 2)).to.equal(30);
      expect(await myERC1155Token.balanceOf(addr1.address, 3)).to.equal(10);
    });
  });

  describe("Transferência de tokens", function () {
    beforeEach(async function () {
      await myERC1155Token.mint(addr1.address, 1, 50, "0x");
      await myERC1155Token.mint(addr1.address, 2, 30, "0x");
    });

    it("Deve transferir tokens entre endereços", async function () {
      await myERC1155Token.connect(addr1).safeTransferFrom(addr1.address, addr2.address, 1, 20, "0x");
      expect(await myERC1155Token.balanceOf(addr1.address, 1)).to.equal(30);
      expect(await myERC1155Token.balanceOf(addr2.address, 1)).to.equal(20);
    });

    it("Deve transferir em lote tokens entre endereços", async function () {
      const ids = [1, 2];
      const amounts = [10, 5];
      await myERC1155Token.connect(addr1).safeBatchTransferFrom(addr1.address, addr2.address, ids, amounts, "0x");

      expect(await myERC1155Token.balanceOf(addr1.address, 1)).to.equal(40);
      expect(await myERC1155Token.balanceOf(addr1.address, 2)).to.equal(25);
      expect(await myERC1155Token.balanceOf(addr2.address, 1)).to.equal(10);
      expect(await myERC1155Token.balanceOf(addr2.address, 2)).to.equal(5);
    });
  });
});
