"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;
const customTypes = {
  DelegationNodeId: "Hash",
  PublicSigningKey: "Hash",
  PublicBoxKey: "Hash",
  Permissions: "u32",
  ErrorCode: "u16",
  Attribute: {
    name: "Vec<u8>",
    value: "Vec<u8>",
    validity: "BlockNumber",
    creation: "Moment",
    nonce: "u64"
  },
  AttributeTransaction: {
    signature: "Signature",
    name: "Vec<u8>",
    value: "Vec<u8>",
    validity: "u32",
    signer: "AccountId",
    identity: "AccountId"
  },
  TokenId: "u64",
  SwapId: "u64",
  TokenBalance: "u64",
  MissionTokenId: "u32",
  RegistrarIndex: "u32",
  Judgement: {
    _enum: ["Requested", "Approved"]
  },
  JudgementItem: "(RegistrarIndex, Judgement)",
  Registration: {
    judgements: "Vec<JudgementItem>",
    account_id: "AccountId"
  }
};
var _default = customTypes;
exports.default = _default;
