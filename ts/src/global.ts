// eslint-disable-next-line @typescript-eslint/no-explicit-any
let context: any;
if (typeof window !== 'undefined') {      // Browser
    context = window;
}
else if (typeof self !== 'undefined') {   // Web Worker
    context = self;
}
else if (typeof global !== 'undefined') { // Node.js
    context = global;
}
else {                                    // Other (e.g. Nashorn)
    context = this;
}

export const Amino: GlobalAmino = context.Amino;

//@formatter:off
export interface GlobalAmino {
    // Basic encoding

    encodeByte (byte: number): Uint8Array;
    encodeByteSlice (bytes: Uint8Array): Uint8Array;
    encodeInt8 (int8: number): Uint8Array;
    encodeInt16 (int16: number): Uint8Array;
    encodeInt32 (int32: number): Uint8Array;
    encodeInt64 (int64: number): Uint8Array;
    encodeVarint (varint: number): Uint8Array;
    encodeUint8 (uint8: number): Uint8Array;
    encodeUint16 (uint16: number): Uint8Array;
    encodeUint32 (uint32: number): Uint8Array;
    encodeUint64 (uint64: number): Uint8Array;
    encodeUvarint (uvarint: number): Uint8Array;
    encodeFloat32 (float: number): Uint8Array;
    encodeFloat64 (float: number): Uint8Array;
    encodeBool (bool: boolean): Uint8Array;
    encodeString (string: string): Uint8Array;
    encodeTime (time: Date): Uint8Array;

    // Basic decoding

    decodeByte (bytes: Uint8Array): [number, number];
    decodeByteSlice (bytes: Uint8Array): [Uint8Array, number];
    decodeInt8 (bytes: Uint8Array): [number, number];
    decodeInt16 (bytes: Uint8Array): [number, number];
    decodeInt32 (bytes: Uint8Array): [number, number];
    decodeInt64 (bytes: Uint8Array): [number, number];
    decodeUint8 (bytes: Uint8Array): [number, number];
    decodeUint16 (bytes: Uint8Array): [number, number];
    decodeUint32 (bytes: Uint8Array): [number, number];
    decodeUint64 (bytes: Uint8Array): [number, number];
    decodeVarint (bytes: Uint8Array): [number, number];
    decodeUvarint (bytes: Uint8Array): [number, number];
    decodeFloat32 (bytes: Uint8Array): [number, number];
    decodeFloat64 (bytes: Uint8Array): [number, number];
    decodeBool (bytes: Uint8Array): [boolean, number];
    decodeString (bytes: Uint8Array): [string, number];
    decodeTime (bytes: Uint8Array): [Date, number];

    // Miscellaneous

    decodeDisambPrefixBytes (bytes: Uint8Array): [Uint8Array, boolean, Uint8Array, boolean, number];
    nameToDisfix (name: string): [Uint8Array, Uint8Array];
    byteSliceSize (bytes: Uint8Array): number;
    uvarintSize (uvarint: number): number;
    varintSize (varint: number): number;

    // Encode Type

    encodeMultiStoreProofOp (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeIAVLAbsenceOp (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeIAVLValueOp (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePrivKeyLedgerSecp256k1 (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBIP44Params (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeLocalInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeLedgerInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeOfflineInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMultiInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsg (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeTx (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeVestingAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBaseAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBaseVestingAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeContinuousVestingAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeDelayedVestingAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeStdTx (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgSend (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgMultiSend (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgVerifyInvariant (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgWithdrawDelegatorReward (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgWithdrawValidatorCommission (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgSetWithdrawAddress (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeContent (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgSubmitProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgDeposit (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgVote (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeTextProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeSoftwareUpgradeProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgIBCTransfer (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgIBCReceive (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeParameterChangeProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgUnjail (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgCreateValidator (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgEditValidator (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgDelegate (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgUndelegate (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgBeginRedelegate (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBlockchainMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBcBlockRequestMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBcBlockResponseMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBcNoBlockResponseMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBcStatusResponseMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBcStatusRequestMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeConsensusMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeNewRoundStepMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeNewValidBlockMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeProposalMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeProposalPOLMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeBlockPartMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeVoteMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeHasVoteMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeVoteSetMaj23Message (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeVoteSetBitsMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeWALMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMsgInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeTimeoutInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEndHeightMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePubKey (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePrivKey (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePubKeyEd25519 (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePrivKeyEd25519 (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePubKeySecp256k1 (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePrivKeySecp256k1 (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePubKeyMultisigThreshold (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEvidenceMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEvidenceListMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMempoolMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeTxMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePacket (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePacketPing (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePacketPong (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePacketMsg (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePexMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePexRequestMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePexAddrsMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeRemoteSignerMsg (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePubKeyRequest (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePubKeyResponse (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeSignVoteRequest (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeSignedVoteResponse (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeSignProposalRequest (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeSignedProposalResponse (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePingRequest (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodePingResponse (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeTMEventData (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataNewBlock (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataNewBlockHeader (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataTx (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataRoundState (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataNewRound (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataCompleteProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataVote (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataValidatorSetUpdates (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEventDataString (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeDuplicateVoteEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMockGoodEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMockRandomGoodEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
    encodeMockBadEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;

    // Decode Type

    decodeMultiStoreProofOp (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeIAVLAbsenceOp (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeIAVLValueOp (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePrivKeyLedgerSecp256k1 (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBIP44Params (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeLocalInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeLedgerInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeOfflineInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMultiInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsg (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeTx (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeVestingAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBaseAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBaseVestingAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeContinuousVestingAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeDelayedVestingAccount (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeStdTx (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgSend (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgMultiSend (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgVerifyInvariant (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgWithdrawDelegatorReward (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgWithdrawValidatorCommission (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgSetWithdrawAddress (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeContent (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgSubmitProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgDeposit (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgVote (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeTextProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeSoftwareUpgradeProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgIBCTransfer (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgIBCReceive (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeParameterChangeProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgUnjail (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgCreateValidator (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgEditValidator (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgDelegate (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgUndelegate (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgBeginRedelegate (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBlockchainMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBcBlockRequestMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBcBlockResponseMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBcNoBlockResponseMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBcStatusResponseMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBcStatusRequestMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeConsensusMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeNewRoundStepMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeNewValidBlockMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeProposalMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeProposalPOLMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeBlockPartMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeVoteMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeHasVoteMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeVoteSetMaj23Message (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeVoteSetBitsMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeWALMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMsgInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeTimeoutInfo (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEndHeightMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePubKey (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePrivKey (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePubKeyEd25519 (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePrivKeyEd25519 (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePubKeySecp256k1 (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePrivKeySecp256k1 (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePubKeyMultisigThreshold (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEvidenceMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEvidenceListMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMempoolMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeTxMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePacket (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePacketPing (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePacketPong (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePacketMsg (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePexMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePexRequestMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePexAddrsMessage (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeRemoteSignerMsg (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePubKeyRequest (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePubKeyResponse (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeSignVoteRequest (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeSignedVoteResponse (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeSignProposalRequest (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeSignedProposalResponse (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePingRequest (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodePingResponse (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeTMEventData (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataNewBlock (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataNewBlockHeader (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataTx (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataRoundState (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataNewRound (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataCompleteProposal (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataVote (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataValidatorSetUpdates (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEventDataString (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeDuplicateVoteEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMockGoodEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMockRandomGoodEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
    decodeMockBadEvidence (bytes: Uint8Array, bare: boolean): Uint8Array;
}
//@formatter:on
