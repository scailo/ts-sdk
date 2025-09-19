[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServicePaginatedItemsResponse

# Class: DebitNotesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.DebitNotesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)\>

  ↳ **`DebitNotesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](DebitNotesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](DebitNotesServicePaginatedItemsResponse.md#count)
- [offset](DebitNotesServicePaginatedItemsResponse.md#offset)
- [payload](DebitNotesServicePaginatedItemsResponse.md#payload)
- [total](DebitNotesServicePaginatedItemsResponse.md#total)
- [fields](DebitNotesServicePaginatedItemsResponse.md#fields)
- [runtime](DebitNotesServicePaginatedItemsResponse.md#runtime)
- [typeName](DebitNotesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](DebitNotesServicePaginatedItemsResponse.md#clone)
- [equals](DebitNotesServicePaginatedItemsResponse.md#equals)
- [fromBinary](DebitNotesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](DebitNotesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](DebitNotesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](DebitNotesServicePaginatedItemsResponse.md#gettype)
- [toBinary](DebitNotesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](DebitNotesServicePaginatedItemsResponse.md#tojson)
- [toJson](DebitNotesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](DebitNotesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](DebitNotesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](DebitNotesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](DebitNotesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](DebitNotesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServicePaginatedItemsResponse**(`data?`): [`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)\> |

#### Returns

[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;DebitNotesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:1590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1590)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:1567](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1567)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1574)

___

### payload

• **payload**: [`DebitNoteItem`](DebitNoteItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.DebitNoteItem payload = 4;

#### Defined in

[src/debit_notes.scailo_pb.ts:1588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1588)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/debit_notes.scailo_pb.ts:1581](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1581)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:1597](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1597)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:1595](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1595)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServicePaginatedItemsResponse"``

#### Defined in

[src/debit_notes.scailo_pb.ts:1596](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1596)

## Methods

### clone

▸ **clone**(): [`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:1616](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1616)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1604](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1604)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1608](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1608)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServicePaginatedItemsResponse`](DebitNotesServicePaginatedItemsResponse.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1612)
