[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobOutwardInventoryMatch

# Class: OutwardJobOutwardInventoryMatch

Describes the parameters that are part of an outward job's outward inventory match

**`Generated`**

from message Scailo.OutwardJobOutwardInventoryMatch

## Hierarchy

- `Message`\<[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)\>

  ↳ **`OutwardJobOutwardInventoryMatch`**

## Table of contents

### Constructors

- [constructor](OutwardJobOutwardInventoryMatch.md#constructor)

### Properties

- [familyId](OutwardJobOutwardInventoryMatch.md#familyid)
- [issuedQtyPrimary](OutwardJobOutwardInventoryMatch.md#issuedqtyprimary)
- [jobQtyPrimary](OutwardJobOutwardInventoryMatch.md#jobqtyprimary)
- [returnedQtyPrimary](OutwardJobOutwardInventoryMatch.md#returnedqtyprimary)
- [fields](OutwardJobOutwardInventoryMatch.md#fields)
- [runtime](OutwardJobOutwardInventoryMatch.md#runtime)
- [typeName](OutwardJobOutwardInventoryMatch.md#typename)

### Methods

- [clone](OutwardJobOutwardInventoryMatch.md#clone)
- [equals](OutwardJobOutwardInventoryMatch.md#equals)
- [fromBinary](OutwardJobOutwardInventoryMatch.md#frombinary)
- [fromJson](OutwardJobOutwardInventoryMatch.md#fromjson)
- [fromJsonString](OutwardJobOutwardInventoryMatch.md#fromjsonstring)
- [getType](OutwardJobOutwardInventoryMatch.md#gettype)
- [toBinary](OutwardJobOutwardInventoryMatch.md#tobinary)
- [toJSON](OutwardJobOutwardInventoryMatch.md#tojson)
- [toJson](OutwardJobOutwardInventoryMatch.md#tojson-1)
- [toJsonString](OutwardJobOutwardInventoryMatch.md#tojsonstring)
- [equals](OutwardJobOutwardInventoryMatch.md#equals-1)
- [fromBinary](OutwardJobOutwardInventoryMatch.md#frombinary-1)
- [fromJson](OutwardJobOutwardInventoryMatch.md#fromjson-1)
- [fromJsonString](OutwardJobOutwardInventoryMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobOutwardInventoryMatch**(`data?`): [`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)\> |

#### Returns

[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

#### Overrides

Message\&lt;OutwardJobOutwardInventoryMatch\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:3507](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3507)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3484](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3484)

___

### issuedQtyPrimary

• **issuedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the issued quantity

**`Generated`**

from field: uint64 issued_qty_primary = 20;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3498)

___

### jobQtyPrimary

• **jobQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the job quantity

**`Generated`**

from field: uint64 job_qty_primary = 10;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3491)

___

### returnedQtyPrimary

• **returnedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the returned quantity

**`Generated`**

from field: uint64 returned_qty_primary = 30;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3505](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3505)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3514](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3514)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3512](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3512)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobOutwardInventoryMatch"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:3513](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3513)

## Methods

### clone

▸ **clone**(): [`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

Create a deep copy.

#### Returns

[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md) \| `PlainMessage`\<[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)\>

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
| `a` | `undefined` \| [`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md) \| `PlainMessage`\<[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)\> |
| `b` | `undefined` \| [`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md) \| `PlainMessage`\<[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3533)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3521](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3521)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3525](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3525)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardInventoryMatch`](OutwardJobOutwardInventoryMatch.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3529)
