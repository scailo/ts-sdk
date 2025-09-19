[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialItemHistoryRequest

# Class: OutwardJobFreeIssueMaterialItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialItemHistoryRequest

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)\>

  ↳ **`OutwardJobFreeIssueMaterialItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialItemHistoryRequest.md#constructor)

### Properties

- [familyId](OutwardJobFreeIssueMaterialItemHistoryRequest.md#familyid)
- [outwardJobFreeIssueMaterialId](OutwardJobFreeIssueMaterialItemHistoryRequest.md#outwardjobfreeissuematerialid)
- [fields](OutwardJobFreeIssueMaterialItemHistoryRequest.md#fields)
- [runtime](OutwardJobFreeIssueMaterialItemHistoryRequest.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialItemHistoryRequest.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialItemHistoryRequest.md#clone)
- [equals](OutwardJobFreeIssueMaterialItemHistoryRequest.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialItemHistoryRequest.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialItemHistoryRequest.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialItemHistoryRequest.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialItemHistoryRequest.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialItemHistoryRequest.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialItemHistoryRequest.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialItemHistoryRequest.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialItemHistoryRequest.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialItemHistoryRequest.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialItemHistoryRequest.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialItemHistoryRequest.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialItemHistoryRequest**(`data?`): [`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialItemHistoryRequest\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1112)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1110)

___

### outwardJobFreeIssueMaterialId

• **outwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

Stores the outward job free issue material ID

**`Generated`**

from field: uint64 outward_job_free_issue_material_id = 10;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1103](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1103)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1119](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1119)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1117)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialItemHistoryRequest"``

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1118)

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1136)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1124](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1124)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1128](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1128)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItemHistoryRequest`](OutwardJobFreeIssueMaterialItemHistoryRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1132)
