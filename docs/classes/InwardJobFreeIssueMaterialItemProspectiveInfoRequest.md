[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialItemProspectiveInfoRequest

# Class: InwardJobFreeIssueMaterialItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective inward job free issue material item

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)\>

  ↳ **`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#familyid)
- [inwardJobFreeIssueMaterialId](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#inwardjobfreeissuematerialid)
- [fields](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#fields)
- [runtime](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#runtime)
- [typeName](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#clone)
- [equals](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#tojson)
- [toJson](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialItemProspectiveInfoRequest**(`data?`): [`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1106)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1104)

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

Stores the inward job free issue material ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 10;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1097)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1113)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1111)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialItemProspectiveInfoRequest"``

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1112)

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1130](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1130)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1118)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1122)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemProspectiveInfoRequest`](InwardJobFreeIssueMaterialItemProspectiveInfoRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1126)
