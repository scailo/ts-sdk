[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatePaginationResp

# Class: AssociatePaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message Scailo.AssociatePaginationResp

## Hierarchy

- `Message`\<[`AssociatePaginationResp`](AssociatePaginationResp.md)\>

  ↳ **`AssociatePaginationResp`**

## Table of contents

### Constructors

- [constructor](AssociatePaginationResp.md#constructor)

### Properties

- [count](AssociatePaginationResp.md#count)
- [offset](AssociatePaginationResp.md#offset)
- [payload](AssociatePaginationResp.md#payload)
- [total](AssociatePaginationResp.md#total)
- [fields](AssociatePaginationResp.md#fields)
- [runtime](AssociatePaginationResp.md#runtime)
- [typeName](AssociatePaginationResp.md#typename)

### Methods

- [clone](AssociatePaginationResp.md#clone)
- [equals](AssociatePaginationResp.md#equals)
- [fromBinary](AssociatePaginationResp.md#frombinary)
- [fromJson](AssociatePaginationResp.md#fromjson)
- [fromJsonString](AssociatePaginationResp.md#fromjsonstring)
- [getType](AssociatePaginationResp.md#gettype)
- [toBinary](AssociatePaginationResp.md#tobinary)
- [toJSON](AssociatePaginationResp.md#tojson)
- [toJson](AssociatePaginationResp.md#tojson-1)
- [toJsonString](AssociatePaginationResp.md#tojsonstring)
- [equals](AssociatePaginationResp.md#equals-1)
- [fromBinary](AssociatePaginationResp.md#frombinary-1)
- [fromJson](AssociatePaginationResp.md#fromjson-1)
- [fromJsonString](AssociatePaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatePaginationResp**(`data?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatePaginationResp`](AssociatePaginationResp.md)\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Overrides

Message\&lt;AssociatePaginationResp\&gt;.constructor

#### Defined in

src/associates.scailo_pb.ts:383

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/associates.scailo_pb.ts:360

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/associates.scailo_pb.ts:367

___

### payload

• **payload**: [`Associate`](Associate.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Associate payload = 4;

#### Defined in

src/associates.scailo_pb.ts:381

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/associates.scailo_pb.ts:374

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/associates.scailo_pb.ts:390

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/associates.scailo_pb.ts:388

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatePaginationResp"``

#### Defined in

src/associates.scailo_pb.ts:389

## Methods

### clone

▸ **clone**(): [`AssociatePaginationResp`](AssociatePaginationResp.md)

Create a deep copy.

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatePaginationResp`](AssociatePaginationResp.md) \| `PlainMessage`\<[`AssociatePaginationResp`](AssociatePaginationResp.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatePaginationResp`](AssociatePaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatePaginationResp`](AssociatePaginationResp.md)\>

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
| `a` | `undefined` \| [`AssociatePaginationResp`](AssociatePaginationResp.md) \| `PlainMessage`\<[`AssociatePaginationResp`](AssociatePaginationResp.md)\> |
| `b` | `undefined` \| [`AssociatePaginationResp`](AssociatePaginationResp.md) \| `PlainMessage`\<[`AssociatePaginationResp`](AssociatePaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/associates.scailo_pb.ts:409

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Defined in

src/associates.scailo_pb.ts:397

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Defined in

src/associates.scailo_pb.ts:401

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Defined in

src/associates.scailo_pb.ts:405
