[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobInwardInventoryMatch

# Class: OutwardJobInwardInventoryMatch

Describes the parameters that are part of an outward job's inward inventory match

**`Generated`**

from message Scailo.OutwardJobInwardInventoryMatch

## Hierarchy

- `Message`\<[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)\>

  ↳ **`OutwardJobInwardInventoryMatch`**

## Table of contents

### Constructors

- [constructor](OutwardJobInwardInventoryMatch.md#constructor)

### Properties

- [familyId](OutwardJobInwardInventoryMatch.md#familyid)
- [jobQtyPrimary](OutwardJobInwardInventoryMatch.md#jobqtyprimary)
- [orderedQtyPrimary](OutwardJobInwardInventoryMatch.md#orderedqtyprimary)
- [receivedQtyPrimary](OutwardJobInwardInventoryMatch.md#receivedqtyprimary)
- [returnedQtyPrimary](OutwardJobInwardInventoryMatch.md#returnedqtyprimary)
- [fields](OutwardJobInwardInventoryMatch.md#fields)
- [runtime](OutwardJobInwardInventoryMatch.md#runtime)
- [typeName](OutwardJobInwardInventoryMatch.md#typename)

### Methods

- [clone](OutwardJobInwardInventoryMatch.md#clone)
- [equals](OutwardJobInwardInventoryMatch.md#equals)
- [fromBinary](OutwardJobInwardInventoryMatch.md#frombinary)
- [fromJson](OutwardJobInwardInventoryMatch.md#fromjson)
- [fromJsonString](OutwardJobInwardInventoryMatch.md#fromjsonstring)
- [getType](OutwardJobInwardInventoryMatch.md#gettype)
- [toBinary](OutwardJobInwardInventoryMatch.md#tobinary)
- [toJSON](OutwardJobInwardInventoryMatch.md#tojson)
- [toJson](OutwardJobInwardInventoryMatch.md#tojson-1)
- [toJsonString](OutwardJobInwardInventoryMatch.md#tojsonstring)
- [equals](OutwardJobInwardInventoryMatch.md#equals-1)
- [fromBinary](OutwardJobInwardInventoryMatch.md#frombinary-1)
- [fromJson](OutwardJobInwardInventoryMatch.md#fromjson-1)
- [fromJsonString](OutwardJobInwardInventoryMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobInwardInventoryMatch**(`data?`): [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)\> |

#### Returns

[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

#### Overrides

Message\&lt;OutwardJobInwardInventoryMatch\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:3398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3398)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3368)

___

### jobQtyPrimary

• **jobQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the job quantity

**`Generated`**

from field: uint64 job_qty_primary = 10;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3375](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3375)

___

### orderedQtyPrimary

• **orderedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity

**`Generated`**

from field: uint64 ordered_qty_primary = 20;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3382](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3382)

___

### receivedQtyPrimary

• **receivedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the received quantity

**`Generated`**

from field: uint64 received_qty_primary = 30;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3389](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3389)

___

### returnedQtyPrimary

• **returnedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the returned quantity

**`Generated`**

from field: uint64 returned_qty_primary = 40;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3396](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3396)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3405)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3403](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3403)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobInwardInventoryMatch"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:3404](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3404)

## Methods

### clone

▸ **clone**(): [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

Create a deep copy.

#### Returns

[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md) \| `PlainMessage`\<[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)\>

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
| `a` | `undefined` \| [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md) \| `PlainMessage`\<[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)\> |
| `b` | `undefined` \| [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md) \| `PlainMessage`\<[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3425](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3425)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3413](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3413)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3417](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3417)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3421](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3421)
