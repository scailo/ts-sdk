[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobOutwardInventoryMatch

# Class: InwardJobOutwardInventoryMatch

Describes the parameters that are part of an inward job's outward inventory match

**`Generated`**

from message Scailo.InwardJobOutwardInventoryMatch

## Hierarchy

- `Message`\<[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)\>

  ↳ **`InwardJobOutwardInventoryMatch`**

## Table of contents

### Constructors

- [constructor](InwardJobOutwardInventoryMatch.md#constructor)

### Properties

- [dispatchedQtyPrimary](InwardJobOutwardInventoryMatch.md#dispatchedqtyprimary)
- [familyId](InwardJobOutwardInventoryMatch.md#familyid)
- [jobQtyPrimary](InwardJobOutwardInventoryMatch.md#jobqtyprimary)
- [orderedQtyPrimary](InwardJobOutwardInventoryMatch.md#orderedqtyprimary)
- [returnedQtyPrimary](InwardJobOutwardInventoryMatch.md#returnedqtyprimary)
- [fields](InwardJobOutwardInventoryMatch.md#fields)
- [runtime](InwardJobOutwardInventoryMatch.md#runtime)
- [typeName](InwardJobOutwardInventoryMatch.md#typename)

### Methods

- [clone](InwardJobOutwardInventoryMatch.md#clone)
- [equals](InwardJobOutwardInventoryMatch.md#equals)
- [fromBinary](InwardJobOutwardInventoryMatch.md#frombinary)
- [fromJson](InwardJobOutwardInventoryMatch.md#fromjson)
- [fromJsonString](InwardJobOutwardInventoryMatch.md#fromjsonstring)
- [getType](InwardJobOutwardInventoryMatch.md#gettype)
- [toBinary](InwardJobOutwardInventoryMatch.md#tobinary)
- [toJSON](InwardJobOutwardInventoryMatch.md#tojson)
- [toJson](InwardJobOutwardInventoryMatch.md#tojson-1)
- [toJsonString](InwardJobOutwardInventoryMatch.md#tojsonstring)
- [equals](InwardJobOutwardInventoryMatch.md#equals-1)
- [fromBinary](InwardJobOutwardInventoryMatch.md#frombinary-1)
- [fromJson](InwardJobOutwardInventoryMatch.md#fromjson-1)
- [fromJsonString](InwardJobOutwardInventoryMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobOutwardInventoryMatch**(`data?`): [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)\> |

#### Returns

[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

#### Overrides

Message\&lt;InwardJobOutwardInventoryMatch\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:3772](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3772)

## Properties

### dispatchedQtyPrimary

• **dispatchedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the dispatched quantity

**`Generated`**

from field: uint64 dispatched_qty_primary = 30;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3763](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3763)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3742](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3742)

___

### jobQtyPrimary

• **jobQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the job quantity

**`Generated`**

from field: uint64 job_qty_primary = 10;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3749](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3749)

___

### orderedQtyPrimary

• **orderedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity

**`Generated`**

from field: uint64 ordered_qty_primary = 20;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3756](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3756)

___

### returnedQtyPrimary

• **returnedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the returned quantity

**`Generated`**

from field: uint64 returned_qty_primary = 40;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3770](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3770)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3779](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3779)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3777)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobOutwardInventoryMatch"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:3778](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3778)

## Methods

### clone

▸ **clone**(): [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

Create a deep copy.

#### Returns

[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md) \| `PlainMessage`\<[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)\>

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
| `a` | `undefined` \| [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md) \| `PlainMessage`\<[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)\> |
| `b` | `undefined` \| [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md) \| `PlainMessage`\<[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3799](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3799)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3787](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3787)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3791](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3791)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardInventoryMatch`](InwardJobOutwardInventoryMatch.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3795](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3795)
