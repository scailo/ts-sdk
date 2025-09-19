[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersServicePaginationReq

# Class: LedgersServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.LedgersServicePaginationReq

## Hierarchy

- `Message`\<[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)\>

  ↳ **`LedgersServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](LedgersServicePaginationReq.md#constructor)

### Properties

- [count](LedgersServicePaginationReq.md#count)
- [isActive](LedgersServicePaginationReq.md#isactive)
- [offset](LedgersServicePaginationReq.md#offset)
- [sortKey](LedgersServicePaginationReq.md#sortkey)
- [sortOrder](LedgersServicePaginationReq.md#sortorder)
- [status](LedgersServicePaginationReq.md#status)
- [fields](LedgersServicePaginationReq.md#fields)
- [runtime](LedgersServicePaginationReq.md#runtime)
- [typeName](LedgersServicePaginationReq.md#typename)

### Methods

- [clone](LedgersServicePaginationReq.md#clone)
- [equals](LedgersServicePaginationReq.md#equals)
- [fromBinary](LedgersServicePaginationReq.md#frombinary)
- [fromJson](LedgersServicePaginationReq.md#fromjson)
- [fromJsonString](LedgersServicePaginationReq.md#fromjsonstring)
- [getType](LedgersServicePaginationReq.md#gettype)
- [toBinary](LedgersServicePaginationReq.md#tobinary)
- [toJSON](LedgersServicePaginationReq.md#tojson)
- [toJson](LedgersServicePaginationReq.md#tojson-1)
- [toJsonString](LedgersServicePaginationReq.md#tojsonstring)
- [equals](LedgersServicePaginationReq.md#equals-1)
- [fromBinary](LedgersServicePaginationReq.md#frombinary-1)
- [fromJson](LedgersServicePaginationReq.md#fromjson-1)
- [fromJsonString](LedgersServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersServicePaginationReq**(`data?`): [`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)\> |

#### Returns

[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

#### Overrides

Message\&lt;LedgersServicePaginationReq\&gt;.constructor

#### Defined in

[src/ledgers.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L454)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/ledgers.scailo_pb.ts:424](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L424)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/ledgers.scailo_pb.ts:417](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L417)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/ledgers.scailo_pb.ts:431](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L431)

___

### sortKey

• **sortKey**: [`LEDGER_SORT_KEY`](../enums/LEDGER_SORT_KEY.md) = `LEDGER_SORT_KEY.LEDGER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LEDGER_SORT_KEY sort_key = 5;

#### Defined in

[src/ledgers.scailo_pb.ts:445](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L445)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/ledgers.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L438)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this ledger

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/ledgers.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L452)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/ledgers.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L461)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/ledgers.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L459)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServicePaginationReq"``

#### Defined in

[src/ledgers.scailo_pb.ts:460](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L460)

## Methods

### clone

▸ **clone**(): [`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

Create a deep copy.

#### Returns

[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersServicePaginationReq`](LedgersServicePaginationReq.md) \| `PlainMessage`\<[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`LedgersServicePaginationReq`](LedgersServicePaginationReq.md) \| `PlainMessage`\<[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)\> |
| `b` | `undefined` \| [`LedgersServicePaginationReq`](LedgersServicePaginationReq.md) \| `PlainMessage`\<[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/ledgers.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L482)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L470)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:474](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L474)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServicePaginationReq`](LedgersServicePaginationReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L478)
