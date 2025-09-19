[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuanceItemHistoryRequest

# Class: StockIssuanceItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.StockIssuanceItemHistoryRequest

## Hierarchy

- `Message`\<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\>

  ↳ **`StockIssuanceItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuanceItemHistoryRequest.md#constructor)

### Properties

- [familyId](StockIssuanceItemHistoryRequest.md#familyid)
- [stockIssuanceId](StockIssuanceItemHistoryRequest.md#stockissuanceid)
- [fields](StockIssuanceItemHistoryRequest.md#fields)
- [runtime](StockIssuanceItemHistoryRequest.md#runtime)
- [typeName](StockIssuanceItemHistoryRequest.md#typename)

### Methods

- [clone](StockIssuanceItemHistoryRequest.md#clone)
- [equals](StockIssuanceItemHistoryRequest.md#equals)
- [fromBinary](StockIssuanceItemHistoryRequest.md#frombinary)
- [fromJson](StockIssuanceItemHistoryRequest.md#fromjson)
- [fromJsonString](StockIssuanceItemHistoryRequest.md#fromjsonstring)
- [getType](StockIssuanceItemHistoryRequest.md#gettype)
- [toBinary](StockIssuanceItemHistoryRequest.md#tobinary)
- [toJSON](StockIssuanceItemHistoryRequest.md#tojson)
- [toJson](StockIssuanceItemHistoryRequest.md#tojson-1)
- [toJsonString](StockIssuanceItemHistoryRequest.md#tojsonstring)
- [equals](StockIssuanceItemHistoryRequest.md#equals-1)
- [fromBinary](StockIssuanceItemHistoryRequest.md#frombinary-1)
- [fromJson](StockIssuanceItemHistoryRequest.md#fromjson-1)
- [fromJsonString](StockIssuanceItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuanceItemHistoryRequest**(`data?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Overrides

Message\&lt;StockIssuanceItemHistoryRequest\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:974](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L974)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/stock_issuances.scailo_pb.ts:972](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L972)

___

### stockIssuanceId

• **stockIssuanceId**: `bigint` = `protoInt64.zero`

Stores the stock issuance ID

**`Generated`**

from field: uint64 stock_issuance_id = 10;

#### Defined in

[src/stock_issuances.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L965)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:981](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L981)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:979](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L979)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuanceItemHistoryRequest"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L980)

## Methods

### clone

▸ **clone**(): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md) \| `PlainMessage`\<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md) \| `PlainMessage`\<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md) \| `PlainMessage`\<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L998)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:986](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L986)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:990](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L990)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L994)
