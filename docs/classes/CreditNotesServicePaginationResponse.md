[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServicePaginationResponse

# Class: CreditNotesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.CreditNotesServicePaginationResponse

## Hierarchy

- `Message`\<[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)\>

  ↳ **`CreditNotesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](CreditNotesServicePaginationResponse.md#constructor)

### Properties

- [count](CreditNotesServicePaginationResponse.md#count)
- [offset](CreditNotesServicePaginationResponse.md#offset)
- [payload](CreditNotesServicePaginationResponse.md#payload)
- [total](CreditNotesServicePaginationResponse.md#total)
- [fields](CreditNotesServicePaginationResponse.md#fields)
- [runtime](CreditNotesServicePaginationResponse.md#runtime)
- [typeName](CreditNotesServicePaginationResponse.md#typename)

### Methods

- [clone](CreditNotesServicePaginationResponse.md#clone)
- [equals](CreditNotesServicePaginationResponse.md#equals)
- [fromBinary](CreditNotesServicePaginationResponse.md#frombinary)
- [fromJson](CreditNotesServicePaginationResponse.md#fromjson)
- [fromJsonString](CreditNotesServicePaginationResponse.md#fromjsonstring)
- [getType](CreditNotesServicePaginationResponse.md#gettype)
- [toBinary](CreditNotesServicePaginationResponse.md#tobinary)
- [toJSON](CreditNotesServicePaginationResponse.md#tojson)
- [toJson](CreditNotesServicePaginationResponse.md#tojson-1)
- [toJsonString](CreditNotesServicePaginationResponse.md#tojsonstring)
- [equals](CreditNotesServicePaginationResponse.md#equals-1)
- [fromBinary](CreditNotesServicePaginationResponse.md#frombinary-1)
- [fromJson](CreditNotesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](CreditNotesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServicePaginationResponse**(`data?`): [`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)\> |

#### Returns

[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

#### Overrides

Message\&lt;CreditNotesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:1802](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1802)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/credit_notes.scailo_pb.ts:1779](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1779)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/credit_notes.scailo_pb.ts:1786](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1786)

___

### payload

• **payload**: [`CreditNote`](CreditNote.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.CreditNote payload = 4;

#### Defined in

[src/credit_notes.scailo_pb.ts:1800](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1800)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/credit_notes.scailo_pb.ts:1793](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1793)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:1809](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1809)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:1807](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1807)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServicePaginationResponse"``

#### Defined in

[src/credit_notes.scailo_pb.ts:1808](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1808)

## Methods

### clone

▸ **clone**(): [`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md) \| `PlainMessage`\<[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md) \| `PlainMessage`\<[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md) \| `PlainMessage`\<[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1828)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1816](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1816)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1820](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1820)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServicePaginationResponse`](CreditNotesServicePaginationResponse.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1824](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1824)
