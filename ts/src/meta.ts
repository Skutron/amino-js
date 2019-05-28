import { Amino } from './global';

export function decodeDisambPrefixBytes (bytes: Uint8Array): [Uint8Array | null, Uint8Array | null, number] {
    const [disambBytes, hasDisambBytes, prefixBytes, hasPrefixBytes, length] = Amino.decodeDisambPrefixBytes(bytes);

    return [
        hasDisambBytes ? disambBytes : null,
        hasPrefixBytes ? prefixBytes : null,
        length
    ];
}

export function nameToDisfix (name: string): [Uint8Array, Uint8Array] {
    return Amino.nameToDisfix(name);
}

export function byteSliceSize (bytes: Uint8Array): number {
    return Amino.byteSliceSize(bytes);
}

export function uvarintSize (uvarint: number): number {
    return Amino.uvarintSize(uvarint);
}

export function varintSize (varint: number): number {
    return Amino.varintSize(varint);
}
